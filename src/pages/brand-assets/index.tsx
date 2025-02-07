import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as BrandScreens from "widgets/03-brand-screens";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./brand-assets.module.scss";

const BrandAssets: NextPage = () => {
    const { t } = useTranslation("brand-assets");

    return (
        <MainLayout className={css.root} description={t("hero.text")} title="Brand Assets – Taiko">
            <DefaultLayout>
                <div className={css.gap}>
                    <BrandScreens.Hero />
                    <BrandScreens.Logo />
                    <BrandScreens.ColorPalette />
                    <BrandScreens.Topography />
                    <BrandScreens.BrandBook />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default BrandAssets;

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
    ["brand-assets"]
);
