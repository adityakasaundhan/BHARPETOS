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

      {/* Scattered Black Cutlery Texture */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`cutlery-${i}`}
          initial={{ 
            opacity: 0,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            rotate: Math.random() * 360
          }}
          animate={{
            opacity: 0.04,
            y: [`${Math.random() * 100}%`, `${Math.random() * 100 + (i % 2 === 0 ? 5 : -5)}%`],
            rotate: [Math.random() * 360, Math.random() * 360 + 20],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute text-brand-text pointer-events-none select-none z-0"
          style={{
            fontSize: `${20 + Math.random() * 40}px`,
          }}
        >
          <Utensils size={24 + Math.random() * 32} strokeWidth={1} />
        </motion.div>
      ))}

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
