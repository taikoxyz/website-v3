import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ExploreTaiko from "widgets/01-home-screens/components/ExploreTaiko";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import { WrapperButton } from "shared/components/@buttons/button";
import Image from "shared/ui/image";
import css from "./explore.module.scss";

export const Explore: React.FC = () => {
    const [alethia, gwyneth] = useHomeData().explore_screens;
    const exploreRef = React.useRef<HTMLDivElement>(null);

    const handleMoveEnterLeft = () => {
        if (window.innerWidth > 1024) {
            exploreRef.current?.classList.remove(css._right);
        }
    };

    const handleMoveEnterRight = () => {
        if (window.innerWidth > 1024) {
            exploreRef.current?.classList.add(css._right);
        }
    };

    useGSAP(
        () => {
            let end = "top+=250% bottom";

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1025px)", () => {
                end = "top+=135% bottom";
            });

            ScrollTrigger.create({
                trigger: exploreRef.current,
                start: "top top",
                end,
                scrub: true,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
                onUpdate(self) {
                    const element = exploreRef.current;
                    if (element && window.innerWidth < 1025) {
                        if (self.progress > 0.5) {
                            element.classList.add(css._right);
                        } else {
                            element.classList.remove(css._right);
                        }
                    }
                },
            });
        },
        { scope: exploreRef }
    );

    const TaikoLogo = React.useMemo(
        () => (
            <div className={css.explore_taiko_image}>
                <div className={css.explore_taiko_image_wrapper}>
                    <ExploreTaiko className={css.explore_taiko_svg} />
                    <Image.Default src="/img/home-new/exp-taiko-fill.png" alt="" />
                </div>
            </div>
        ),
        []
    );

    return (
        <section className={css.explore} ref={exploreRef} id={HOME_PAG.EXPLORE}>
            <div className={css.explore_wrapper}>
                {/* Left side */}
                <div className={css.explore_left} onMouseEnter={handleMoveEnterLeft}>
                    {TaikoLogo}
                    <div className={css.explore_taiko_alethia}>
                        <p className={css.explore_taiko_text}>
                            <span>[</span> {alethia.suptitle} <span>]</span>
                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className={css.explore_right} onMouseEnter={handleMoveEnterRight}>
                    {TaikoLogo}
                    <div className={css.explore_taiko_gwyneth}>
                        <p className={css.explore_taiko_text}>
                            <span>[</span> {gwyneth.suptitle} <span>]</span>
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className={css.explore_container}>
                    <div className={css.explore_item} onMouseEnter={handleMoveEnterLeft}>
                        <h2 className={css.explore_title}>{alethia.title}</h2>
                        <p className={css.explore_text}>{alethia.text}</p>
                        <WrapperButton {...alethia.link} className={css.explore_btn} />
                    </div>
                    <div className={css.explore_item} onMouseEnter={handleMoveEnterRight}>
                        <h2 className={css.explore_title}>{gwyneth.title}</h2>
                        <p className={css.explore_text}>{gwyneth.text}</p>
                        <WrapperButton {...gwyneth.link} className={css.explore_btn} />
                    </div>
                </div>
            </div>
        </section>
    );
};
