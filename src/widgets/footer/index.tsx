import React from "react";
import { useNavigationOneLevel } from "widgets/header/lib";
import { FooterSocials } from "widgets/old/footer/ui";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import { NextLink } from "shared/ui/NextLink";
import css from "./footer.module.scss";

export const Footer: React.FC = () => {
    const navigation = useNavigationOneLevel();

    return (
        <footer className={css.footer} id="footer">
            <div className="container">
                <div className={css.footer_wrapper}>
                    <p className={css.footer_title}>
                        Join the taiko <b>community</b>
                    </p>
                    <FooterSocials />
                    <div className={css.footer_row}>
                        <p className={css.footer_copyright}>
                            &copy; {new Date().getFullYear()} Taiko Labs
                        </p>
                        <div className={css.footer_content}>
                            <p className={css.footer_content_title}>Taiko Labs</p>
                            <p className={css.footer_content_text}>
                                The most developer-friendly and secure Ethereum scaling solution.
                            </p>
                        </div>
                        <div className={css.footer_nav}>
                            <div className={css.footer_nav_inner}>
                                {navigation.map((group) => (
                                    <div className={css.footer_nav_group} key={group.name}>
                                        <p className={css.footer_nav_title}>{group.name}</p>
                                        <div className={css.footer_nav_list}>
                                            {group.links.map((link) => (
                                                <NextLink
                                                    className={css.footer_nav_link}
                                                    href={link.href}
                                                    target={
                                                        link.href?.startsWith("http")
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    key={link.name + link.href}
                                                >
                                                    <span className={css.footer_nav_link_left}>
                                                        <span className={css.footer_nav_link_name}>
                                                            {link.name}
                                                            {link.href?.startsWith("http") && (
                                                                <ArrowLinkIcon />
                                                            )}
                                                            {link.disabled && (
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_dsb
                                                                    }
                                                                >
                                                                    Coming soon
                                                                </span>
                                                            )}
                                                        </span>
                                                        {link.desc && (
                                                            <span
                                                                className={css.footer_nav_link_desc}
                                                            >
                                                                {link.desc}
                                                            </span>
                                                        )}
                                                    </span>
                                                </NextLink>
                                            ))}
                                            {/* {group.links.map((link) => (
                                                <React.Fragment key={link.name + link.href}>
                                                    {link.href ? (
                                                        <Link
                                                            className={css.footer_nav_link}
                                                            href={link.href}
                                                            target={
                                                                link.href.startsWith("http")
                                                                    ? "_blank"
                                                                    : undefined
                                                            }
                                                        >
                                                            <span
                                                                className={css.footer_nav_link_left}
                                                            >
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_name
                                                                    }
                                                                >
                                                                    {link.name}
                                                                    <ArrowLinkIcon />
                                                                </span>
                                                                {link.desc && (
                                                                    <span
                                                                        className={
                                                                            css.footer_nav_link_desc
                                                                        }
                                                                    >
                                                                        {link.desc}
                                                                    </span>
                                                                )}
                                                                {link.disabled && (
                                                                    <span
                                                                        className={
                                                                            css.footer_nav_link_dsb
                                                                        }
                                                                    >
                                                                        Coming soon
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </Link>
                                                    ) : (
                                                        <a className={css.footer_nav_link}>
                                                            <span
                                                                className={css.footer_nav_link_name}
                                                            >
                                                                {link.name}
                                                            </span>
                                                            {link.disabled && (
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_dsb
                                                                    }
                                                                >
                                                                    Coming soon
                                                                </span>
                                                            )}
                                                        </a>
                                                    )}
                                                </React.Fragment>
                                            ))} */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
