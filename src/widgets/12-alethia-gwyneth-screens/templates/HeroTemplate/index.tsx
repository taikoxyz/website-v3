import React from "react";
import Image from "shared/ui/image";
import css from "./HeroTemplate.module.scss";

interface Props {
    logo: string;
    title: string;
    text: string;
}

export const HeroTemplate: React.FC<Props> = ({ logo, text, title }) => {
    return (
        <div className={css.hero}>
            <div className={css.hero_wrapper}>
                <div className={css.hero_container}>
                    <div className={css.hero_logo}>
                        <Image.Default 
                            className={css.hero_logo_image} 
                            src={logo} 
                            alt="" 
                        />
                    </div>
                    <div className={css.hero_content}>
                        <h1
                            className={css.hero_title}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        />
                        <p
                            className={css.hero_text}
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        />
                    </div>
                    <div className={css.hero_icon}>
                        <Image.Default
                            className={css.hero_icon_image}
                            src="/img/alethia/hero-icon.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
