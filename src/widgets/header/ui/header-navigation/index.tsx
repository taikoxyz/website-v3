import React from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import clsx from "clsx";
import { NavHeader, headerNavigation, useNavigationHeader } from "widgets/header/lib";
import ArrowDownIcon from "shared/icons/ArrowDown.icon";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NavLink } from "shared/lib/types/navigation.types";
import { executeOnReadyPage } from "shared/lib/utils/browser";
import { fileServerPath } from "shared/lib/utils/file-server-path";
import { loadImage } from "shared/lib/utils/loadImage";
import { loadVideo } from "shared/lib/utils/loadVideo";
import Accordion from "shared/ui/Accordion";
import Image from "shared/ui/image";
import css from "./header-navigation.module.scss";

interface Props {
    className?: string;
}

function RenderItem(link: NavLink) {
    const external = link.href?.startsWith("http");

    const content = (
        <>
            <Image.Default src={fileServerPath(link.icon.url!)} alt="" />
            {link.name}
            {external && <ArrowLinkIcon />}
            {link.disabled && <span className={css.menu_content_comingSoon}>Coming soon</span>}
        </>
    );

    return (
        <React.Fragment key={link.name + link.href}>
            {link.children.length === 0 && (
                <Link
                    className={css.menu_content_link}
                    href={link.href || "#"}
                    target={external ? "_blank" : undefined}
                    prefetch={false}
                >
                    {content}
                </Link>
            )}
            {link.children.length > 0 && (
                <Accordion className={css.accordion_root}>
                    {({ active }) => (
                        <>
                            <Accordion.Button>
                                <button className={css.accordion}>
                                    {content}
                                    <ArrowDownIcon
                                        style={{
                                            transform: active ? "scaleY(-1)" : undefined,
                                        }}
                                    />
                                </button>
                            </Accordion.Button>
                            <Accordion.Content>
                                <div className={css.accordion_content}>
                                    {link.children!.map((sub) => (
                                        <Link
                                            className={css.accordion_sublink}
                                            href={sub.href}
                                            key={sub.name + sub.href}
                                            prefetch={false}
                                        >
                                            <span className={css.accordion_sublink_inner}>
                                                {sub.name}
                                                {sub.href.startsWith("http") && <ArrowLinkIcon />}
                                            </span>
                                            <span className={css.accordion_sublink_desc}>
                                                {sub.desc}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </>
                    )}
                </Accordion>
            )}
        </React.Fragment>
    );
}

export const HeaderNavigation: React.FC<Props> = ({ className }) => {
    const [navActive, setNavActive] = React.useState<NavHeader | null>(null);
    const [active, setActive] = React.useState(false);
    const navigation = useNavigationHeader();

    const open = (item: NavHeader) => {
        setActive(true);
        setNavActive(item);
    };

    const close = () => {
        setActive(false);
    };

    React.useEffect(
        () =>
            executeOnReadyPage(() => {
                navigation.forEach((item) => {
                    if (item.media) {
                        if (/(mp4)|(avi)|(webm)$/.test(item.media.url)) {
                            loadVideo(fileServerPath(item.media.url));
                        } else {
                            loadImage(fileServerPath(item.media.url));
                        }
                    }
                    item.links.forEach((child) => {
                        child.forEach((subchild) => {
                            if (subchild.icon) {
                                loadImage(fileServerPath(subchild.icon.url));
                            }
                        });
                    });
                });
            }),
        []
    );

    return (
        <div className={clsx(css.nav, navActive && css._active, className)} onMouseLeave={close}>
            {navigation.map((item) => (
                <button
                    className={clsx(css.nav_item, item.name === navActive?.name && css._active)}
                    onMouseEnter={() => open(item)}
                    key={item.name}
                >
                    {item.name}
                    <ArrowDownIcon />
                </button>
            ))}

            <CSSTransition classNames={css} timeout={300} in={active} mountOnEnter unmountOnExit>
                <div className={css.menu}>
                    <div className={css.menu_content}>
                        {(navActive?.links || []).map((column, id) => (
                            <div className={css.menu_content_column} key={id}>
                                {column.map((link) => (
                                    <RenderItem {...link} key={link.name + link.href} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={css.menu_image}>
                        {/(mp4)|(avif)|(webm)$/.test(navActive?.media.url || "") ? (
                            <video
                                src={fileServerPath(navActive?.media.url as string)}
                                autoPlay
                                loop
                                playsInline
                                muted
                            />
                        ) : (
                            <Image.Default
                                src={fileServerPath(navActive?.media.url as string)}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};
