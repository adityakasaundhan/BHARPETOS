import { useState } from "react";
import { motion } from "motion/react";
import { Coffee, Pizza, Utensils, Zap } from "lucide-react";

const products = [
  { 
    name: "QUICK POS", 
    icon: Zap, 
    color: "#DB4A2B",
    desc: "Speed up your checkout process with our lightning-fast POS system.",
    features: ["Instant Billing", "Offline Mode", "Split Payments", "Digital Receipts"]
  },
  { 
    name: "KITCHEN DISPLAY", 
    icon: Utensils, 
    color: "#F8A348",
    desc: "Sync your front of house and kitchen perfectly in real-time.",
    features: ["Order Prioritization", "Prep Time Alerts", "Direct KOT", "Stock Sync"]
  },
  { 
    name: "RESERVATIONS", 
    icon: Coffee, 
    color: "#FF89A9",
    desc: "Manage table bookings and walk-ins with a smart digital floor plan.",
    features: ["Table Management", "SMS Alerts", "Customer History", "Advance Booking"]
  },
  { 
    name: "ORDERING APP", 
    icon: Pizza, 
    color: "#DB4A2B",
    desc: "Let customers order directly from their tables using their phones.",
    features: ["QR Based Ordering", "Custom Menu Display", "UPI Integration", "Rating System"]
  },
];

export default function ProductGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 px-6 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl mb-20 uppercase font-black tracking-tighter italic"
        >
          MODULAR BY DESIGN.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              layout
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                x: -8,
                y: -8,
                rotate: idx % 2 === 0 ? -1 : 1
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className={`border-4 p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500 overflow-hidden relative ${
                activeIdx === idx 
                ? 'bg-brand-primary border-brand-text shadow-[20px_20px_0px_#1E1E1E] -translate-y-4 text-white min-h-[500px]' 
                : 'bg-brand-bg border-brand-text shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[20px_20px_0px_#DB4A2B] text-brand-text h-96'
              }`}
            >
              <motion.div 
                animate={{ 
                  scale: activeIdx === idx ? 1.2 : 1,
                  rotate: activeIdx === idx ? 360 : 0,
                  backgroundColor: activeIdx === idx ? "#FFFFFF" : "transparent"
                }}
                className={`w-16 h-16 border-2 border-brand-text flex items-center justify-center transition-colors ${activeIdx === idx ? 'text-brand-primary' : 'bg-white group-hover:bg-brand-primary group-hover:text-white'}`}
              >
                <product.icon size={32} />
              </motion.div>
              
              <div>
                {activeIdx === idx && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 space-y-4"
                  >
                    <p className="text-lg font-bold leading-tight">{product.desc}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                <motion.h3 
                  animate={{ color: activeIdx === idx ? "#FFFFFF" : "#1E1E1E" }}
                  className="text-4xl font-black mb-4 tracking-tighter italic uppercase"
                >
                  {product.name}
                </motion.h3>
                <div className="flex items-center justify-between">
                  <motion.p 
                    animate={{ opacity: activeIdx === idx ? 1 : 0.6 }}
                    className="text-[10px] font-black uppercase tracking-widest"
                  >
                    {activeIdx === idx ? 'SYSTEM ONLINE ●' : 'EXPLORE SYSTEM ↗'}
                  </motion.p>
                  <span className={`text-3xl font-black transition-opacity ${activeIdx === idx ? 'opacity-100' : 'opacity-10 group-hover:opacity-100'}`}>
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {activeIdx === idx && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 8 }}
                  className="absolute bottom-0 left-0 right-0 bg-white"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
