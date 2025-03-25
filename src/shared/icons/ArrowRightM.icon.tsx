import React, { SVGProps } from "react";

const ArrowRightMIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.8223 4.44727L15.3748 8.99977L10.8223 13.5523"
                fill="none"
                strokeWidth="1.92857"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.625 9H15.2475"
                fill="none"
                strokeWidth="1.92857"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowRightMIcon;
