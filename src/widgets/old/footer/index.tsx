import React from 'react';
import { useTranslation } from 'next-i18next';
import css from './footer.module.scss';
import { FooterNav, FooterSocials } from './ui';

interface Props {
    subscribeBar?: boolean;
}

export const Footer: React.FC<Props> = () => {
    const { t } = useTranslation('footer');
    
    return (
        <div className={css.footer}>
            <div className="container">
                <div className={css.wrapper}>
                    {/* {subscribeBar && <FooterSubscribe />} */}

                    <div className={css.box}>
                        <p 
                            className={css.title} 
                            dangerouslySetInnerHTML={{ __html: t('joinTaiko') }} 
                        />
                        <FooterSocials />
                        <FooterNav />
                    </div>
                </div>
            </div>
        </div>
    );
}