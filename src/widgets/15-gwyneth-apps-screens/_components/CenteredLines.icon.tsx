import React, { SVGProps } from "react";

const CenteredLinesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 403 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M110 32.4995C139.5 14.6662 217.6 -9.30004 296 33.4999"
                stroke="url(#paint0_linear_3018_3566)"
                strokeWidth="18"
                strokeLinecap="round"
                className="centered-line"
            />
            <path
                d="M388.571 155.746C398.162 188.856 401.098 270.498 339.465 335.149"
                stroke="url(#paint1_linear_3018_3566)"
                strokeWidth="18"
                strokeLinecap="round"
                className="centered-line"
            />
            <path
                d="M102.074 364.925C71.8804 348.294 12.0751 292.64 9.94078 203.344"
                stroke="url(#paint2_linear_3018_3566)"
                strokeWidth="18"
                strokeLinecap="round"
                className="centered-line"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_3018_3566"
                    x1="358"
                    y1="69.5"
                    x2="134.5"
                    y2="-7.50137"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.42634" stopColor="#6438D6" stopOpacity="0" />
                    <stop offset="0.50971" stopColor="#6438D6" stopOpacity="0.01758" />
                    <stop offset="0.58869" stopColor="#6438D6" stopOpacity="0.07103" />
                    <stop offset="0.6659" stopColor="#6438D6" stopOpacity="0.16048" />
                    <stop offset="0.74205" stopColor="#6438D6" stopOpacity="0.28613" />
                    <stop offset="0.81746" stopColor="#6438D6" stopOpacity="0.44821" />
                    <stop offset="0.89231" stopColor="#6438D6" stopOpacity="0.64686" />
                    <stop offset="0.96531" stopColor="#6438D6" stopOpacity="0.87749" />
                    <stop offset="1" stopColor="#6438D6" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_3018_3566"
                    x1="349.2"
                    y1="345.18"
                    x2="394"
                    y2="191.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.31864" stopColor="#E81899" stopOpacity="0" />
                    <stop offset="0.40125" stopColor="#E81899" stopOpacity="0.01885" />
                    <stop offset="0.49025" stopColor="#E81899" stopOpacity="0.07468" />
                    <stop offset="0.58225" stopColor="#E81899" stopOpacity="0.16759" />
                    <stop offset="0.67634" stopColor="#E81899" stopOpacity="0.29774" />
                    <stop offset="0.7721" stopColor="#E81899" stopOpacity="0.46537" />
                    <stop offset="0.86915" stopColor="#E81899" stopOpacity="0.67048" />
                    <stop offset="0.9655" stopColor="#E81899" stopOpacity="0.90841" />
                    <stop offset="0.99936" stopColor="#E81899" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_3018_3566"
                    x1="57.5"
                    y1="348"
                    x2="-4.95739"
                    y2="201.539"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC6E6" />
                    <stop offset="0.11005" stopColor="#FFC6E6" stopOpacity="0.74493" />
                    <stop offset="0.23466" stopColor="#FFC6E6" stopOpacity="0.48297" />
                    <stop offset="0.34772" stopColor="#FFC6E6" stopOpacity="0.27507" />
                    <stop offset="0.4451" stopColor="#FFC6E6" stopOpacity="0.12533" />
                    <stop offset="0.52296" stopColor="#FFC6E6" stopOpacity="0.0336" />
                    <stop offset="0.57159" stopColor="#FFC6E6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CenteredLinesIcon;
