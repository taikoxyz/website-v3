import React from "react";
import { JourneyItem } from "../05.01-journey-item";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import JourneyPath from "widgets/01-home-screens/components/JourneyPath";
import { HOME_PAG, useHomeData } from "widgets/01-home-screens/lib";
import css from "./journey.module.scss";

const external = [
    {
        className: css.journey_24q2,
        progress: 0.01,
        variant: undefined,
    }, {
        className: css.journey_24q3,
        progress: 0.12,
        variant: "pink",
    }, {
        className: css.journey_24q4,
        progress: 0.24,
        variant: "orange",
    }, {
        className: css.journey_25q1,
        progress: 0.4,
        variant: "blue",
    }, {
        className: css.journey_25q2,
        progress: 0.6,
        variant: "pink",
    }, {
        className: css.journey_25h1,
        progress: 0.92,
        variant: "orange",
    }
]

export const Journey: React.FC = () => {
    const data = useHomeData();
    const journeyRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const [path] = gsap.utils.toArray(".journey-path") as SVGPathElement[];
            const quarters = gsap.utils.toArray(".journey-item-content") as HTMLElement[];

            if (path) {
                gsap.to(path, {
                    scrollTrigger: {
                        trigger: "#journey-roadmap",
                        start: "top 50%",
                        end: "bottom 90%",
                        invalidateOnRefresh: true,
                        scrub: 3,
                    },
                    onUpdate() {
                        quarters.forEach((el) => {
                            const targetProgress = +(el.dataset.progress || "0");
                            el.style.height = `${targetProgress < this.progress() ? el.scrollHeight : 0}px`;
                        });
                    },
                    strokeDashoffset: 0,
                });
            }
        },
        { scope: journeyRef }
    );

    return (
        <section className={css.journey} ref={journeyRef} id={HOME_PAG.JOURNEY}>
            <div className={css.journey_content}>
                <p className={css.journey_label}>
                    {data.roadmap_suptitle}
                </p>
                <h2 className={css.journey_title}>
                    {data.roadmap_title}
                </h2>
                <div className={css.journey_roadmap} id="journey-roadmap">
                    <JourneyPath />
                    {data.roadmap_list.map((item, index) => (
                        <JourneyItem 
                            className={external[index].className}
                            progress={external[index].progress}
                            variant={external[index].variant as any}
                            title={item.title}
                            content={item.data.map((p) => p.text)}
                            key={item.id}
                        />
                    ))}
                    {/* <JourneyItem
                        className={css.journey_24q2}
                        progress={0.01}
                        title="Q2 2024"
                        content={[
                            "<strong>Taiko Mainnet Launch</strong>",
                            "<strong>Token Generation Event</strong>",
                            "<strong>Airdrop and CEX Listing</strong>",
                        ]}
                    />
                    <JourneyItem
                        className={css.journey_24q3}
                        progress={0.12}
                        title="Q3 2024"
                        content={[
                            "<strong>Mainnet:</strong> Gas Optimization 30% reduction in L1 gas costs",
                            "<strong>Testnet:</strong> Hekla Upgrade",
                            "<strong>Testnet:</strong> Ontake Hardfork",
                            "<strong>Testnet:</strong> zkVM Proof Integration",
                        ]}
                        variant="pink"
                    />
                    <JourneyItem
                        className={css.journey_24q4}
                        progress={0.24}
                        title="Q4 2024"
                        content={[
                            "<strong>Mainnet:</strong> Ontake Hardfork",
                            "<strong>Mainnet:</strong> zkVM Proof Integration",
                            "<strong>Devnet:</strong> Preconfirmation Demo",
                            "<strong>Testnet:</strong> Decentralized Security Council for Hekla",
                            "<strong>Devnet:</strong> Gwyneth Launch",
                        ]}
                        variant="orange"
                    />
                    <JourneyItem
                        className={css.journey_25q1}
                        progress={0.4}
                        title="Q1 2025"
                        content={["<strong>Testnet:</strong> Gwyneth Launch"]}
                        variant="blue"
                    />
                    <JourneyItem
                        className={css.journey_25q2}
                        progress={0.6}
                        title="Q2 2025"
                        content={[
                            "<strong>Mainnet:</strong> ODecentralized Security Counsil",
                            "<strong>DAO Implemented</strong>",
                            "<strong>Mainnet: Gwyneth</strong> Mainnet launch",
                        ]}
                        variant="pink"
                    />
                    <JourneyItem
                        className={css.journey_25h1}
                        progress={0.92}
                        title="H1 2025"
                        content={[
                            "<strong>Q3 Testnet:</strong> Hekla Preconfirmation",
                            "<strong>Q4 Mainnet:</strong> Preconfirmation",
                        ]}
                        variant="orange"
                    /> */}
                </div>
            </div>
        </section>
    );
};
