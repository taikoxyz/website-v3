import React from 'react';
import { useTranslation } from 'next-i18next';
import { getArticleLinks, useArticle } from 'widgets/09-article-screens/lib';
import { ArticleScreensEnum } from 'widgets/09-article-screens/lib/types';
import css from './side-nav.module.scss';

export const SideNav: React.FC = () => {
    const { t } = useTranslation();
    const { t: tArticle } = useTranslation('article');
    const { content } = useArticle();
    
    return (
        <div className={css.nav}>
            <p className={css.nav_title}>
                {t('contentTitle')}
            </p>

            <nav className={css.nav_container}>
                {getArticleLinks(content).map((link) => (
                    <a 
                        className={css.nav_item}
                        href={`#${link.hash}`}
                        key={link.name + link.hash}
                    >
                        <span>{link.name}</span>
                    </a>
                ))}
                <a 
                    className={css.nav_item}
                    href={`#${ArticleScreensEnum.HOW_TO_APPLY}`}
                >
                    <span>{tArticle('howToApply')}</span>
                </a>
            </nav>
        </div>
    );
}