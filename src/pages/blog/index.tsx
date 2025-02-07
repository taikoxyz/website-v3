import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { withTranslation } from "app/providers/withTranslation";
import * as BlogScreens from "widgets/08-blog-screens";
import { getBlogQuery } from "widgets/08-blog-screens";
import { BlogApiKeys } from "widgets/08-blog-screens/lib/types";
import { WithBlogFilter } from "widgets/08-blog-screens/provider";
import { DefaultLayout } from "widgets/layouts/default-layout";
import MainLayout from "widgets/layouts/main-layout";
import { SideLayout } from "widgets/layouts/side-layout";
import { blogApi } from "shared/lib/api";
import { partialApi } from "shared/lib/api/partials.api";
import css from "./blog.module.scss";

const Blog: NextPage = () => {
    return (
        <MainLayout description="Our blog" title="Blog — Taiko">
            <DefaultLayout>
                <WithBlogFilter>
                    <div className={css.gap}>
                        <SideLayout
                            sideElement={<BlogScreens.SideFilters />}
                            classNames={{ main: css.sideLayout }}
                        >
                            <BlogScreens.Head />
                            <BlogScreens.Blogs />
                        </SideLayout>
                    </div>
                </WithBlogFilter>
            </DefaultLayout>
        </MainLayout>
    );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = withTranslation(
    async (ctx) => {
        const queryClient = new QueryClient();

        const query = getBlogQuery(ctx.query);

        await queryClient.prefetchInfiniteQuery({
            queryKey: [BlogApiKeys.ALL_BLOGS, query],
            queryFn: () => blogApi.getAll(query),
            initialPageParam: 0,
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
    ["blog"]
);
