import React, { SVGProps } from "react";

const BigLinesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 1413 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1379 824C1167 809 991 676 877 546C763 416 683.4 386.4 683.4 386.4C655.8 374.5 625.4 368 593.5 368C467.6 368 365.5 470.1 365.5 596C365.5 648.1 382.9 696 412.3 734.4C412.3 734.4 474.5 825 603.5 825"
                stroke="url(#paint1_linear_0_1)"
                strokeWidth="21"
                strokeMiterlimit="10"
                strokeLinecap="round"
                className="first-line"
            />
            <path
                d="M1402.5 762.5C1117.5 672.5 998.1 464.8 885.3 342.2C804.5 254.5 710.5 204.5 593.5 204.5C408.4 204.5 205.5 352.9 205.5 600C205.5 762 323.3 992.2 604.5 989"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="21"
                strokeMiterlimit="10"
                strokeLinecap="round"
                className="second-line"
            />
            <path
                d="M1402 814C1402 814 1299.7 656.2 1212 490C1135 344 1084.8 271.1 1021.5 195.4C929.999 85.9999 761.899 10.2999 593.499 10.4999C245.499 10.9999 22.9991 272.2 10.9991 595C7.13099 699.212 39.8149 828.068 117.486 938.5"
                stroke="url(#paint2_linear_0_1)"
                strokeWidth="21"
                strokeMiterlimit="10"
                strokeLinecap="round"
                className="third-line"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_0_1"
                    x1="1044.5"
                    y1="300.5"
                    x2="927.5"
                    y2="989"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.000640708" stopColor="#E81899" />
                    <stop offset="1" stopColor="#E81899" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_0_1"
                    x1="927.5"
                    y1="417"
                    x2="615"
                    y2="825"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6438D6" />
                    <stop offset="1" stopColor="#6438D6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_0_1"
                    x1="280.999"
                    y1="175"
                    x2="184.999"
                    y2="938"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC6E6" />
                    <stop offset="1" stopColor="#FFC6E6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default BigLinesIcon;
