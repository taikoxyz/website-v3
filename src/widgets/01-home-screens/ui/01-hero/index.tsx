import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import { WrapperButtonList } from "shared/components/@buttons/button";
import Image from "shared/ui/image";
import css from "./hero.module.scss";

export const Hero: React.FC = () => {
    const data = useHomeData();

    useGSAP(() => {
        const s1taiko = document.getElementById("s1-taiko");
        const s2taiko = document.getElementById("s2-taiko");

        if (s1taiko && s2taiko) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: s1taiko,
                    start: "top 30%",
                    end: "top 30%",
                    endTrigger: s2taiko,
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(
                "#s1-taiko > img",
                {
                    y: () => {
                        const s1top = s1taiko.getBoundingClientRect().top;
                        const s2top = s2taiko.getBoundingClientRect().top;
                        return s2top - s1top;
                    },
                },
                0
            );

            tl.fromTo(
                "#s2-taiko-icon",
                {
                    y: () => {
                        const s1top = s1taiko.getBoundingClientRect().top;
                        const s2top = s2taiko.getBoundingClientRect().top;
                        return s1top - s2top;
                    },
                },
                {
                    y: 0,
                },
                0
            );
        }
    });

    return (
        <section className={css.hero} id={HOME_PAG.HERO}>
            <div className="container">
                <div className={css.hero_wrapper}>
                    <h1 className={css.hero_title}>
                        {data.hero_title}
                    </h1>
                    <WrapperButtonList 
                        className={css.hero_controls} 
                        data={data.hero_buttons} 
                    />
                    <div className={css.hero_taiko}>
                        <div className={css.hero_taiko_inner}>
                            <div className={css.hero_taiko_img} id="s1-taiko">
                                <Image.Default src="/img/home-new/taiko.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
