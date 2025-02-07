import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { withTranslation } from "app/providers/withTranslation";
import { Screens } from "widgets/01-home-screens";
import MainLayout from "widgets/layouts/main-layout";
import { MediaQuery } from "shared/ui/media-query";
import { WrapSVG } from "widgets/01-home-screens/components/WrapSVG";
import css from "./home.module.scss";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { pagesApi } from "shared/lib/api/pages.api";
import { partialApi } from "shared/lib/api/partials.api";
import { DefaultLayout } from "widgets/layouts/default-layout";

gsap.registerPlugin(ScrollTrigger);

const HomePagination = dynamic(() => import("widgets/01-home-screens/components/HomePagination"), {
    ssr: false,
});

function Home() {
    const { t } = useTranslation("home");

    return (
        <MainLayout
            className={clsx(css.root)}
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
            <DefaultLayout>
                <MediaQuery 
                    query="(min-width: 991px)" 
                    children={<HomePagination />} 
                />
                <Screens.Hero />
                <Screens.Scaling />
                <Screens.Explore />
                <WrapSVG>
                    <Screens.About />
                    <Screens.Journey />
                    <Screens.Governance />
                </WrapSVG>
                <Screens.Subscribe />
            </DefaultLayout>
        </MainLayout>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps = withTranslation(
    // eslint-disable-next-line require-await
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
            queryKey: ["home-page"],
            queryFn: () => pagesApi.home(),
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
    ["home"]
);
