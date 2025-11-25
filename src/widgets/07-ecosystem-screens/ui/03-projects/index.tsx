import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { Button } from 'shared/components/@buttons/button';
import { projectApi } from 'shared/lib/api';
import { IBaseFields, IProject, IProjectsResponse } from 'shared/lib/types';
import Sprite from 'shared/ui/sprite';
import { flatProjects, getProjectsQuery } from 'widgets/07-ecosystem-screens/lib';
import { PRIORITY_PROJECT_IDS } from 'widgets/07-ecosystem-screens/lib/priorityProjects';
import { EcosystemApiEnum } from 'widgets/07-ecosystem-screens/lib/types';
import { useEcosystemFilters } from 'widgets/07-ecosystem-screens/provider';
import { ProjectsList } from '../03.01-projects-list';
import css from './projects.module.scss';

export const Projects: React.FC = () => {
    const { t } = useTranslation('ecosystem');
    const { filters } = useEcosystemFilters();
    const router = useRouter();

    const { data: lastProject } = useQuery<IBaseFields>({
        queryKey: [EcosystemApiEnum.LAST_PROJECT],
    });

    // Fetch priority projects separately
    const priorityProjectQueries = useQueries({
        queries: PRIORITY_PROJECT_IDS.map(id => ({
            queryKey: [EcosystemApiEnum.PRIORITY_PROJECTS, id],
            queryFn: () => projectApi.getOne(id),
            staleTime: Infinity,
        }))
    });

    const priorityProjects = useMemo(() => {
        return priorityProjectQueries
            .map(query => query.data)
            .filter((project): project is IProject => project !== undefined);
    }, [priorityProjectQueries]);

    const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<IProjectsResponse>({
        queryKey: [
            EcosystemApiEnum.ALL_PROJECTS,
            getProjectsQuery(router.query, filters)
        ],
        initialPageParam: 0,
        queryFn: ({ pageParam }) => projectApi.getAll(
            getProjectsQuery(router.query, {
                ...filters,
                page: pageParam,
            })
        ),
        getNextPageParam: (lastPage) => {
            if (lastPage.meta.page < lastPage.meta.pageCount) {
                return lastPage.meta.page + 1;
            }
        },
    });

    const projects = useMemo(() => {
        const paginatedProjects = flatProjects(data?.pages || []);

        // Filter out priority projects from paginated results to avoid duplicates
        const priorityProjectIds = new Set(priorityProjects.map(p => p.id));
        const filteredProjects = paginatedProjects.filter(p => !priorityProjectIds.has(p.id));

        // Combine: priority projects first, then paginated projects
        return [...priorityProjects, ...filteredProjects];
    }, [data, priorityProjects]);

    return (
        <section className={css.projects}>
            <div className="container">
                <div className={css.wrapper}>
                    <ProjectsList projects={projects} />

                    {lastProject && (
                        <p className={css.lastUpdate}>
                            <Sprite.Default icon="timer" />
                            <span>
                                {t('lastUpdated')}{' '}
                                {dayjs(lastProject.updatedAt).format('MMM DD, YYYY')}
                            </span>
                        </p>
                    )}

                    {hasNextPage && (
                        <Button
                            className={css.viewMore}
                            text={t('viewMore')}
                            onClick={fetchNextPage}
                            disabled={isFetching}
                            variant="pink-outlined"
                        />
                    )}
                    <div className={css.disclaimer}>
                        <strong>Disclaimer:</strong> Be cautious when using third-party applications. Applications listed are provided for information without recommendation or endorsement. <strong>Your security and privacy are important</strong>, so research thoroughly before engaging with third-party applications. We are not responsible for any risks or losses associated with the use of any third-party offerings. Proceed at your own discretion.
                    </div>
                </div>
            </div>
        </section>
    );
};
