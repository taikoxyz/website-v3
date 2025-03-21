import React from "react";
import css from "./Delegation.module.scss";

export const Delegation: React.FC = () => {
    return (
        <svg
            width="314"
            height="141"
            viewBox="0 0 314 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className={css.triangle_first}>
                <path
                    d="M7.27862 129.23L73.1961 15.0577L139.114 129.23H7.27862Z"
                    stroke="#FFE760"
                    strokeWidth="3.80575"
                />
            </g>
            <g className={css.triangle_third}>
                <path
                    d="M306.563 129.336L174.728 129.336L240.646 15.1639L306.563 129.336Z"
                    stroke="#6438D6"
                    strokeWidth="3.80575"
                />
            </g>
            <path
                d="M222.743 10.7088L156.825 124.881L90.9078 10.7088H222.743Z"
                fill="#FFF"
                stroke="#E81899"
                strokeWidth="3.80575"
            />
        </svg>
    );
};
