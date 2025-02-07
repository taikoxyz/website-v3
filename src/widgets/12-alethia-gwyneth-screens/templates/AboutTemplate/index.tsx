import React from "react";
import css from "./AboutTemplate.module.scss";
import Image from "shared/ui/image";

interface Props {
    title: string;
    text: string;
    subtext: string;
}

export const AboutTemplate: React.FC<Props> = ({
    subtext,
    text,
    title
}) => {
    return (
        <div className={css.about}>
            <div className="container">
                <div className={css.about_wrapper}>
                    <div className={css.about_left}>
                        <p className={css.about_label}>About</p>
                        <h2 className={css.about_title}>{title}</h2>
                    </div>
                    <div className={css.about_taiko}>
                        <div className={css.about_taiko_inner}>
                            <div className={css.about_taiko_img} >
                                <Image.Default 
                                    src="/img/home-new/taiko.webp" 
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className={css.about_right}>
                        <p className={css.about_text}>{text}</p>
                        <p className={css.about_subtext}>{subtext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};