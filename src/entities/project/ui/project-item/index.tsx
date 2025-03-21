import React from "react";
import clsx from "clsx";
import css from "./project-item.module.scss";

interface Props {
    iconSrc: string;
    title: string;
    text: string;
    type: string;
    categories: { id: number; name: string }[];
    url?: string;
    disabled?: boolean;
    className?: string
}

export const ProjectItem: React.FC<Props> = ({
    url,
    categories,
    iconSrc,
    text,
    type,
    title,
    disabled,
    className
}) => {
    return (
        <a href={url} className={clsx(css.project, className)} target="_blank">
            <span className={css.head}>
                <img className={css.icon} src={iconSrc} alt="" />

                <span
                    className={clsx(css.label, type === "Testnet" && css.labelTestnet)}
                    data-label=""
                >
                    <span>{type}</span>
                </span>
            </span>

            <span className={css.title}>{title}</span>

            <span className={css.text}>{text}</span>

            {categories.length > 0 && (
                <span className={css.categories}>
                    {categories.map((category) => (
                        <span className={css.categories_item} key={category.id}>
                            {category.name}
                        </span>
                    ))}
                </span>
            )}

            {disabled && (
                <span className={css.project_disabled}>
                    <span className={css.project_comingSoon}>Coming soon</span>
                </span>
            )}
        </a>
    );
};
