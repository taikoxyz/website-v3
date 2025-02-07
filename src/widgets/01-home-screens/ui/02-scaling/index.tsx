import React from "react";
import { taikoIconAnimation } from "../../lib/taiko-icon-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Ethereum from "widgets/01-home-screens/components/Ethereum";
import Rays from "widgets/01-home-screens/components/Rays";
import TaikoIcon from "widgets/01-home-screens/components/Taiko";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import { SequentialDots } from "shared/animations";
import { WrapperButton } from "shared/components/@buttons/button";
import Image from "shared/ui/image";
import css from "./scaling.module.scss";

export const Scaling: React.FC = () => {
    const data = useHomeData();

    const scalingRef = React.useRef<HTMLDivElement>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useGSAP(
        () => {
            const element = scalingRef.current;
            if (element) {
                const lines = gsap.utils.toArray(".scaling-line") as SVGPathElement[];

                /* 
                    Function for setting stroke offset
                */

                const setStrokeLength = (percent: number) => {
                    lines.forEach((line) => {
                        const length = line.getTotalLength();
                        const lineLength = (window.innerHeight + window.innerWidth) * 0.4;
                        gsap.set(line, {
                            strokeDasharray: `${lineLength} ${length - lineLength}`,
                            // strokeDashoffset: (length - length * percent) + lineLength,
                            strokeDashoffset: lineLength + length - (lineLength + length) * percent,
                        });
                    });
                };

                /* 
                    Set initial stroke
                */
                setStrokeLength(0);

                /* 
                    Horizontal scroll
                */
                gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top top",
                        end: "top+=300% top",
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    ease: "none",
                    x: () => {
                        const width = element.scrollWidth - window.innerWidth;
                        return -width;
                    },
                });

                /*  
                    Line scroll + after horizontal scroll
                */
                gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top top",
                        end: "top+=330% top",
                        scrub: 1.5,
                        invalidateOnRefresh: true,
                    },
                    ease: "none",
                    onUpdate() {
                        const progress = this.progress();
                        setStrokeLength(progress);
                    },
                });

                /* 
                    Rotation logo
                */

                const logoAnimation = taikoIconAnimation();

                ScrollTrigger.create({
                    trigger: `#scaling-wrapper`,
                    start: "top 20%",
                    end: "bottom top",
                    invalidateOnRefresh: true,
                    onEnter: () => {
                        logoAnimation.play();
                    },
                    onLeaveBack: () => {
                        logoAnimation.finish();
                    },
                });
            }
        },
        { scope: scalingRef }
    );

    React.useEffect(() => {
        if (canvasRef.current) {
            const dots = new SequentialDots(canvasRef.current, {
                dotSize: [6, 4],
                cols: 100,
                fadeSpeed: 0.015,
                moveSpeed: 0.25,
                margin: 50,
                colors: ["#6438D6", "#FFC236", "#E81899", "#0B101B"],
            });
            return () => dots.destroy();
        }
    }, []);

    return (
        <section className={css.scaling} id={HOME_PAG.SCALING}>
            <div id="scaling-wrapper" ref={scalingRef}>
                <div className={css.scalling_wrapper} id="scaling-wrapper">
                    <Image.Default
                        src="/img/home-new/scaling-lines.webp"
                        className={css.scaling_lines}
                        alt=""
                    />
                    <Rays className={css.scaling_rays} id="scalling-rays" />
                    <div className={css.scaling_screen}>
                        <canvas ref={canvasRef} className={css.scaling_canvas} />
                        <div className={css.scaling_main}>
                            <div className={css.scaling_main_iconWrapper} id="s2-taiko">
                                <div className={css.scaling_main_iconMover} id="s2-taiko-icon">
                                    <div className={css.scaling_main_icon}>
                                        <TaikoIcon id="s2-taiko-taiko" />
                                    </div>
                                    <div className={css.scaling_main_eth}>
                                        <Ethereum id="s2-taiko-eth" />
                                    </div>
                                </div>
                            </div>
                            <div className={css.scaling_main_label}>
                                {data.solution_screen_1_suptitle}
                            </div>
                            <h2
                                className={css.scaling_main_title}
                                dangerouslySetInnerHTML={{
                                    __html: data.solution_screen_1_title,
                                }}
                            />
                        </div>
                    </div>
                    <div className={css.scaling_screen}>
                        <div className={css.scaling_dao}>
                            <h2
                                className={css.scaling_dao_title}
                                dangerouslySetInnerHTML={{
                                    __html: data.solution_screen_2_title,
                                }}
                            />
                            <WrapperButton
                                {...data.solution_screen_2_btn}
                                className={css.scaling_dao_btn}
                            />
                        </div>
                    </div>
                    <div className={css.scaling_screen}>
                        <div className={css.scaling_token}>
                            <h2
                                className={css.scaling_token_title}
                                dangerouslySetInnerHTML={{
                                    __html: data.solution_screen_3_title,
                                }}
                            />
                            <WrapperButton 
                                {...data.solution_screen_3_btn}
                                className={css.scaling_token_btn} 
                            />
                        </div>
                    </div>
                    <div className={css.scaling_screen}>
                        <div className={css.scaling_community}>
                            <div className={css.scaling_community_inner}>
                                <h2
                                    className={css.scaling_community_title}
                                    dangerouslySetInnerHTML={{
                                        __html: data.solution_screen_4_title,
                                    }}
                                />
                                <WrapperButton 
                                    {...data.solution_screen_4_btn}
                                    className={css.scaling_community_btn} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
