import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import clsx from "clsx";
import { withTranslation } from "app/providers/withTranslation";
import MainLayout from "widgets/layouts/main-layout";
import { Menu } from "widgets/menu";
import * as HomeScreens from "widgets/old/01-home-screens";
import { HomeApiKeys } from "widgets/old/01-home-screens/lib/types";
import { Footer } from "widgets/old/footer";
import { Header } from "widgets/old/header";
import { blogApi } from "shared/lib/api";
import { executeOnReadyPage } from "shared/lib/utils/browser";
import css from "./home.module.scss";

function Home() {
    const [complete, setComplete] = useState(false);
    const { t } = useTranslation("home");

    useEffect(() => executeOnReadyPage(() => setComplete(true)), []);

    return (
        <MainLayout
            className={clsx(css.root, complete && css.rootAnimated)}
            meta={{
                title: t("Home - Taiko"),
                description: t(
                    "Taiko is a fully permissionless, Ethereum-equivalent based rollup. Inspired, secured, and sequenced by Ethereum."
                ),
                image: "/img/og-image.png",
                url: "https://taiko.xyz/",
            }}
            title="Home – Taiko"
        >
            <Menu />
            <Header fixed />
            <div className={css.gap}>
                <HomeScreens.GradientFill>
                    <HomeScreens.Hero />
                    <HomeScreens.StickyContent
                        stickyEl={<HomeScreens.Advantages />}
                        children={<HomeScreens.About />}
                    />
                </HomeScreens.GradientFill>
                <HomeScreens.Solutions />
                <HomeScreens.Ecosystem />
                <HomeScreens.Community />
                <HomeScreens.Blog />
                <HomeScreens.Trailblazer />
                <Footer subscribeBar />
            </div>
        </MainLayout>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps = withTranslation(async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [HomeApiKeys.BLOG],
        queryFn: () => blogApi.getAll(),
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}, ["home"]);
