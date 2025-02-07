import React from "react";
import { FooterSubscribe } from "features/footer-subscribe";
import css from "./Subscribe.module.scss";

export const Subscribe: React.FC = () => {
    return (
        <section className={css.subscribe}>
            <div className="container">
                <FooterSubscribe />
            </div>
        </section>
    );
};
