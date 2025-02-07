import dynamic from "next/dynamic";
import React from "react";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
// import css from "./default-layout.module.scss";

const Menu = dynamic(
    () => import("widgets/menu").then((module) => module.Menu),
    { ssr: false }
);

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({
    children
}) => {
    return (
        <React.Fragment>
            <Header />
            <Menu />
            {children}
            <Footer />
        </React.Fragment>
    );
};