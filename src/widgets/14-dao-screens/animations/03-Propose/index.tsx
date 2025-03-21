import React from "react";
import css from "./Propose.module.scss";

export const Propose: React.FC = () => {
    return (
        <svg
            width="262"
            height="261"
            viewBox="0 0 262 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className={css.circle_first}>
                <rect
                    x="2.37273"
                    y="-2.37273"
                    width="180.327"
                    height="180.327"
                    rx="90.1637"
                    transform="matrix(1 0 0 -1 76.4277 180.327)"
                    stroke="#E81899"
                    strokeWidth="4.74546"
                />
            </g>
            <g>
                <rect
                    x="2.37273"
                    y="-2.37273"
                    width="180.327"
                    height="180.327"
                    rx="90.1637"
                    transform="matrix(1 0 0 -1 38.4629 217.105)"
                    stroke="#6438D6"
                    strokeWidth="4.74546"
                />
            </g>
            <g className={css.circle_third}>
                <rect
                    x="2.37273"
                    y="-2.37273"
                    width="180.327"
                    height="180.327"
                    rx="90.1637"
                    transform="matrix(1 0 0 -1 0.5 256.255)"
                    stroke="#FFE760"
                    strokeWidth="4.74546"
                />
            </g>
        </svg>
    );
};
