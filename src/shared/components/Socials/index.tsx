import React from "react";
import { socialsNav } from "./utils/socials-nav";
import clsx from "clsx";
import Sprite from "shared/ui/sprite";
import css from "./Socials.module.scss";

interface Props {
    className?: string;
}

export const Socials: React.FC<Props> = ({ className }) => {
    return (
        <div className={clsx(css.socials, className)}>
            {socialsNav.map((social) => (
                <a
                    className={css.socials_link}
                    href={social.url}
                    key={social.url}
                    target="_blank"
                    data-social
                >
                    {social.icon.split(":")[1]}
                    <Sprite.Default icon={social.icon} />
                </a>
            ))}
        </div>
    );
};
