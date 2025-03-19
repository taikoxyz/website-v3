import { useTranslation } from 'next-i18next';
import React from 'react';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    const { t } = useTranslation('grant-program');

    return (
        <section className={css.hero}>
            <div className="container">
                <img
                    src="/img/grant/hero-banner.jpg"
                    className={css.banner}
                    alt=""
                />

                <div className={css.content}>
                    <div className={css.content_left}>
                        <h1 className={css.title}>
                            Welcome to <br />
                            <span className={css.highlight}>Taiko Grants!</span>
                        </h1>
                    </div>

                    <div className={css.content_right}>
                        <h2 className={css.headline}>
                            Taiko Grant Cycle 3: $25M to Support Community Builders and Partners
                        </h2>

                        <div className={css.description}>
                            <p>Today, we are excited to announce the Taiko 2025 Grant Fund, with a total of $25 million in funding!</p>

                            <p>Our objective remains the discovery and support of innovative projects and community members that advance the Taiko ecosystem. Applicants may also be eligible for another ongoing initiative we are running, <a href="https://takeoff.taiko.xyz/" target="_blank" rel="noopener noreferrer" className={css.highlight_link}>Taiko Takeoff</a> which is designed to support projects and create opportunities for our community.</p>

                            <p>This grant program is designed to fund developers, researchers, and builders working on groundbreaking ideas in <strong>DeFi, AI, RWA, SocialFi, Gaming, and beyond.</strong></p>
                        </div>

                        <div className={css.cta}>
                            <a
                                href="https://airtable.com/appiHMc0glvIWmuan/shrvmPOFrTleLFQJd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.apply_button}
                            >
                                Apply Now
                                <div className={css.arrow_circle}>
                                    <svg className={css.arrow} viewBox="0 0 24 24">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}