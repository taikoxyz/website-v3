import React, { SVGProps } from "react";

const ArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2009_3742)">
                <path
                    d="M14.0002 5.05837L8.05859 11L2.11697 5.05837"
                    fill="none"
                    strokeWidth="1.63636"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2009_3742">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 16) rotate(180)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowDownIcon;
