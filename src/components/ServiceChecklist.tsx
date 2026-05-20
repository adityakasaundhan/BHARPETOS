import { motion } from "motion/react";
import { CheckCircle2, Sparkles, TrendingUp, Zap, ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  "POS Billing", "KOT System", "Waiter Mobile Order App", "Inventory Management",
  "Auto Inventory Consumption", "Auto Purchase Suggestion", "CRM & Customer History",
  "Expense Management", "Staff & Salary", "Live Order Dashboard", "Table Management",
  "Running Table Billing", "Kitchen Order Management",
  "Per-Order Profit Tracking", "Per-Dish Profit Tracking",
  "AI Profit Tracking", "Reports & Analytics", "Multi Payment Support", "Thermal Printer Support",
  "Tax & GST Reports", "Global Currency Support", "Role-Based Access", "Cloud Backup",
  "Multi-Device Login"
];

const reasons = [
  "Fast Billing", "Restaurant Profit Control", "Per-Order Profit Tracking", "Per-Dish Profit Tracking",
  "AI Inventory Intelligence", "Auto Purchase Management", "Waiter Mobile Ordering",
  "Live Kitchen & Order Tracking", "Easy Staff Management", "Smart Reports & Analytics",
  "Multi-Country Ready System"
];

// Helper to split text into letters/words for individual staggered entrance
const AnimatedTitle = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-3 overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.215, 0.61, 0.355, 1],
              delay: i * 0.1
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export default function ServiceChecklist() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const reasonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      
      {/* Dynamic Background Element */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#DB4A2B 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Block: Included Services (All-In-One Solution) */}
          <div>
            <div className="flex items-center gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                className="h-[2px] bg-brand-primary"
              />
              <span className="flex items-center gap-2">
                <Zap size={14} className="animate-bounce" />
                All-In-One Solution
              </span>
            </div>

            <AnimatedTitle 
              text="Everything You Need." 
              className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-12 text-brand-text"
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {services.map((service, i) => {
                const isProfitTracking = service.includes("Profit");
                return (
                  <motion.div
                    key={service}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      borderColor: "#DB4A2B",
                      backgroundColor: isProfitTracking ? "#183656" : "#FFFFFF",
                      color: isProfitTracking ? "#FFFFFF" : "#1E1E1E",
                      boxShadow: "0px 10px 20px rgba(30,30,30,0.08)"
                    }}
                    className={`flex items-center justify-between p-4 border-2 transition-all cursor-pointer relative overflow-hidden ${
                      isProfitTracking 
                        ? "border-brand-primary bg-brand-primary/5 shadow-sm" 
                        : "border-brand-text/10 bg-white"
                    }`}
                  >
                    {isProfitTracking && (
                      <motion.div 
                        animate={{ opacity: [0.1, 0.25, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-primary/10 pointer-events-none"
                      />
                    )}

                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className={isProfitTracking ? "text-brand-energy shrink-0" : "text-brand-primary shrink-0"} size={20} />
                      </motion.div>
                      <span className="font-bold text-sm uppercase tracking-tight">{service}</span>
                    </div>

                    {isProfitTracking && (
                      <motion.span 
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="bg-brand-energy text-brand-text text-[9px] font-black px-2 py-0.5 uppercase tracking-tighter shrink-0 ml-2 rounded"
                      >
                        PROFIT+
                      </motion.span>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Block: Why BharpetOS? (The Edge We Provide) */}
          <div className="lg:pt-24 text-right">
            <div className="flex items-center justify-end gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-brand-primary animate-pulse" />
                Why BharpetOS?
              </span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                className="h-[2px] bg-brand-primary"
              />
            </div>

            <AnimatedTitle 
              text="The Edge We Provide." 
              className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-12 text-brand-text"
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-5"
            >
              {reasons.map((reason, i) => {
                const isSpecial = reason.includes("Profit");
                return (
                  <motion.div
                    key={reason}
                    variants={reasonVariants}
                    whileHover={{ 
                      x: -12,
                      scale: 1.02,
                      backgroundColor: isSpecial ? "#DB4A2B" : "#1E1E1E",
                      color: "#FFFFFF",
                      borderColor: isSpecial ? "#ECA825" : "#1E1E1E",
                      boxShadow: "12px 12px 0px #1E1E1E"
                    }}
                    className={`inline-flex items-center justify-between gap-6 p-6 border-4 border-brand-text w-full cursor-pointer text-left transition-all ${
                      isSpecial 
                        ? "bg-brand-highlight text-brand-text shadow-[8px_8px_0px_#183656]" 
                        : "bg-brand-energy shadow-[8px_8px_0px_#1E1E1E]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {isSpecial && <TrendingUp size={24} className="text-brand-primary animate-bounce shrink-0" />}
                      <span className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">
                        {reason}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {isSpecial && (
                        <span className="text-[10px] font-black tracking-widest bg-brand-text text-white px-2 py-1 uppercase rounded">
                          CORE SYSTEM
                        </span>
                      )}
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        className="w-10 h-10 bg-brand-text flex items-center justify-center border-2 border-brand-bg shrink-0"
                      >
                        <ShieldCheck className="text-brand-energy" size={20} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

