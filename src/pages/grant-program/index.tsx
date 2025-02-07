import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as GrantScreens from "widgets/11-grant-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./grant-program.module.scss";

const GrantProgram: NextPage = () => {
    const { t } = useTranslation("grant-program");

    return (
        <MainLayout
            title="Grant Program – Taiko"
            description={t("hero.title")}
            className={css.root}
        >
            <DefaultLayout>
                <div className={css.gap}>
                    <GrantScreens.Hero />
                    <GrantScreens.KeyDates />
                    <GrantScreens.Mission />
                    {/* <GrantScreens.Community /> */}
                    <GrantScreens.Tracks />
                    <GrantScreens.Support />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default GrantProgram;

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
    ["grant-program"]
);
