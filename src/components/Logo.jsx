import React from 'react';

const Logo = ({ size = 40 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f3ff" />
                    <stop offset="100%" stopColor="#bc13fe" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Outer Ring */}
            <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#pulseGradient)"
                strokeWidth="2"
                strokeOpacity="0.5"
            />

            {/* Neural Network Nodes */}
            <g filter="url(#glow)">
                <path
                    d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z"
                    stroke="url(#pulseGradient)"
                    strokeWidth="3"
                    fill="rgba(0, 243, 255, 0.1)"
                />
                <circle cx="50" cy="20" r="4" fill="#00f3ff" />
                <circle cx="75" cy="35" r="4" fill="#bc13fe" />
                <circle cx="75" cy="65" r="4" fill="#00f3ff" />
                <circle cx="50" cy="80" r="4" fill="#bc13fe" />
                <circle cx="25" cy="65" r="4" fill="#00f3ff" />
                <circle cx="25" cy="35" r="4" fill="#bc13fe" />

                {/* Central Pulse */}
                <circle cx="50" cy="50" r="8" fill="#fff">
                    <animate
                        attributeName="opacity"
                        values="0.5;1;0.5"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        values="6;8;6"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    );
};

export default Logo;
