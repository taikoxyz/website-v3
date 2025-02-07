import React from "react";
import clsx from "clsx";
import "./Migrate.scss";

interface Props {
    className?: string;
}

export const Migrate: React.FC<Props> = ({ className }) => {
    return (
        <svg
            className={clsx("migrate", className)}
            viewBox="0 0 251 249"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="2"
                y="2"
                width="152"
                height="152"
                stroke="#000"
                strokeWidth="4"
                opacity="0.1"
            />
            <rect
                x="33"
                y="31"
                width="152"
                height="152"
                stroke="#000"
                strokeWidth="4"
                opacity="0.1"
            />
            <rect
                x="65"
                y="64"
                width="152"
                height="152"
                stroke="#000"
                strokeWidth="4"
                opacity="0.1"
            />
            <rect
                x="97"
                y="95"
                width="152"
                height="152"
                stroke="#000"
                strokeWidth="4"
                opacity="0.1"
            />

            <g>
                <rect
                    className="migrate-stroke"
                    x="2"
                    y="2"
                    width="152"
                    height="152"
                    stroke="#0B101B"
                    strokeWidth="4"
                />
                <rect
                    className="migrate-stroke"
                    x="33"
                    y="31"
                    width="152"
                    height="152"
                    stroke="#FFE760"
                    strokeWidth="4"
                />
                <rect
                    className="migrate-stroke"
                    x="65"
                    y="64"
                    width="152"
                    height="152"
                    stroke="#6438D6"
                    strokeWidth="4"
                />
                <rect
                    className="migrate-stroke"
                    x="97"
                    y="95"
                    width="152"
                    height="152"
                    stroke="#E81899"
                    strokeWidth="4"
                />
            </g>
        </svg>
    );
};
