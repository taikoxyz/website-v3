import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as AboutScreens from "widgets/02-about-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./about.module.scss";

const About: NextPage = () => {
    const { t } = useTranslation("about");

    return (
        <MainLayout description={t("hero.title")} title="About – Taiko">
            <DefaultLayout>
                <div className={css.gap}>
                    <AboutScreens.Hero />
                    <AboutScreens.Community />
                    <AboutScreens.Mission />
                    <AboutScreens.Brand />
                    <AboutScreens.Careers />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default About;

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
    ["about"]
);
