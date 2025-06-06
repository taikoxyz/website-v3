import React from 'react';
import { useTranslation } from 'next-i18next';
import { BackLink } from 'shared/components/@buttons/back-link';
import { usePosition } from 'widgets/05-position-screens/lib';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    const position = usePosition();
    const { t } = useTranslation('position');

    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.wrapper}>
                    
                    <div className={css.left}>
                        <BackLink 
                            text={t('taikoCareers')}
                            href="/careers"
                        />
                    </div>

                    <div className={css.right}>
                        <h1 className={css.title}>
                            {position.title}
                        </h1>

                        {/* <Button 
                            onClick={() => openModal(PositionModalEnum.APPLY_POS, position)}
                            text={t('applyNow')}
                            className={css.button}
                        /> */}
                    </div>

                </div>
            </div>
        </section>
    );
}