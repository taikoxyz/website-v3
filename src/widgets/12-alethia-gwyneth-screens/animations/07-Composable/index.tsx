import React from "react";
import "./Composable.scss";

export const Composable: React.FC = () => {
    return (
        <svg
            className={"composable"}
            viewBox="0 0 355 355"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="177.5" cy="177.5" r="33.5" stroke="#000" strokeWidth="4" opacity="0.15" />
            <circle cx="177.5" cy="177.5" r="68.5" stroke="#000" strokeWidth="4" opacity="0.15" />
            <circle cx="177.5" cy="177.5" r="104.5" stroke="#000" strokeWidth="4" opacity="0.15" />
            <circle cx="177.5" cy="177.5" r="140.5" stroke="#000" strokeWidth="4" opacity="0.15" />
            <circle cx="177.5" cy="177.5" r="175.5" stroke="#000" strokeWidth="4" opacity="0.15" />
            <g>
                <circle
                    className="composable-circle"
                    cx="177.5"
                    cy="177.5"
                    r="33.5"
                    stroke="#E81899"
                    strokeWidth="4"
                />
                <circle
                    className="composable-circle"
                    cx="177.5"
                    cy="177.5"
                    r="68.5"
                    stroke="#6438D6"
                    strokeWidth="4"
                />
                <circle
                    className="composable-circle"
                    cx="177.5"
                    cy="177.5"
                    r="104.5"
                    stroke="#EDD75A"
                    strokeWidth="4"
                />
                <circle
                    className="composable-circle"
                    cx="177.5"
                    cy="177.5"
                    r="140.5"
                    stroke="#E81899"
                    strokeWidth="4"
                />
                <circle
                    className="composable-circle"
                    cx="177.5"
                    cy="177.5"
                    r="175.5"
                    stroke="#6438D6"
                    strokeWidth="4"
                />
            </g>
        </svg>
    );
};
