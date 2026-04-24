import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: number;
  onClick?: () => void;
}

export default function Logo({ className = "", variant = "full", size = 40, onClick }: LogoProps) {
  const primaryColor = "#1E1E1E";
  const accentColor = "#DB4A2B";
  const highlightColor = "#F8A348";

  return (
    <div 
      className={`flex items-center gap-3 ${className}`} 
      style={{ height: size }}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto drop-shadow-sm"
        style={{ height: size }}
      >
        {/* Main Icon Group */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Circular Base (Plate/OS Ring) */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke={primaryColor} 
            strokeWidth="10" 
          />
          
          {/* Accent Circuit Segment */}
          <path 
            d="M 50 5 A 45 45 0 0 1 95 50" 
            fill="none" 
            stroke={accentColor} 
            strokeWidth="10" 
            strokeLinecap="round" 
          />

          {/* Lightning Bolt / Flash Terminal */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            d="M 45 25 L 60 45 L 40 55 L 55 75"
            fill="none"
            stroke={highlightColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Data Node */}
          <circle cx="50" cy="50" r="12" fill={primaryColor} />
          <circle cx="50" cy="50" r="6" fill="white" />
        </motion.g>
      </svg>

      {variant === "full" && (
        <div className="flex flex-col justify-center leading-[0.8] select-none">
          <span 
            className="text-2xl font-black uppercase tracking-tighter" 
            style={{ color: primaryColor }}
          >
            bharpet
          </span>
          <span 
            className="text-2xl font-black italic tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#DB4A2B] to-[#F8A348]"
          >
             OS
          </span>
        </div>
      )}
    </div>
  );
}
