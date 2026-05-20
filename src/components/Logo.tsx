import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "badge";
  size?: number;
  onClick?: () => void;
}

export default function Logo({ className = "", variant = "badge", size = 48, onClick }: LogoProps) {
  // Brand color guidelines
  const primaryNavy = "#183656";
  const brandRed = "#DB4A2B";
  const goldYellow = "#ECA825";

  // Raw graphic container centered with Chef Hat, Target circles, Expansion Arrow, Fork and Spoon
  const EmblemGraphic = () => (
    <g className="select-none">
      {/* Outer Glow / Base Ring for the target system */}
      <circle cx="110" cy="112" r="45" fill="#FFFFFF" opacity="0.9" filter="drop-shadow(0px 4px 12px rgba(24,54,86,0.06))" />

      {/* 1. Core Target rings */}
      <circle cx="110" cy="112" r="32" fill="#FFFFFF" stroke={primaryNavy} strokeWidth="6.5" />
      <circle cx="110" cy="112" r="22" fill="none" stroke={primaryNavy} strokeWidth="2.5" />
      <circle cx="110" cy="112" r="13" fill="#FFFFFF" />

      {/* 2. Embedded Tech Node Pins */}
      {/* Central vertical link */}
      <line x1="110" y1="121" x2="110" y2="101" stroke={primaryNavy} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="110" cy="101" r="3.5" fill={goldYellow} stroke={primaryNavy} strokeWidth="1.5" />

      {/* Left link */}
      <line x1="110" y1="114" x2="100" y2="110" stroke={primaryNavy} strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="110" r="2.5" fill={goldYellow} stroke={primaryNavy} strokeWidth="1.2" />

      {/* Right link */}
      <line x1="110" y1="114" x2="120" y2="110" stroke={primaryNavy} strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="110" r="2.5" fill={goldYellow} stroke={primaryNavy} strokeWidth="1.2" />

      {/* 3. Chef Hat (Top-Left Accent with contouring) */}
      <g stroke={brandRed} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" className="drop-shadow-sm">
        <path d="M 64,74 C 54,74 48,56 61,46 C 58,30 82,18 92,34 C 108,18 128,34 122,50 C 130,60 122,74 108,74 Z" />
        {/* Chef Hat inside baseline band */}
        <path d="M 64,74 C 78,77 94,77 108,74" fill="none" stroke={brandRed} strokeWidth="4" />
      </g>

      {/* 4. Rising Profit Arrow (Top-Right shoot-out) */}
      <g className="drop-shadow-sm">
        <line x1="110" y1="112" x2="152" y2="62" stroke={primaryNavy} strokeWidth="10" strokeLinecap="round" />
        <line x1="110" y1="112" x2="154" y2="60" stroke={goldYellow} strokeWidth="5.5" strokeLinecap="round" />
        {/* Solid Arrow Header with inner contrast */}
        <polygon points="135,53 165,45 155,75" fill={primaryNavy} stroke={primaryNavy} strokeWidth="3" strokeLinejoin="round" />
        <polygon points="138,56 161,48 152,71" fill={goldYellow} />
      </g>

      {/* 5. Chef Fork (Bottom-Left cutlery link) */}
      <g stroke={brandRed} strokeLinecap="round" strokeLinejoin="round" fill="none" className="drop-shadow-sm">
        {/* Thick elegant Handle */}
        <path d="M 92,126 L 68,146" strokeWidth="7" />
        {/* Fork Base Panel */}
        <path d="M 68,146 C 62,151 55,148 50,157 C 47,161 51,167 46,172" strokeWidth="5.5" fill={brandRed} />
        {/* 3 Fork Tines */}
        <path d="M 47,159 L 31,175" strokeWidth="3.5" />
        <path d="M 53,163 L 37,179" strokeWidth="3.5" />
        <path d="M 59,167 L 43,183" strokeWidth="3.5" />
      </g>

      {/* 6. Gold Spoon (Right-side link) */}
      <g stroke={goldYellow} strokeLinecap="round" strokeLinejoin="round" fill="none" className="drop-shadow-sm">
        {/* Curved Handle */}
        <path d="M 124,118 L 157,105" strokeWidth="6.5" />
        {/* Oval Bowl container linked to Navy contour */}
        <path 
          d="M 157,105 C 161,103 163,94 171,88 C 181,84 187,92 183,100 C 179,106 169,109 163,107 Z" 
          fill={goldYellow} 
          stroke={primaryNavy} 
          strokeWidth="3.5" 
        />
      </g>
    </g>
  );

  // If badge variant: renders the complete circular logo badge matching the printed seal / physical emblem
  if (variant === "badge") {
    return (
      <div 
        className={`relative flex items-center justify-center select-none ${className}`} 
        style={{ width: size, height: size }}
        onClick={onClick}
      >
        <svg
          viewBox="0 0 220 220"
          className="w-full h-full drop-shadow-md"
        >
          {/* Circular badge thick navy outline */}
          <circle cx="110" cy="110" r="105" fill="#FFFFFF" stroke={primaryNavy} strokeWidth="7" />
          
          {/* Inner hairline dashboard circle */}
          <circle cx="110" cy="110" r="95" fill="none" stroke={primaryNavy} strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />

          {/* Core dynamic cutlery, arrow and chef hat emblem scaled and offset correctly */}
          <g transform="translate(0, -6)">
            <EmblemGraphic />
          </g>

          {/* Central Logo Bold Typographic treatment */}
          <g transform="translate(110, 154)" textAnchor="middle">
            {/* "bharpetOS" */}
            <text fontFamily="system-ui, sans-serif" fontWeight="950" fontSize="24" letterSpacing="-0.5">
              <tspan fill={brandRed}>bharpet</tspan>
              <tspan fill={primaryNavy}>OS</tspan>
            </text>
            {/* "SOFTWARE" */}
            <text y="18" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" letterSpacing="3" fill={primaryNavy}>
              SOFTWARE
            </text>
          </g>

          {/* Circular subtitle bottom text path */}
          <path id="badgeTextCurve" d="M 32,152 A 80,80 0 0,0 188,152" fill="none" />
          <text fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="7.5" fill={brandRed} letterSpacing="1">
            <textPath href="#badgeTextCurve" startOffset="50%" textAnchor="middle">
              RESTAURANT MANAGEMENT & PROFIT SYSTEM
            </textPath>
          </text>
        </svg>
      </div>
    );
  }

  // If icon variant: returns solely the core graphic group
  if (variant === "icon") {
    return (
      <div 
        className={`flex items-center justify-center ${className}`} 
        style={{ width: size, height: size }}
        onClick={onClick}
      >
        <svg
          viewBox="10 10 200 200"
          className="w-full h-full"
        >
          <EmblemGraphic />
        </svg>
      </div>
    );
  }

  // If full header/navbar variant: returns the high-contrast horizontal logo
  return (
    <div 
      className={`flex items-center gap-3 select-none ${className}`} 
      style={{ height: size }}
      onClick={onClick}
    >
      <div style={{ width: size, height: size }}>
        <svg viewBox="10 10 200 200" className="w-full h-full">
          <EmblemGraphic />
        </svg>
      </div>
      <div className="flex flex-col leading-[0.8] justify-center mt-0.5">
        <span className="text-2xl font-black tracking-tighter" style={{ color: brandRed }}>
          bharpet
          <span style={{ color: primaryNavy }}>OS</span>
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.25em] ml-0.5 mt-1" style={{ color: primaryNavy }}>
          SOFTWARE
        </span>
      </div>
    </div>
  );
}
