import React, { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withTranslation } from 'app/providers/withTranslation';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { PositionApiEnum} from 'widgets/05-position-screens/lib/types';
import { careerApi } from 'shared/lib/api';
import { usePosition } from 'widgets/05-position-screens';

import MainLayout from 'widgets/layouts/main-layout';
import * as PositionScreens from 'widgets/05-position-screens';
import css from './position.module.scss';
import { DefaultLayout } from 'widgets/layouts/default-layout';
import { partialApi } from 'shared/lib/api/partials.api';

const Position: NextPage = () => {
    const position = usePosition();
    const router = useRouter();

    useEffect(() => {
        (window as any).router = router
    }, []);

    return (
        <MainLayout
            title={`${position.title} – Taiko`}
            className={css.position}
        >
            <DefaultLayout>
            <div className={css.gap}>
                <PositionScreens.Hero />
                <PositionScreens.Content />
            </div>
            </DefaultLayout>
        </MainLayout>
    );
}

export default Position;

export const getServerSideProps: GetServerSideProps = withTranslation(
    async (ctx) => {
        const queryClient = new QueryClient();
        const slug = ctx.query.slug?.toString() || '';

        await queryClient.prefetchQuery({
            queryKey: [PositionApiEnum.POSITION],
            queryFn: () => careerApi.getOne(slug)
        });

        await queryClient.prefetchQuery({
                    queryKey: ["navigation"],
                    queryFn: () => partialApi.navigation(),
                });

        if(!queryClient.getQueryData) {
            return {
                props: {},
                redirect: {
                    permanent: false,
                    destination: '/careers'
                }
            };
        }

        return {
            props: {
                dehydratedState: dehydrate(queryClient)
            }
        }
    },
    ['position']
)