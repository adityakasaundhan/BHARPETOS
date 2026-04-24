import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CategoryDivider({ text }: { text: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={container} className="py-24 overflow-hidden bg-brand-bg select-none border-y-2 border-brand-text/5">
      <motion.div style={{ x }} className="whitespace-nowrap flex gap-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <span 
            key={i} 
            className="text-[12vw] font-black uppercase italic tracking-tighter text-brand-text opacity-10"
          >
            {text} • 
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function HinglishMarquee() {
  const taglines = [
    "कमाई का हिसाब अब उंगलियों पर।",
    "जहाँ BharpetOS, वहाँ काम टेंशनलेस।",
    "रेस्टोरेंट चलेगा तेज़, मुनाफा दिखेगा साफ़।",
    "अब अंदाज़े नहीं, पक्का हिसाब।",
    "हर टेबल का लेखा-जोखा, एक ही जगह।",
    "जो दिखेगा, वही सुधरेगा।",
    "बिलिंग तेज़, मैनेजमेंट आसान।"
  ];

  return (
    <div className="bg-brand-energy py-6 border-y-4 border-brand-text overflow-hidden whitespace-nowrap flex select-none">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {taglines.map((tag) => (
              <span key={tag} className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-text">
                {tag} <span className="text-brand-primary">★</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto border-4 border-brand-text p-8 md:p-16 relative">
        <div className="absolute top-0 right-0 p-4 bg-brand-energy font-display uppercase text-sm border-l-4 border-b-4 border-brand-text">
          Best Seller
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-6xl md:text-[80px] leading-[0.82] mb-8 font-black">ONE PRICE. ALL ACCESS.</h2>
            <ul className="space-y-6">
              {["Unlimited Outlets", "24/7 Priority Support", "White-label Analytics", "API Access"].map((item) => (
                <li key={item} className="flex items-center gap-6 text-2xl font-bold tracking-tight">
                  <div className="w-8 h-8 border-2 border-brand-text flex items-center justify-center bg-brand-primary">
                    <div className="w-3 h-3 bg-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end w-full md:w-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-right"
            >
              <span className="text-2xl font-black opacity-30 uppercase tracking-widest">Pricing Plan</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-8xl md:text-[140px] font-black leading-none">₹7000</span>
                <span className="text-3xl font-black uppercase">/YR</span>
              </div>
              <p className="text-brand-primary font-black mt-2 text-xl tracking-tighter italic">+ 18% GST APPLICABLE</p>
            </motion.div>

            <motion.button
              whileHover={{ translate: "4px 4px", boxShadow: "none" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 bg-brand-text text-white text-3xl font-black px-12 py-8 w-full md:w-auto uppercase tracking-tighter shadow-[8px_8px_0px_#DB4A2B] transition-all"
            >
              Secure License Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
