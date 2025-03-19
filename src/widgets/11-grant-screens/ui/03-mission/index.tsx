import { useTranslation } from 'next-i18next';
import React from 'react';
import css from './mission.module.scss';

export const Mission: React.FC = () => {
    const { t } = useTranslation('grant-program');

    // Define mission items directly in the component
    const missions = [
        {
            title: "Discover and support innovative projects",
            text: "This grant program is designed to fund developers, researchers, and builders working on groundbreaking ideas in DeFi, AI, RWA, SocialFi, Gaming, and beyond."
        },
        {
            title: "Open-source requirements",
            text: "Unless agreed otherwise, all smart contracts and frontend code must be open-sourced from the project's inception."
        },
        {
            title: "Taiko as a priority platform",
            text: "Projects involving dApps must choose Taiko as one of their first platforms, but they can also deploy and integrate on other L1/L2/L3s."
        },
        {
            title: "Investment opportunities",
            text: "Taiko Labs or its associated entities receive the right to invest up to $250K USD in the project's subsequent fundraising round, up to one year post-grant acceptance (if applicable)."
        }
    ];

    return (
        <section className={css.mission}>
            <div className="container">
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: "Taiko Grants' <span>mission</span>"
                    }}
                />

                <ul className={css.list}>
                    {missions.map((item) => (
                        <li
                            className={css.list_item}
                            key={item.title}
                        >
                            <h3 className={css.list_title}>
                                {item.title}
                            </h3>

                            <p className={css.list_text}>
                                {item.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}