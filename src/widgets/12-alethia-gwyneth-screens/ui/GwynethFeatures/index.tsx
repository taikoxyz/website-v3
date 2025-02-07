import React from "react";
import * as Animations from "../../animations";
import { useGwynethData } from "widgets/12-alethia-gwyneth-screens/lib";
import css from "./GwynethFeatures.module.scss";

export const GwynethFeatures: React.FC = () => {
    const data = useGwynethData();

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
                            </div>
                            <div className={css.features_animation}>
                                {index === 0 && <Animations.Composable />}
                                {index === 1 && <Animations.Unite />}
                                {index === 2 && <Animations.Boosted />}
                                {index === 3 && <Animations.Forever />}
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
