import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import { EcosystemFilters, getProjectsQuery } from "widgets/07-ecosystem-screens";
import * as EcosystemScreens from "widgets/07-ecosystem-screens";
import { EcosystemApiEnum } from "widgets/07-ecosystem-screens/lib/types";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { projectApi } from "shared/lib/api";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./ecosystem.module.scss";

const Ecosystem: NextPage = () => {
    const { t } = useTranslation("ecosystem");

    return (
        <MainLayout
            title="Ecosystem – Taiko"
            description={t('title')}
            className={css.root}
        >
            <DefaultLayout>
                <div className={css.gap}>
                    <EcosystemFilters>
                        <EcosystemScreens.Hero />
                        <EcosystemScreens.Controls />
                        <EcosystemScreens.Disclaimer />
                        <EcosystemScreens.Projects />
                        <EcosystemScreens.Grant />
                    </EcosystemFilters>
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default Ecosystem;

export const getServerSideProps: GetServerSideProps = withTranslation(
    async (ctx) => {
        const queryClient = new QueryClient();

        const query = getProjectsQuery({
            ...ctx.query,
            search: "",
        });

        await queryClient.prefetchInfiniteQuery({
            queryKey: [EcosystemApiEnum.ALL_PROJECTS, query],
            queryFn: () => projectApi.getAll(query),
            initialPageParam: 0,
        });

        await queryClient.prefetchQuery({
            queryKey: [EcosystemApiEnum.LAST_PROJECT],
            queryFn: () => projectApi.getLast(),
        });

        await queryClient.prefetchQuery({
            queryKey: ["navigation"],
            queryFn: () => partialApi.navigation(),
        });

        return {
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        };
    },
    ["ecosystem"]
);
