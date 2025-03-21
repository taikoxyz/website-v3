import React from "react";
import clsx from "clsx";
import { useGwynethAppsData } from "widgets/15-gwyneth-apps-screens/lib";
import { WrapperButton } from "shared/components/@buttons/button";
import { fileServerPath } from "shared/lib/utils/file-server-path";
import Image from "shared/ui/image";
import { loadImage } from "shared/lib/utils/loadImage";
import { BigLines, CenteredLines } from "widgets/15-gwyneth-apps-screens/_components";
import css from "./Hero.module.scss";

export const Hero: React.FC = () => {
    const data = useGwynethAppsData();
    const [isAnimated, setAnimated] = React.useState(false);

    React.useEffect(() => {
        loadImage("/img/gwyneth-apps/logos.webp")
            .then(() => setTimeout(() => setAnimated(true), 500));
    }, []);

    const DApps = React.useCallback(
        () =>
            data.hero_dapps ? (
                <div className={css.dapps}>
                    <div className={css.dapps_logos}>
                        {data.hero_dapps.icons.map((item) => (
                            <img
                                className={css.dapps_logos_item}
                                src={fileServerPath(item.url)}
                                alt=""
                                key={item.url}
                            />
                        ))}
                    </div>

                    <div className={css.dapps_content}>
                        <p className={css.dapps_title}>{data.hero_dapps.value}</p>
                        <p className={css.dapps_text}>{data.hero_dapps.name}</p>
                    </div>
                </div>
            ) : null,
        []
    );

    return (
        <section 
            className={clsx(css.hero, isAnimated && css._animated)} 
            id="hero"
        >
            <div className="container">
                <div className={css.hero_wrapper}>
                    <div className={css.hero_animation}>
                        <BigLines className={css.hero_animation_bigLines} />
                        <div className={css.hero_animation_centeredLines}>
                            <CenteredLines />
                        </div>
                        <div className={css.hero_animation_logos}>
                            <Image.Default
                                src="/img/gwyneth-apps/logos.webp"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={css.hero_content}>
                        <div className={css.hero_content_left}>
                            <h1
                                className={css.hero_title}
                                dangerouslySetInnerHTML={{ __html: data.hero_title }}
                            />
                        </div>
                        <div className={css.hero_about}>
                            <p className={css.hero_about_title}>{data.hero_about_suptitle}</p>
                            <p className={css.hero_about_text}>{data.hero_about_text}</p>
                            {data.hero_about_btn && (
                                <WrapperButton
                                    {...data.hero_about_btn}
                                    className={css.hero_about_btn}
                                />
                            )}
                        </div>
                        <DApps />
                    </div>
                </div>
            </div>
        </section>
    );
};
