import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "next-i18next";
import { useApp } from "app/providers/withApp";
import { useNavigation } from "widgets/header/lib";
import { IFooterSocial } from "widgets/old/footer/lib/types";
import { useTranslationObject } from "shared/lib/hooks/use-translation-object";
import Image from "shared/ui/image";
import { MediaQuery } from "shared/ui/media-query";
import Sprite from "shared/ui/sprite";
import { MenuLinkGroup } from "./ui";
import css from "./menu.module.scss";

export const Menu: React.FC = () => {
    const socials = useTranslationObject<IFooterSocial[]>("socials", "footer");
    const { t } = useTranslation("footer");
    const [{ menuActive }, , { setStateValue }] = useApp();
    const navigation = useNavigation();

    useEffect(() => {
        document.body.style.overflow = menuActive ? "hidden" : "";
    }, [menuActive]);

    return (
        <MediaQuery
            query="(max-width: 768px)"
            children={
                <CSSTransition
                    classNames={css}
                    timeout={400}
                    in={menuActive}
                    unmountOnExit
                    mountOnEnter
                >
                    <menu className={css.menu}>
                        <div className={css.menu_wrapper}>
                            <h3 className={css.menu_title}>Menu</h3>

                            <nav className={css.menu_nav}>
                                {navigation.map((group) => (
                                    <MenuLinkGroup
                                        name={group.name}
                                        links={group.links}
                                        closeModal={() => setStateValue("menuActive", false)}
                                        key={group.name}
                                    />
                                ))}
                            </nav>

                            <h3
                                className={css.menu_join}
                                dangerouslySetInnerHTML={{
                                    __html: t("joinTaiko"),
                                }}
                            />

                            <nav className={css.menu_socials}>
                                {socials.map((social) => (
                                    <a
                                        className={css.menu_link}
                                        href={social.url}
                                        key={social.url}
                                        target="_blank"
                                    >
                                        {social.name}
                                        {social.name === "mirror" ? (
                                            <Image.Default src="/img/mirror-logo.png" alt="" />
                                        ) : (
                                            <Sprite.Default icon={social.icon} />
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </menu>
                </CSSTransition>
            }
        />
    );
};
