import React from "react";
import * as Animations from "../../animations";
import { useAlethiaData } from "widgets/12-alethia-gwyneth-screens/lib";
import { executeOnReadyPage } from "shared/lib/utils/browser";
import css from "./AlethiaFeatures.module.scss";

export const AlethiaFeatures: React.FC = () => {
    const data = useAlethiaData();

    const calculateHeight = () => {
        const featuresOdd = Array.from(
            document.querySelectorAll(".features-item:nth-child(odd)")
        ) as HTMLElement[];
        const featuresEven = Array.from(
            document.querySelectorAll(".features-item:nth-child(even)")
        ) as HTMLElement[];

        const getMaxHeight = (elements: HTMLElement[]) => {
            let h = 0;
            elements.forEach((el) => {
                el.style.height = "";
                el.style.marginTop = "";
                if (el.offsetHeight > h) {
                    h = el.offsetHeight;
                }
            });
            return h;
        };

        const feO = getMaxHeight(featuresOdd);
        const feE = getMaxHeight(featuresEven);

        if (window.innerWidth > 991) {
            featuresOdd.forEach((el) => (el.style.height = `${feO}px`));
            featuresEven.forEach((el) => (el.style.height = `${feE}px`));

            if (featuresOdd[1]) {
                featuresOdd[2].style.marginTop = feE - feO + "px";
            }
        }
    };

    React.useEffect(() => {
        calculateHeight();
        executeOnReadyPage(calculateHeight);
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", calculateHeight);
        return () => window.removeEventListener("resize", calculateHeight);
    });

    return (
        <div className={css.features}>
            <div className="container">
                <p className={css.features_suptitle}>{data.features_suptitle}</p>
                <ul className={css.features_wrapper}>
                    {data.features_list.map((item, index) => (
                        <li className={`${css.features_item} features-item`} key={item.title}>
                            <div className={css.features_item_top}>
                                <p className={css.features_item_index}>{(index + 1).toFixed(1)}</p>
                                <p className={css.features_item_title}>{item.title}</p>
                                {item.disabled && (
                                    <p className={css.features_item_disabled}>Coming soon</p>
                                )}
                            </div>
                            <div className={css.features_animation}>
                                {index === 0 && <Animations.Decentralized />}
                                {index === 1 && <Animations.BothWorlds />}
                                {index === 2 && <Animations.Migrate />}
                                {index === 3 && <Animations.Ownerless />}
                                {index === 4 && <Animations.Preconfirmation />}
                                {index === 5 && <Animations.Community />}
                            </div>
                            <div className={css.features_item_text}>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
