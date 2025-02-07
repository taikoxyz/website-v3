import React from "react";
import clsx from "clsx";
import "./Decentralized.scss";

interface Props {
    className?: string;
}

export const Decentralized: React.FC<Props> = ({ className }) => {
    return (
        <svg
            className={clsx(className, "adec")}
            viewBox="0 0 244 245"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="2" y="63" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="2" y="123" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="2" y="183" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="62" y="63" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="62" y="183" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="122" y="123" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="122" y="183" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="182" y="183" width="60" height="60" stroke="#E4E4E4" strokeWidth="4" />
            <rect x="2" y="2" width="60" height="60" stroke="#0B101B" strokeWidth="4" opacity="0.15" />
            <g className="adec-block">
                <path
                    d="M92.438 143.645V164.357"
                    stroke="#6438D6"
                    strokeWidth="3.34414"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M102 153.999L81.2879 153.999"
                    stroke="#6438D6"
                    strokeWidth="3.34414"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect 
                    x="62" 
                    y="123" 
                    width="60" 
                    height="60" 
                    stroke="#6438D6" 
                    strokeWidth="4"
                />
            </g>
            <g className="adec-block">
                <path
                    d="M32.1499 19V39.7121"
                    stroke="#E81899"
                    strokeWidth="3.34414"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M41.7119 29.3545L20.9998 29.3545"
                    stroke="#E81899"
                    strokeWidth="3.34414"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect x="2" y="2" width="60" height="60" stroke="#E81899" strokeWidth="4" />
            </g>
            <path opacity="0.1" d="M11 109L11 77" stroke="#0B101B" strokeWidth="0.96892" />
            <path
                opacity="0.1"
                d="M16.2002 109L16.2002 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path
                opacity="0.1"
                d="M21.3999 109L21.3999 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path
                opacity="0.1"
                d="M26.6001 109L26.6001 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path
                opacity="0.1"
                d="M31.7998 109L31.7998 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path opacity="0.1" d="M37 109L37 77" stroke="#0B101B" strokeWidth="0.96892" />
            <path
                opacity="0.1"
                d="M42.2002 109L42.2002 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path
                opacity="0.1"
                d="M47.3999 109L47.3999 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path
                opacity="0.1"
                d="M52.6001 109L52.6001 77"
                stroke="#0B101B"
                strokeWidth="0.96892"
            />
            <path opacity="0.1" d="M131 229L131 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M136.2 229L136.2 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M141.4 229L141.4 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M146.6 229L146.6 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M151.8 229L151.8 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M157 229L157 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M162.2 229L162.2 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M167.4 229L167.4 197" stroke="#0B101B" strokeWidth="0.96892" />
            <path opacity="0.1" d="M172.6 229L172.6 197" stroke="#0B101B" strokeWidth="0.96892" />
        </svg>
    );
};
