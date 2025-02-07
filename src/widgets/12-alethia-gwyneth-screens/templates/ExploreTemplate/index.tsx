import React from "react";
import Image from "shared/ui/image";
import css from "./ExploreTemplate.module.scss";

interface Props {
    background: string;
    suptitle: string;
    title: string;
    text: string;
}

export const ExploreTemplate: React.FC<Props> = ({ background, suptitle, text, title }) => {
    return (
        <div className={css.explore}>
            <div className="container">
                <div className={css.explore_wrapper}>
                    <Image.Default className={css.explore_image} src={background} alt="" />
                    <div className={css.explore_content}>
                        <p
                            className={css.explore_suptitle}
                            dangerouslySetInnerHTML={{ __html: suptitle }}
                        /><br/>
                        <h2
                            className={css.explore_title}
                            dangerouslySetInnerHTML={{ __html: title }}
                        /><br/>
                        <p
                            className={css.explore_text}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    </div>
                </div>
                <svg
                    style={{
                        visibility: "hidden",
                        position: "absolute",
                    }}
                    width="0"
                    height="0"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                result="goo"
                            />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};
