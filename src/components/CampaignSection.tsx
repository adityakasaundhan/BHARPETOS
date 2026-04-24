import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const technicalLinks = [
  {
    title: "Core Architecture",
    description: "Distributed microservices architecture built on high-performance Node.js clusters, ensuring 99.9% uptime and zero-latency transaction processing even during peak hours."
  },
  {
    title: "Security Protocols",
    description: "Multi-layered defense including AES-256 encryption at rest, TLS 1.3 in transit, and biometric-grade authentication for administrative access."
  },
  {
    title: "Open Source Modules",
    description: "Hardened versions of critical open-source kernels for maximum reliability and transparency, allowing you to scale without vendor lock-in."
  },
  {
    title: "API Documentation",
    description: "Comprehensive RESTful and GraphQL endpoints allowing seamless integration with 100+ third-party delivery, payment, and analytics platforms."
  }
];

export default function CampaignSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-6 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-6xl md:text-[90px] mb-8 uppercase leading-[0.82] font-black tracking-tighter">
            THE RESTAURANT <br />
            <span className="text-brand-primary italic">MODULARITY</span> GRID.
          </h2>
          <p className="text-xl md:text-2xl opacity-80 leading-tight max-w-lg font-medium">
            Everything in BharpetOS is a module. Switch terminal providers, 
            delivery partners, or payment gateways with one line of code. 
            No vendor lock-in. Ever.
          </p>
        </div>

        <div className="flex-1 flex flex-col">
          {technicalLinks.map((link, idx) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className={`group py-10 border-b-2 border-brand-text/10 flex flex-col cursor-pointer hover:border-brand-primary transition-all overflow-hidden ${activeIdx === idx ? 'bg-brand-primary/5 px-4' : ''}`}
            >
              <div className="flex justify-between items-center w-full">
                <h3 className={`text-3xl font-black transition-colors uppercase tracking-tight ${activeIdx === idx ? 'text-brand-primary' : 'group-hover:text-brand-primary'}`}>
                  {link.title}
                </h3>
                <motion.div
                  animate={{ rotate: activeIdx === idx ? 90 : 0 }}
                  className={`w-14 h-14 flex items-center justify-center border-2 transition-all ${activeIdx === idx ? 'border-brand-primary bg-brand-primary text-white' : 'border-brand-text group-hover:border-brand-primary'}`}
                >
                  {activeIdx === idx ? <ChevronDown size={28} /> : <ArrowUpRight size={28} />}
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-6 text-lg font-bold leading-relaxed text-brand-text uppercase italic opacity-70">
                      {link.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className="h-1 bg-brand-primary w-0 mt-4 group-hover:w-full transition-all duration-500 ease-out"
                animate={{ width: activeIdx === idx ? "100%" : "0%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
