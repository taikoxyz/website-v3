import React from 'react';
import { useTranslation } from 'next-i18next';
import css from './tracks.module.scss';

export const Tracks: React.FC = () => {
    const { t } = useTranslation('grant-program');

    // Define tracks directly in the component
    const tracks = [
        {
            title: "DeFi",
            subtitle: "Decentralized Finance",
            description: "Projects focused on lending, borrowing, trading, and other financial applications built on Taiko."
        },
        {
            title: "AI",
            subtitle: "Artificial Intelligence",
            description: "Applications combining blockchain technology and artificial intelligence to create innovative solutions on Taiko."
        },
        {
            title: "RWA",
            subtitle: "Real World Assets",
            description: "Projects focused on tokenizing and managing real-world assets on the Taiko blockchain."
        },
        {
            title: "SocialFi",
            subtitle: "Social Finance",
            description: "Projects combining social networks with financial features built on Taiko."
        },
        {
            title: "Gaming",
            subtitle: "Gaming and NFTs",
            description: "Gaming applications, NFT projects, and metaverse experiences built on Taiko."
        },
        {
            title: "Other",
            subtitle: "And Beyond",
            description: "Other innovative projects that leverage Taiko's strengths such as Ethereum-equivalence, based design, and permissionless proposing/proving."
        }
    ];

    return (
        <section className={css.tracks}>
            <div className="container">
                <h2 className={css.title}>
                    Grant Tracks
                </h2>

                <div className={css.grid}>
                    {tracks.map((track, index) => (
                        <div key={index} className={css.card}>
                            <div className={css.card_content}>
                                <div className={css.card_header}>
                                    <h3 className={css.card_title}>{track.title}</h3>
                                    <p className={css.card_subtitle}>{track.subtitle}</p>
                                </div>

                                <p className={css.card_description}>{track.description}</p>
                            </div>

                            <div className={css.card_footer}>
                                <p className={css.timeline}>Applications open on an ongoing basis</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={css.apply_container}>
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
        </section>
    );
}