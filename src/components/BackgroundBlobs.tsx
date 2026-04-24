import { motion } from "motion/react";
import { Utensils } from "lucide-react";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary blur-[140px]"
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
        className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-brand-energy blur-[140px]"
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
        className="absolute -bottom-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-highlight blur-[140px]"
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

      {/* Floating Utensils Icons (Colored) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] left-[15%] opacity-10 text-brand-primary"
      >
        <Utensils size={120} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[30%] right-[10%] opacity-10 text-brand-energy"
      >
        <Utensils size={180} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [45, 405],
          scale: [0.8, 1, 0.8],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[60%] left-[40%] opacity-5 text-brand-highlight"
      >
        <Utensils size={150} strokeWidth={1} />
      </motion.div>
    </div>
  );
}
