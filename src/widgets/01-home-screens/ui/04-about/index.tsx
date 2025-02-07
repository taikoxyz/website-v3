import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AboutGrid from "widgets/01-home-screens/components/AboutGrid";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import { TextSplitter } from "shared/components/TextSplitter";
import Image from "shared/ui/image";
import css from "./about.module.scss";

export const About: React.FC = () => {
    const data = useHomeData();
    const aboutRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const [strokeEl] = gsap.utils.toArray(".about-grid") as SVGPathElement[];
            if (strokeEl) {
                gsap.to(strokeEl, {
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 75%",
                        once: true,
                        onEnter: () => {
                            const element = aboutRef.current;
                            if (element) {
                                element.classList.add(css._animated);
                            }
                        },
                    },
                    strokeDashoffset: 0,
                    duration: 3,
                });
            }

            gsap.timeline({
                scrollTrigger: {
                    trigger: `.${css.about_title}`,
                    start: "top 95%",
                    end: "bottom 52%",
                    scrub: 0.5,
                    markers: false,
                },
            }).to(".about-span span", {
                opacity: 1,
                stagger: 0.1,
            });
        },
        { scope: aboutRef }
    );

    return (
        <section className={css.about} ref={aboutRef} id={HOME_PAG.ABOUT}>
            <div className={css.about_wrapper}>
                <div className={css.about_grid}>
                    <AboutGrid />
                    <Image.Default src="/img/home-new/about-grid@mob.svg" alt="" />
                </div>
                {/* Refactor label. It depends on content height under */}
                <p className={css.about_label}>
                    {data.about_suptitle}
                </p>
                <h2 className={css.about_title}>
                    <span>
                        <TextSplitter 
                            text={data.about_title}
                            className="about-span"
                            tagName="span"
                        />
                    </span>
                    {/* <span>
                        <TextSplitter
                            className="about-span"
                            text="We envision a based,"
                            tagName="span"
                        />
                    </span>{" "}
                    <span>
                        <TextSplitter
                            className="about-span"
                            text="fearless, ownerless,"
                            tagName="span"
                        />
                    </span>{" "}
                    <span>
                        <TextSplitter
                            className="about-span"
                            text="and unstoppable ecosystem"
                            tagName="span"
                        />
                    </span> */}
                </h2>
                <p className={css.about_text}>
                    {data.about_text}
                </p>
            </div>
        </section>
    );
};
