import React, { SVGProps } from "react";

const ArrowLinkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.3118 4.49951L4.90902 13.5003"
                fill="none"
                strokeWidth="1.63636"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3118 12.9022V4.49951H4.90904"
                fill="none"
                strokeWidth="1.63636"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowLinkIcon;
