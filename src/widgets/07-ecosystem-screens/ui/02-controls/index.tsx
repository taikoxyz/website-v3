import React, { useEffect, useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce'
import { useTranslation } from 'next-i18next';
import { TaikoSelect } from 'shared/components/taiko-select';
import { Input } from 'shared/ui/input';
import Sprite from 'shared/ui/sprite';
import { useEcosystemFilters } from 'widgets/07-ecosystem-screens/provider';
import { IProjectCategory } from 'shared/lib/types';
import { projectApi } from 'shared/lib/api';
import css from './controls.module.scss';

const ALL = "ALL";

const types = [
    { name: "All Types", value: ALL },
    { name: "Mainnet", value: "Mainnet" },
    { name: "Testnet", value: "Testnet" },
    { name: "Coming soon", value: "Coming soon" },
];


export const Controls: React.FC = () => {
    const { filters, setFilter } = useEcosystemFilters();
    const { t } = useTranslation('ecosystem');
    const [categories, setCategories] = useState<IProjectCategory[]>([]);

    useEffect(() => {
        projectApi.getCategories()
            .then((categories) => setCategories(categories.results));
    }, []);

    const onChangeSearch = useDebouncedCallback((v: string) => setFilter('search', v), 500)


    const renderCategories = useMemo(() => {
        return [{ name: "All Categories", value: ALL }].concat(categories
            .filter((item) => (item.projects?.count || 0) > 0)
            .map(({ name }) => ({ name, value: name })))
    }, [categories]);

    return (
        <section className={css.controls}>
            <div className="container">
                <div className={css.wrapper}>
                    <Input
                        className={{
                            root: css.search,
                            field: css.search_field,
                            input: css.search_input
                        }}
                        controls={
                            <Sprite.Default
                                className={css.search_icon}
                                icon="magnifier"
                            />
                        }
                        defaultValue={filters.search}
                        onKeyDown={ev => {
                            if (ev.key === 'Enter') {
                                setFilter('search', ev.currentTarget.value)
                            }
                        }}
                        onChange={(ev) => onChangeSearch(ev.currentTarget.value)}
                        placeholder={t('searchProjects')}
                    />

                    <div className={css.selects}>
                        <TaikoSelect
                            value={
                                filters.type
                                    ? { name: filters.type, value: filters.type }
                                    : types[1] // Set 'Mainnet' as the default selected option
                            }
                            onChange={(data) =>
                                setFilter(
                                    'type',
                                    data?.value === ALL
                                        ? null
                                        : data?.name || null
                                )
                            }
                            options={types}
                            variant="select"
                        />
                        <TaikoSelect
                            value={
                                filters.category
                                    ? { name: filters.category, value: filters.category }
                                    : renderCategories[0]
                            }
                            onChange={(data) => setFilter(
                                'category',
                                data?.value === ALL
                                    ? null
                                    : data?.name || null
                            )}
                            options={renderCategories}
                            variant="select"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}