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
    "मुनाफे की चाबी — BharpetOS।",
    "रेस्टोरेंट मालिक का असली साथी।",
    "बिखरा काम नहीं, पूरा सिस्टम एक नाम।",
    "खर्चा, बिक्री, स्टॉक — सब पर पकड़ मजबूत।",
    "अब रेस्टोरेंट नहीं चलेगा अंदाज़े पर।",
    "हर ऑर्डर का हिसाब, हर मुनाफे पर नज़र।",
    "BharpetOS लगाओ, कारोबार बढ़ाओ।",
    "तगड़ा सिस्टम, तगड़ी कमाई।",
    "BharpetOS — रेस्टोरेंट का पूरा हिसाब, एक ही किताब।",
    "Billing se lekar profit tak, restaurant ka complete control system।"
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
  const planFeatures = [
    {
      title: "Billing & KOT (+ Dine-In / Takeaway)",
      detail: "Split bills by seat or item. Smart routing prints KOT directly to kitchen instantly. Works 100% offline with zero-lag local cache."
    },
    {
      title: "Waiter Mobile Ordering System",
      detail: "Unlimited waiter mobile connections. Let waiters take tableside orders on any smartphone. Instantly syncs with active cashier counter."
    },
    {
      title: "Live Inventory & Ingredients Tracking",
      detail: "Deducts grain, spices, oils based on recipe mapping upon each bill punch. Real-time safety alert when stock level hits critical threshold."
    },
    {
      title: "Expense & Staff Salary Management",
      detail: "Track purchase invoices, petty cash outflow, staff attendance log, and calculate automated daily sales performance commissions."
    },
    {
      title: "AI Inventory & Profit Dashboard",
      detail: "Visualize active gross margin ratios instantly on cashier view. Interactive charts predict ingredient depletion based on current sales."
    },
    {
      title: "80+ Reports & GST Management",
      detail: "Generate GSTR-1 ready reports, category sales, itemized tax breakdowns, and waste reports. Export directly to Excel in one click."
    },
    {
      title: "Multi-Device Cloud Access",
      detail: "Secure live remote control dashboard for owners. Check current sales, average ticket size, and menu edits from your home or phone."
    },
    {
      title: "Multi-Tenant & Chain Support",
      detail: "Centrally manage multiple restaurant branches. Sync menus, monitor consolidated profit logs, and benchmark franchise performance."
    },
    {
      title: "Photo Scan To Update Inventory & Expenses",
      detail: "Snap a photo of purchase invoices, raw item grocery bills, or manually written stock receipts. Instantly reads items to replenish stock amounts automatically."
    },
    {
      title: "Full 24/7 Priority Support",
      detail: "No robotic chats. Talk directly to our setup engineers on phone or WhatsApp. Free onboarding data migration from Old POS."
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto border-4 border-brand-text p-8 md:p-16 relative bg-white/70 backdrop-blur-md shadow-xl">
        <div className="absolute top-0 right-0 p-4 bg-brand-energy font-display uppercase text-sm border-l-4 border-b-4 border-brand-text font-black text-brand-text flex items-center gap-1.5 shadow-sm">
          <span>★</span> BharpetOS Smart Plan
        </div>
        
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
          <div className="max-w-3xl w-full">
            <h2 className="text-5xl md:text-[68px] leading-[0.85] mb-4 font-black uppercase text-brand-text">THE COMPLETE SYSTEM.</h2>
            <p className="text-brand-text/60 font-medium text-xs md:text-sm uppercase tracking-wider mb-10 max-w-xl">
              All tools, analytics, waiter apps, and cloud features are included in a single license. Zero hidden monthly fees.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {planFeatures.map((item, idx) => (
                <motion.li 
                  key={item.title} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 border-2 border-brand-text flex items-center justify-center bg-brand-primary shrink-0 mt-1 shadow-xs">
                    <div className="w-2 h-2 bg-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs md:text-sm font-black tracking-tight uppercase text-brand-text">{item.title}</h4>
                    <p className="text-[10px] md:text-xxs leading-relaxed font-semibold text-brand-text/60">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end w-full xl:w-auto self-end xl:self-start">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-right w-full"
            >
              <div className="inline-block bg-[#183656] text-white font-mono text-[9px] font-black px-2.5 py-1 uppercase tracking-widest mb-4">
                🔒 Enterprise Grade SSL Security
              </div>
              <p className="text-2xl font-black opacity-30 uppercase tracking-widest">Yearly License</p>
              <div className="flex items-baseline justify-end gap-2 mt-2">
                <span className="text-6xl md:text-[100px] font-black leading-none">₹8999</span>
                <span className="text-2xl font-black uppercase">/YR</span>
              </div>
              <p className="text-brand-primary font-black mt-2 text-xl tracking-tighter italic">+ 18% GST APPLICABLE</p>
              <p className="text-[10px] font-bold text-brand-text/40 mt-1 uppercase">NO Monthly charges • Renew at same rate</p>
            </motion.div>

            <motion.button
              whileHover={{ translate: "4px 4px", boxShadow: "none" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 bg-brand-text text-white text-3xl font-black px-12 py-8 w-full xl:w-auto uppercase tracking-tighter shadow-[8px_8px_0px_#DB4A2B] transition-all cursor-pointer border-2 border-brand-text hover:bg-brand-primary"
            >
              Get Smart Plan
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
