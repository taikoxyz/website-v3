import React from "react";
import * as Animations from "../../animations";
import { WrapperButton } from "shared/components/@buttons/button";
import { executeOnReadyPage } from "shared/lib/utils/browser";
import { featuresHeightCalc } from "shared/lib/utils/features-height-calc";
import { useDaoData } from "widgets/14-dao-screens/lib";
import css from "./about.module.scss";

export const About: React.FC = () => {
    const data = useDaoData();

    React.useEffect(() => {
        featuresHeightCalc();
        executeOnReadyPage(featuresHeightCalc);
    }, []);

    React.useEffect(() => {
        const fn = () => featuresHeightCalc();
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    });

    return (
        <section className={css.about}>
            <div className="container">
                <p className={css.about_suptitle}>
                    {data.about_suptitle}
                </p>
                <div className={css.about_head}>
                    <h2 
                        className={css.about_head_title} 
                        dangerouslySetInnerHTML={{
                            __html: data.about_title
                        }}
                    />
                    <p className={css.about_head_text}>
                        {data.about_text}
                    </p>
                </div>
                <ul className={css.about_wrapper}>
                    {data.about_features.map((item, index) => (
                        <li className={`${css.about_item} features-item`} key={item.title}>
                            <div className={css.about_item_top}>
                                <p className={css.about_item_index}>{(index + 1).toFixed(1)}</p>
                                <p className={css.about_item_title}>{item.title}</p>
                                {item.disabled && (
                                    <p className={css.about_item_disabled}>Coming soon</p>
                                )}
                            </div>
                            <div className={css.about_animation}>
                                {index === 0 && <Animations.Security />}
                                {index === 1 && <Animations.Delegation />}
                                {index === 2 && <Animations.Propose />}
                                {index === 3 && <Animations.Voting />}
                                {index === 4 && <Animations.Approval />}
                            </div>
                            <div className={css.about_item_text}>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                    <li className={`${css.about_item} ${css._info} features-item`}>
                        <p className={css.about_item_join}>
                            {data.about_join_suptitle}
                        </p>
                        <p className={css.about_item_title}>
                            {data.about_join_title}
                        </p>
                        {data.about_join_btn && (
                            <WrapperButton 
                                {...data.about_join_btn}
                                className={css.about_item_joinBtn}
                                variant="pink"
                            />
                        )}
                    </li>
                </ul>
            </div>
        </section>
    );
};
