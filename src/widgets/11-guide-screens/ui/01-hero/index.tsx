import React from 'react';
import { useTranslation } from 'next-i18next';
import { GuideScreensEnum } from 'widgets/11-guide-screens/lib/types';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    const { t } = useTranslation('guide-ai-agent');
    const [copied, setCopied] = React.useState(false);

    const handleCopyMarkdown = async () => {
        try {
            const res = await fetch('/guides/deploy-ai-agent-on-ethereum-l2.md');
            const text = await res.text();
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.open('/guides/deploy-ai-agent-on-ethereum-l2.md', '_blank');
        }
    };

    return (
        <section
            className={css.hero}
            id={GuideScreensEnum.HERO}
        >
            <div className="container">
                <div className={css.headerRow}>
                    <div>
                        <p className={css.label}>{t('hero.label')}</p>
                        <h1 className={css.title}>{t('hero.title')}</h1>
                    </div>
                    <button className={css.copyBtn} onClick={handleCopyMarkdown}>
                        {copied ? 'Copied!' : 'Copy markdown'}
                    </button>
                </div>
                <p className={css.subtitle}>{t('hero.subtitle')}</p>
            </div>
        </section>
    );
}
