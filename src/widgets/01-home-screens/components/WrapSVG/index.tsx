import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "shared/ui/image";
import css from "./WrapSVG.module.scss";

interface Props {
    children: React.ReactNode;
}

export const WrapSVG: React.FC<Props> = ({ children }) => {
    const [s1, s2, s3] = React.Children.toArray(children);
    const s1Ref = React.useRef<HTMLDivElement>(null);
    const s3Ref = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".s1-shape", {
            scrollTrigger: {
                trigger: s1Ref.current,
                start: "top top-=100%",
                end: "bottom 30%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
            height: "300vh"
        })
    }, { scope: s1Ref });

    useGSAP(() => {
        gsap.to(".s3-shape", {
            scrollTrigger: {
                trigger: s3Ref.current,
                start: "top bottom",
                end: "top+=70% bottom",
                scrub: 1,
                invalidateOnRefresh: true,
            },
            height: 0
        })
    }, { scope: s3Ref });


    return (
        <div className={css.sections}>
            <div className={css.sections_s1} ref={s1Ref}>
                <div className={css.sections_s1_content}>
                    {s1}
                </div>
                <div className={css.sections_shape}>
                    <div className={css.sections_shape_sticky}>
                        <div className={`${css.sections_shape_figure} s1-shape`}>
                            <Image.Default 
                                src="/img/home-new/wrap-shapes.webp"
                                loading="lazy"
                                alt="" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.sections_s2}>{s2}</div>
            <div className={css.sections_s3} ref={s3Ref}>
                <div className={css.sections_s3_content}>
                    {s3}
                </div>
                <div className={css.sections_shape}>
                    <div className={css.sections_shape_sticky}>
                        <div className={`${css.sections_shape_figure} s3-shape`}>
                            <Image.Default 
                                src="/img/home-new/wrap-shapes.webp"
                                loading="lazy"
                                alt="" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};