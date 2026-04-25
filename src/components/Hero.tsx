import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 60, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] rotate-[-15deg] pointer-events-none">
        <Logo variant="icon" size={200} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 text-brand-primary font-bold text-xs tracking-widest uppercase">
          <span className="w-8 h-[2px] bg-brand-primary"></span>
          The Operating System for Taste
        </motion.div>

        <div className="flex flex-col">
          <motion.div variants={item} className="overflow-hidden">
            <h1 className="text-[12vw] lg:text-[110px] leading-[0.82] mb-0">
              RUN YOUR
            </h1>
          </motion.div>
          
          <motion.div variants={item} className="overflow-hidden">
            <h1 className="text-[12vw] lg:text-[110px] leading-[0.82]">
              RESTAURANT.
            </h1>
          </motion.div>

          <motion.div variants={item} className="overflow-hidden">
            <h1 className="text-[12vw] lg:text-[110px] leading-[0.82] text-brand-primary">
              NOT अफरातफरी CONFUSION.
            </h1>
          </motion.div>
        </div>

        <motion.div 
          variants={item}
          className="mt-10 max-w-md"
        >
          <p className="text-lg md:text-xl font-medium leading-tight opacity-80">
            मुनाफे की चाबी — BharpetOS। <br />
            The only brutalist SaaS dashboard designed to keep your kitchen running at lightspeed while you maximize every single plate of profit.
          </p>
        </motion.div>

        <motion.div 
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-10"
        >
          <motion.button
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-brand-primary text-white px-10 py-6 font-display text-xl uppercase tracking-tighter shadow-offset shadow-brand-text transition-all"
            style={{ boxShadow: '8px 8px 0px #1E1E1E' }}
          >
            <span className="flex items-center gap-2">
              Book a Demo Now <ArrowRight />
            </span>
          </motion.button>

          <div className="flex flex-col">
            <span className="text-xs font-bold opacity-50 uppercase tracking-widest">Start Today</span>
            <span className="font-mono font-bold text-lg text-brand-text">₹7000/YR + 18% GST</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute right-20 top-0 w-[1px] bg-brand-text/10 hidden md:block"
      />
    </section>
  );
}
