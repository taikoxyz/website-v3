import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { Screens } from "widgets/15-gwyneth-apps-screens";
import { partialApi } from "shared/lib/api/partials.api";
import { SubscribeSection } from "shared/components/SubscribeSection";
import { pagesApi } from "shared/lib/api/pages.api";
// import css from "./apps.module.scss";

const Apps: NextPage = () => {
    return (
        <MainLayout title="Gwyneth Apps">
            <DefaultLayout>
                <Screens.Hero />
                <Screens.Disclaimer />
                <Screens.Apps />
                <SubscribeSection />
            </DefaultLayout>
        </MainLayout>
    );
};

export default Apps;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
            queryKey: ["gwyneth-apps"],
            queryFn: () => pagesApi.gwynethApps(),
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
    []
);
