import { motion, useScroll, useSpring } from "motion/react";
import { Users, Zap, CreditCard, ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import { CategoryDivider, Pricing, HinglishMarquee } from "./components/PricingSections";
import Footer from "./components/Footer";
import BackgroundBlobs from "./components/BackgroundBlobs";

import CampaignSection from "./components/CampaignSection";
import DashboardMockup from "./components/DashboardMockup";
import SystemShowcase from "./components/SystemShowcase";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <BackgroundBlobs />
      <Navbar />
      
      <main>
        <Hero />
        
        <DashboardMockup />
        
        <HinglishMarquee />
        
        <CategoryDivider text="SPEED • CONTROL • PROFIT" />
        
        <Features />
        
        <div className="bg-brand-text py-1 border-y-4 border-brand-primary/20">
          <HinglishMarquee />
        </div>

        <ProductGrid />
        
        <CategoryDivider text="FUTURE OF DINING" />
        
        <CampaignSection />
        
        <Pricing />
        
        <SystemShowcase />
        
        <section className="py-32 bg-brand-bg text-brand-text relative overflow-hidden">
          {/* 7 Day Free Trial Badge */}
          <motion.div 
            initial={{ rotate: -12, scale: 0 }}
            whileInView={{ rotate: -12, scale: 1 }}
            className="absolute top-10 right-10 z-20 bg-brand-primary text-white p-8 rounded-full border-4 border-brand-text shadow-xl flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl font-black leading-none">7 DAYS</span>
            <span className="text-xs font-black uppercase tracking-widest">Free Trial</span>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div className="space-y-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary mb-4">Get In Touch</p>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic mb-8">
                    Start Your <br />
                    <span className="text-brand-primary">Digital</span> Journey
                  </h2>
                  <p className="text-xl font-medium opacity-60 leading-relaxed max-w-lg">
                    Have questions about our system or want to book a specialized consultation? Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Contact Methods */}
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-white border-2 border-brand-text rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1E1E1E]">
                       <Users size={32} />
                    </div>
                    <div>
                       <p className="text-lg font-black uppercase">Aditya Kasaundhan</p>
                       <p className="text-2xl font-black tracking-tighter text-brand-primary">+91 95114 21803</p>
                       <p className="text-sm opacity-40 font-bold uppercase">Call for appointment or guidance</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-white border-2 border-brand-text rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1E1E1E]">
                       <Zap size={32} />
                    </div>
                    <div>
                       <p className="text-lg font-black uppercase">WhatsApp Inquiry</p>
                       <p className="text-sm opacity-40 font-bold uppercase mb-4">Instant support available</p>
                       <motion.a 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         href="https://wa.me/919511421803"
                         target="_blank"
                         rel="noreferrer"
                         className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-green-500/20"
                       >
                         Chat on WhatsApp
                       </motion.a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-white border-2 border-brand-text rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1E1E1E]">
                       <CreditCard size={32} />
                    </div>
                    <div>
                       <p className="text-lg font-black uppercase">Email Inquiry</p>
                       <p className="text-2xl font-black tracking-tighter text-brand-primary">eternalsforge@gmail.com</p>
                       <p className="text-sm opacity-40 font-bold uppercase">Typical response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white border-4 border-brand-text p-10 md:p-14 rounded-[40px] shadow-[40px_40px_0px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-10">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase opacity-40 tracking-widest">Full Name</label>
                      <input type="text" placeholder="Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase opacity-40 tracking-widest">Phone Number</label>
                      <input type="text" placeholder="+91" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all font-bold" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase opacity-40 tracking-widest">Consultation For</label>
                    <select className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all font-bold appearance-none">
                      <option>Select Service</option>
                      <option>POS Billing System</option>
                      <option>Inventory Management</option>
                      <option>Complete Ecosystem</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase opacity-40 tracking-widest">Tell us your concern</label>
                    <textarea rows={4} placeholder="Message..." className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all font-bold resize-none" />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-text text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl flex items-center justify-center gap-3"
                  >
                    Send Inquiry <ChevronRight size={18} />
                  </motion.button>

                  <p className="text-[8px] font-bold text-center opacity-30 mt-6 uppercase tracking-widest">
                    BY CLICKING SEND, YOU AGREE TO OUR SERVICE CONSULTATION PRINCIPLES
                  </p>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

        <section className="py-40 px-6 bg-brand-primary text-white text-center relative overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-full aspect-square border-[40px] border-white/5 rounded-full pointer-events-none"
          />
          
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-6xl md:text-[140px] leading-[0.82] uppercase mb-16 font-black tracking-tighter">READY TO ASCEND?</h2>
            <a href="https://bharpetos-v2-0.vercel.app/" target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ 
                  translate: "8px 8px", 
                  boxShadow: "none",
                  scale: 1.05,
                  rotate: 2
                }}
                className="bg-brand-text text-brand-bg text-4xl p-10 px-20 font-black uppercase tracking-tighter shadow-[12px_12px_0px_#E4E2DD] transition-all"
              >
                JOIN THE ELITE
              </motion.button>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
