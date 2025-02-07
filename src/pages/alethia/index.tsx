import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import { Screens, Templates, useAlethiaData } from "widgets/12-alethia-gwyneth-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { pagesApi } from "shared/lib/api/pages.api";
import { partialApi } from "shared/lib/api/partials.api";
import { fileServerPath } from "shared/lib/utils/file-server-path";

// import css from "./alethia.module.scss";

const Alethia: NextPage = () => {
    const data = useAlethiaData();

    return (
        <MainLayout title="Alethia">
            <DefaultLayout>
                <Templates.HeroTemplate
                    logo={fileServerPath(data.hero_logo.url!)}
                    title={data.hero_title}
                    text={data.hero_text}
                />
                <Templates.AboutTemplate
                    title={data.about_title}
                    text={data.about_text}
                    subtext={data.about_subtext}
                />
                <Screens.AlethiaFeatures />
                <Templates.ExploreTemplate
                    background="/img/alethia/explore.webp"
                    suptitle={data.explore_suptitle}
                    title={data.explore_title}
                    text={data.explore_text}
                />
                <Templates.CardsTemplate
                    data={data.cards_list.map((item) => ({
                        icon: fileServerPath(item.icon.url!),
                        text: item.text,
                        title: item.title,
                        disabled: item.disabled,
                        link: item.href,
                    }))}
                    cols={3}
                />
                <Templates.FaqTemplate
                    title={data.faq_title}
                    text={data.faq_text}
                    questions={data.faq_data}
                />
                <Screens.Subscribe />
            </DefaultLayout>
        </MainLayout>
    );
};

export default Alethia;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
            queryKey: ["alethia-page"],
            queryFn: () => pagesApi.alethia(),
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
