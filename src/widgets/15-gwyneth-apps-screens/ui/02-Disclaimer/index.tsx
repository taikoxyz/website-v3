import React from "react";
import { useGwynethAppsData } from "widgets/15-gwyneth-apps-screens/lib";
import { Icon } from "shared/components/icon";
import css from "./Disclaimer.module.scss";

export const Disclaimer: React.FC = () => {
    const data = useGwynethAppsData();

    if(!data.disclaimer_active) {
        return null;
    }

    return (
        <section className={css.disclaimer}>
            <div className="container">
                <div className={css.disclaimer_banner}>
                    <Icon className={css.disclaimer_icon} icon="info" variant="pink" />
                    <div className={css.disclaimer_column}>
                        <p className={css.disclaimer_title}>
                            {data.disclaimer_title}
                        </p>
                        <p className={css.disclaimer_text}>
                            {data.disclaimer_text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
