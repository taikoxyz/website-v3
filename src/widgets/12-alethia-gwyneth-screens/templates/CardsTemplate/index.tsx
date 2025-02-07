import React from "react";
import clsx from "clsx";
import { NextLink } from "shared/ui/NextLink";
import Image from "shared/ui/image";
import ArrowLinkIcon from "shared/icons/ArrowLink.icon";
import css from "./CardsTemplate.module.scss";

interface Props {
    data: {
        icon: string;
        title: string;
        text: string;
        link?: string;
        disabled?: boolean;
    }[];
    cols?: number;
}

export const CardsTemplate: React.FC<Props> = ({ data, cols = 3 }) => {
    return (
        <div className={css.cards}>
            <div className="container">
                <div className={clsx(css.cards_wrapper, css["_" + cols])}>
                    {data.map((item) => (
                        <NextLink
                            className={css.cards_link}
                            href={item.disabled ? undefined : item.link}
                            key={item.title + item.link}
                        >
                            <Image.Default className={css.cards_link_icon} src={item.icon} alt="" />
                            <span
                                className={css.cards_link_title}
                                dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                            <span
                                className={css.cards_link_text}
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                            {item.disabled && (
                                <span className={css.cards_link_coming}>Coming soon</span>
                            )}
                            {item.link && !item.disabled && (
                                <ArrowLinkIcon className={css.cards_link_link} />
                            )}
                        </NextLink>
                    ))}
                </div>
            </div>
        </div>
    );
};
