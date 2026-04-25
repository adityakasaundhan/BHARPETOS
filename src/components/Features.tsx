import { motion } from "motion/react";
import { BarChart3, Clock, LayoutGrid, Zap } from "lucide-react";

const features = [
  {
    title: "मुनाफे पर नज़र",
    description: "हर ऑर्डर का हिसाब, हर मुनाफे पर नज़र। Live real-time dashboards that show exactly where your money is going.",
    icon: BarChart3,
    color: "bg-brand-primary"
  },
  {
    title: "तगड़ी बिलिंग",
    description: "बिलिंग तेज़, मैनेजमेंट आसान। Built for peak hour chaos. 0.2s order processing time.",
    icon: Zap,
    color: "bg-brand-energy"
  },
  {
    title: "स्टॉक पर पकड़",
    description: "खर्चा, बिक्री, स्टॉक — सब पर पकड़ मजबूत। Inventory that predicts shortages before they happen.",
    icon: Clock,
    color: "bg-brand-highlight"
  },
  {
    title: "पूरा सिस्टम",
    description: "बिखरा काम नहीं, पूरा सिस्टम एक नाम। Kitchen, front-of-house, and delivery joined in one system.",
    icon: LayoutGrid,
    color: "bg-brand-primary"
  }
];

export default function Features() {
  const title = "BUILT FOR SPEED. FORGED IN CHAOS.";
  
  return (
    <section id="features" className="py-24 px-6 bg-brand-bg text-brand-text overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-brand-primary font-bold text-xs tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-brand-primary"></span>
            System Capabilities
          </div>
          <h2 className="text-5xl md:text-[80px] leading-[0.82] mt-4 max-w-4xl flex flex-wrap gap-x-[0.2em]">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
                duration: 0.8
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: idx % 2 === 0 ? 0.5 : -0.5
              }}
              className="group p-10 border-2 border-brand-text bg-white shadow-[8px_8px_0px_#1E1E1E] hover:shadow-[16px_16px_0px_#FF89A9] transition-all"
            >
              <div className={`w-20 h-20 ${feature.color} flex items-center justify-center mb-8 border-4 border-brand-text shadow-[4px_4px_0px_#1E1E1E]`}>
                <feature.icon size={40} className="text-brand-text" />
              </div>
              <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter italic group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-xl opacity-80 leading-tight font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
