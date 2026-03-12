import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as GuideScreens from "widgets/11-guide-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./guide.module.scss";

const DeployAiAgentGuide: NextPage = () => {
    const { t } = useTranslation("guide-ai-agent");

    return (
        <MainLayout
            description={t("hero.subtitle")}
            title="How to Deploy AI Agents on an Ethereum L2 – Taiko"
            meta={{
                title: "How to Deploy AI Agents on an Ethereum L2 – Taiko",
                description: t("hero.subtitle"),
            }}
        >
            <DefaultLayout>
                <div className={css.gap}>
                    <GuideScreens.Hero />
                    <GuideScreens.Content />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default DeployAiAgentGuide;

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
    ["guide-ai-agent"]
);
