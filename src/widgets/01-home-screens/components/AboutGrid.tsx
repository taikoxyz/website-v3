import React, { SVGProps } from "react";

const AboutGrid: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 1512 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="about-grid"
                d="M117 678.5L1394 678.5M-1 614.5L1513 614.5M117 934.5L1394 934.5M117 870.5L1394 870.5M-1 230.5L1513 230.5M117 806.5L1394 806.5M117 742.5L1394 742.5M-1 134.5L1513 134.5M36 -33.4999L1476 -33.4997M36 -113.5L1476 -113.5M117.5 897L117.5 -34M1393.5 897V-34M349.5 807L349.5 679M1277.5 897V134M233.5 897L233.5 134M1161.5 807L1161.5 679"
                fill="none"
            />
        </svg>
    );
};

export default AboutGrid;
