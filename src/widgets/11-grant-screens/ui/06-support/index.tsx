import React from 'react';
import { useTranslation } from 'next-i18next';
import css from './support.module.scss';
import Sprite from 'shared/ui/sprite';
import { Accordeon } from 'shared/components/accordeon';

export const Support: React.FC = () => {
    const { t } = useTranslation('grant-program');

    // Define FAQs directly in the component
    const faqs = [
        {
            q: "How do I apply for a grant?",
            a: "Starting today, applications are open! Please head over to the application form and complete your submission. Be sure to include as many relevant details as possible to help us make informed decisions."
        },
        {
            q: "Can I apply for other grants while receiving Taiko grants?",
            a: "Yes, grantees can apply for grants from other projects, given all other requirements are met."
        },
        {
            q: "Is there a legal agreement for grant recipients?",
            a: "Yes, grantees and Taiko must establish a formal legal agreement detailing the expectations and responsibilities of both parties. All grantees will also have to undergo KYC/KYB checks."
        },
        {
            q: "Can I announce that I've received a grant?",
            a: "If you are awarded a grant, you may not disclose this (including any details such as the number of vested or received tokens) until we have done so."
        },
        {
            q: "What are you looking for in projects?",
            a: "We look favorably upon Taiko-tailored projects, i.e., those that truly take advantage of Taiko's strengths and design decisions, such as Ethereum-equivalence, based design, and permissionless proposing/proving."
        },
        {
            q: "What is Taiko Takeoff?",
            a: "Taiko Takeoff is another ongoing initiative we are running, designed to support projects and create opportunities for our community. Learn more at <a href='https://takeoff.taiko.xyz/' target='_blank'>https://takeoff.taiko.xyz/</a>."
        }
    ];

    return (
        <section className={css.support}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.content_left}>
                        <h2 className={css.title}>
                            <span className={css.title_text}>
                                <span className={css.title_highlight}>How to</span> apply
                            </span>
                            <Sprite.Default icon="arrow-right" />
                        </h2>

                        <p className={css.text}>
                            The Grants Council will review applications on a rolling basis and reach out to applicants. Join us in building the based future!
                        </p>

                        <div className={css.apply_button_container}>
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

                    <div className={css.content_right}>
                        <ul className={css.list}>
                            {faqs.map((faq) => (
                                <li
                                    className={css.list_item}
                                    key={faq.q}
                                >
                                    <Accordeon
                                        question={faq.q}
                                        answer={faq.a}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};