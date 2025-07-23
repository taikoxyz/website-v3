import dayjs from "dayjs";
import { ProjectItem } from "entities/project";
import React from "react";
import { Button } from "shared/components/@buttons/button";
import { TaikoSelect } from "shared/components/taiko-select";
import { fileServerPath } from "shared/lib/utils/file-server-path";
import { Input } from "shared/ui/input";
import Sprite from "shared/ui/sprite";
import { getAppsCategories, getAppsTypes, getFilteredApps, useGwynethAppsData } from "widgets/15-gwyneth-apps-screens/lib";
import { AppsFilter } from "../../lib";
import css from "./Apps.module.scss";

export const Apps: React.FC = () => {
    const { apps_list, updatedAt } = useGwynethAppsData();
    const [filter, setFilter] = React.useState<AppsFilter>({
        search: "",
        type: null,
        category: null,
        showCount: 16,
    });

    const changeSearch = (search: string) =>
        setFilter((prev) => ({ ...prev, search, showCount: 16 }));

    const changeCategory = (category: string | null) =>
        setFilter((prev) => ({ ...prev, category, showCount: 16 }));

    const changeType = (type: string | null) =>
        setFilter((prev) => ({ ...prev, type, showCount: 16 }));

    const incrementShowCount = () =>
        setFilter((prev) => ({ ...prev, showCount: prev.showCount + 16 }))

    const renderCategories = React.useMemo(() => getAppsCategories(apps_list), [apps_list]);

    const renderTypes = React.useMemo(() => getAppsTypes(apps_list), [apps_list]);

    const renderList = React.useMemo(() => getFilteredApps(apps_list, filter), [apps_list, filter]);

    return (
        <section className={css.apps} id="apps">
            <div className="container">
                <div className={css.apps_box}>
                    <div className={css.apps_controls}>
                        <Input
                            className={{
                                root: css.search,
                                field: css.search_field,
                                input: css.search_input,
                            }}
                            controls={
                                <Sprite.Default className={css.search_icon} icon="magnifier" />
                            }
                            defaultValue={filter.search}
                            onKeyDown={(ev) => {
                                if (ev.key === "Enter") {
                                    changeSearch(ev.currentTarget.value);
                                }
                            }}
                            onChange={(ev) => changeSearch(ev.currentTarget.value)}
                            placeholder="Search for projects..."
                        />

                        <div className={css.selects}>
                            <TaikoSelect
                                value={
                                    filter.type
                                        ? { name: filter.type, value: filter.type }
                                        : renderTypes[0]
                                }
                                onChange={(data) =>
                                    changeType(data?.value === "ALL" ? null : data!.name)
                                }
                                options={renderTypes}
                                variant="select"
                            />
                            <TaikoSelect
                                value={
                                    filter.category
                                        ? { name: filter.category, value: filter.category }
                                        : renderCategories[0]
                                }
                                onChange={(data) =>
                                    changeCategory(data?.value === "ALL" ? null : data!.name)
                                }
                                options={renderCategories}
                                variant="select"
                            />
                        </div>
                    </div>
                    <div className={css.apps_data}>
                        {renderList.map((item) => (
                            <ProjectItem
                                className={css.apps_data_item}
                                categories={item.categories}
                                iconSrc={fileServerPath(item.icon.url)}
                                text={item.text}
                                title={item.name}
                                type={item.type}
                                url={item.url}
                                disabled={!item.active}
                                key={item.id}
                            />
                        ))}
                    </div>

                    <p className={css.apps_lastUpdate}>
                        <Sprite.Default icon="timer" />
                        <span>Last updated on {dayjs(updatedAt).format("MMM DD, YYYY")}</span>
                    </p>

                    {renderList.length < apps_list.length && (
                        <Button
                            className={css.apps_viewMore}
                            text="View more"
                            onClick={incrementShowCount}
                            variant="pink-outlined"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};
