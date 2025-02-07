import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useApp } from "app/providers/withApp";
import { Socials } from "shared/components/Socials";
import { MediaQuery } from "shared/ui/media-query";
import Sprite from "shared/ui/sprite";
import { HeaderNavigation } from "./ui";
import css from "./header.module.scss";

export const Header: React.FC = () => {
    const [{ menuActive }, , { setStateValue }] = useApp();

    const toggleMenu = () => setStateValue("menuActive", !menuActive);

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header_wrapper}>
                    <Link className={css.header_logo} prefetch={false} href="/">
                        Taiko
                        <Sprite.Default icon="logo" />
                    </Link>

                    <MediaQuery query="(min-width: 1024px)" children={<HeaderNavigation />} />

                    <div className={css.header_socials}>
                        <Socials />
                    </div>

                    <button
                        className={clsx(css.header_burger, menuActive && css._active)}
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <strong>
                            <span></span>
                            <span></span>
                            <span></span>
                        </strong>
                    </button>
                </div>
            </div>
        </header>
    );
};
