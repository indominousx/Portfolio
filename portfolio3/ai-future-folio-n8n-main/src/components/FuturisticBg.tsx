
import React from "react";

// Subtle SVG mesh with cyber details, fixed and dark, not a gradient
const FuturisticBg: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 w-full h-full"
    style={{ background: "#10131A" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full"
      fill="none"
      style={{ position: "absolute", left: 0, top: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Futuristic mesh/grid lines */}
      <g opacity="0.18" stroke="#2eecfa" strokeWidth="1">
        {Array.from({ length: 22 }).map((_, i) => (
          <line
            key={"v" + i}
            x1={i * 90}
            x2={i * 90}
            y1={0}
            y2={1080}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={"h" + i}
            x1={0}
            x2={1920}
            y1={i * 90}
            y2={i * 90}
          />
        ))}
      </g>
      {/* Random neon circle accent */}
      <circle cx="1600" cy="220" r="80" fill="#2eecfa" opacity="0.10" />
      <rect x="300" y="800" width="300" height="40" rx="20" fill="#9463f1" opacity="0.08" />
      {/* Simulate glowing effect with blurry lines */}
      <g filter="url(#blur)">
        <line x1="400" y1="100" x2="900" y2="400" stroke="#2eecfa" strokeWidth="3" opacity="0.09"/>
      </g>
      <defs>
        <filter id="blur" x="0" y="0" width="1920" height="1080">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
    </svg>
  </div>
);

export default FuturisticBg;
