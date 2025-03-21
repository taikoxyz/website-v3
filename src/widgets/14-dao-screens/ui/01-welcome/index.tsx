import React from "react";
import { WrapperButton } from "shared/components/@buttons/button";
import { useDaoData } from "widgets/14-dao-screens/lib";
import css from "./welcome.module.scss";

export const Welcome: React.FC = () => {
    const data = useDaoData();
    return (
        <section className={css.welcome}>
            <div className="container">
                <div className={css.welcome_wrapper}>
                    <p className={css.welcome_label}>
                        {data.welcome_suptitle}
                    </p>
                    <h2 className={css.welcome_title}>
                        {data.welcome_title}
                    </h2>
                    <p className={css.welcome_text}>
                        {data.welcome_text}
                    </p>
                    {data.welcome_btn && (
                        <WrapperButton 
                            {...data.welcome_btn} 
                            className={css.welcome_btn} 
                        />
                    )}
                    <video
                        className={css.welcome_video}
                        src="/img/home-new/governance/governance.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};
