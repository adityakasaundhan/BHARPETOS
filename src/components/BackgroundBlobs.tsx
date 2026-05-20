import { motion } from "motion/react";

const ForkIcon = ({ color, size }: { color: string; size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-full h-full"
    style={{ opacity: 0.12, filter: `drop-shadow(0px 8px 16px ${color}15)` }}
  >
    <path d="M18 8V2" />
    <path d="M14 8V2" />
    <path d="M10 8V2" />
    <path d="M6 8V2" />
    <path d="M6 8a6 6 0 0 0 12 0" />
    <path d="M12 14v8" />
  </svg>
);

const KnifeIcon = ({ color, size }: { color: string; size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-full h-full"
    style={{ opacity: 0.12, filter: `drop-shadow(0px 8px 16px ${color}15)` }}
  >
    <path d="M6 2c2 0 4 3 4 8v4H6V2z" />
    <path d="M8 14v8" />
  </svg>
);

const SpoonIcon = ({ color, size }: { color: string; size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-full h-full"
    style={{ opacity: 0.12, filter: `drop-shadow(0px 8px 16px ${color}15)` }}
  >
    <path d="M17 10C17 13 14 15 10 15C6 15 3 13 3 10C3 7 6 5 10 5C14 5 17 7 17 10Z" />
    <path d="M13.5 13.5L21 21" />
  </svg>
);

const UTENSILS_LIST = [
  { id: "f1", type: "fork", top: "12%", left: "8%", color: "#FF89A9", size: 110, duration: 18 },
  { id: "s1", type: "spoon", top: "18%", left: "75%", color: "#FFC245", size: 130, duration: 22 },
  { id: "k1", type: "knife", top: "38%", left: "14%", color: "#00E5FF", size: 120, duration: 20 },
  { id: "f2", type: "fork", top: "55%", left: "80%", color: "#9D4EDD", size: 140, duration: 24 },
  { id: "s2", type: "spoon", top: "70%", left: "10%", color: "#52B788", size: 100, duration: 17 },
  { id: "k2", type: "knife", top: "80%", left: "72%", color: "#E76F51", size: 125, duration: 21 },
  { id: "f3", type: "fork", top: "30%", left: "42%", color: "#FF5E7E", size: 95, duration: 23 },
  { id: "s3", type: "spoon", top: "62%", left: "45%", color: "#38A3A5", size: 105, duration: 19 },
];

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Background Blurs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary/80 blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-brand-energy/80 blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-highlight/75 blur-[140px]"
      />

      {/* Intelligence Grid & Scanning Line */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[2px] bg-brand-primary/40 blur-sm"
        />
      </div>

      {/* Floating Geometric Shards */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shard-${i}`}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          className="absolute w-8 h-8 border border-brand-text/10 pointer-events-none"
        />
      ))}

      {/* Pulsing Energy Rings */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] aspect-square rounded-full border border-brand-primary/10 pointer-events-none"
      />

      {/* Floating Rotating Multi-Color Utensils (Knives, Forks, Spoons rotating 180 degrees slowly) */}
      {UTENSILS_LIST.map((item) => (
        <motion.div
          key={item.id}
          animate={{
            rotate: [0, 180],
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
          }}
          className="absolute pointer-events-none flex items-center justify-center"
        >
          {item.type === "fork" && <ForkIcon color={item.color} size={item.size} />}
          {item.type === "knife" && <KnifeIcon color={item.color} size={item.size} />}
          {item.type === "spoon" && <SpoonIcon color={item.color} size={item.size} />}
        </motion.div>
      ))}
    </div>
  );
}
