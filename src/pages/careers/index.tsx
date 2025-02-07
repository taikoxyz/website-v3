import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as CareersScreens from "widgets/04-career-screens";
import { CareerApiEnum } from "widgets/04-career-screens/lib/types";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { careerApi } from "shared/lib/api";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./careers.module.scss";

const Careers: NextPage = () => {
    const { t } = useTranslation("careers");

    return (
        <MainLayout className={css.careers} description={t("about.text")} title="Careers – Taiko">
            <DefaultLayout>
                <div className={css.gap}>
                    <CareersScreens.Hero />
                    {/* <CareersScreens.About /> */}
                    <CareersScreens.Positions />
                    <CareersScreens.Contact />
                </div>
            </DefaultLayout>
        </MainLayout>
    );
};

export default Careers;

export const getServerSideProps: GetServerSideProps = withTranslation(async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [CareerApiEnum.ALL_POSITIONS],
        queryFn: () => careerApi.getAll(),
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
}, ["careers"]);
