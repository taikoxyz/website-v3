import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import { FaqTemplate } from "widgets/12-alethia-gwyneth-screens/templates";
import { Screens, useDaoData } from "widgets/14-dao-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { SubscribeSection } from "shared/components/SubscribeSection";
import { pagesApi } from "shared/lib/api/pages.api";
import { partialApi } from "shared/lib/api/partials.api";

// import css from "./dao.module.scss";

const Dao: NextPage = () => {
    const data = useDaoData();

    return (
        <MainLayout title="DAO">
            <DefaultLayout>
                <Screens.Welcome />
                <Screens.About />
                <FaqTemplate
                    title={data.faq_title}
                    text={data.faq_text}
                    questions={data.faq_data}
                />
                <SubscribeSection />
            </DefaultLayout>
        </MainLayout>
    );
};

export default Dao;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
            queryKey: ["dao-page"],
            queryFn: () => pagesApi.dao(),
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
