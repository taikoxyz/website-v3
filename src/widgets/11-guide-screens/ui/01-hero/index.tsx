import React from 'react';
import { useTranslation } from 'next-i18next';
import { GuideScreensEnum } from 'widgets/11-guide-screens/lib/types';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    const { t } = useTranslation('guide-ai-agent');

    return (
        <section
            className={css.hero}
            id={GuideScreensEnum.HERO}
        >
            <div className="container">
                <p className={css.label}>{t('hero.label')}</p>
                <h1 className={css.title}>{t('hero.title')}</h1>
                <p className={css.subtitle}>{t('hero.subtitle')}</p>
            </div>
        </section>
    );
}
