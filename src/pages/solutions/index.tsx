import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as SolutionScreens from "widgets/06-solution-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./solutions.module.scss";

const Solutions: NextPage = () => {
    const { t } = useTranslation("solutions");

    return (
        <MainLayout
            className={css.solutions}
            description={t("hero.title")}
            title="Solutions – Taiko"
        >
            <DefaultLayout>
                <SolutionScreens.SolutionsLayout>
                    <SolutionScreens.Hero />
                    <SolutionScreens.Platform />
                    <SolutionScreens.Infrastructure />
                </SolutionScreens.SolutionsLayout>
            </DefaultLayout>
        </MainLayout>
    );
};

export default Solutions;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

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
    ["solutions"]
);
