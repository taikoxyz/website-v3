import React, { SVGProps } from "react";

const Ethereum: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 196 307"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M99 3L2 156M99 3L194 156M99 3V112M2 156L99 211.5M2 156L99 112M99 211.5L194 156M99 211.5V112M194 156L99 112M99 304L2 175L99 233M99 304L194 175L99 233M99 304V233"
                stroke="url(#paint0_linear_369_1135)"
                strokeWidth="2.5"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_369_1135"
                    x1="98.349"
                    y1="82.1405"
                    x2="-22.4495"
                    y2="381.251"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E6E6E6" />
                    <stop offset="0.220002" stopColor="#E81899" />
                    <stop offset="0.423162" stopColor="#E6E6E6" />
                    <stop offset="1" stopColor="#E6E6E6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Ethereum;
