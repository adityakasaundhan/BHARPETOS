import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { Calculator, Play, ChevronDown, Check, Sparkles, TrendingUp, X, BellDot, RefreshCw } from "lucide-react";

interface MockOrder {
  id: string;
  table: string;
  item: string;
  qty: number;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [roiOpen, setRoiOpen] = useState(false);
  
  // Interactive Simulator States
  const [dailyOrders, setDailyOrders] = useState(120);
  const [avgTicket, setAvgTicket] = useState(450);
  
  // Live KOT Simulator State
  const [activeKOTs, setActiveKOTs] = useState<MockOrder[]>([]);
  const [kotNotification, setKotNotification] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate approximate monthly profit leakage savings (5% average manual bill leakage/inventory waste)
  const monthlySavings = Math.round(dailyOrders * avgTicket * 0.045 * 30);
  const annualSavings = Math.round(monthlySavings * 12);
  const paysBackInDays = Math.round((8999 / annualSavings) * 365);

  const triggerMockKOT = () => {
    const dishes = [
      "Kadai Paneer Special", "Butter Naan Butterly", "Veg Biryani Platter",
      "Paneer Tikka Roll", "Crispy Masala Dosa", "Smart Hakka Noodles"
    ];
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    const randomTable = String(Math.floor(Math.random() * 18) + 1);
    const newOrder: MockOrder = {
      id: "KOT-" + Math.floor(Math.random() * 900 + 100),
      table: "Table " + randomTable,
      item: randomDish,
      qty: Math.floor(Math.random() * 3) + 1
    };

    setActiveKOTs((prev) => [newOrder, ...prev.slice(0, 2)]);
    setKotNotification(`🔔 New order routed from Waiter to Kitchen: ${newOrder.qty}x ${newOrder.item} on ${newOrder.table}!`);
    
    // Auto clear notification
    setTimeout(() => {
      setKotNotification(null);
    }, 4500);
  };

  const removeKOT = (id: string) => {
    setActiveKOTs((prev) => prev.filter(o => o.id !== id));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          height: scrolled ? 70 : 88,
          backgroundColor: scrolled ? "rgba(228, 226, 221, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled ? "4px solid #1E1E1E" : "1px solid transparent"
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 transition-all"
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          
          {/* Logo container with brand and logo shifted to the left of the Calligraphy text */}
          <div className="flex items-center gap-4">
            <Logo 
              variant="badge"
              size={48} 
              className="cursor-pointer hover:rotate-6 transition-transform duration-300 shadow-md"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />

            <motion.div 
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 0.95, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start justify-center select-none cursor-pointer hidden sm:flex"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-calligraphy text-5xl md:text-6xl font-black text-[#183656] tracking-wide leading-none -rotate-3 -translate-y-1.5 drop-shadow-sm">
                Bharpetos
              </span>
            </motion.div>
          </div>

          {/* Navigation Links with custom interactive DROPDOWN for Working Tools on top */}
          <div className="hidden lg:flex gap-8 font-bold text-[11px] tracking-widest items-center">
            {["FEATURES", "SCANNER"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-colors hover:text-brand-primary"
              >
                {item}
              </motion.a>
            ))}

            {/* DIRECT ACTION: Live Working Profit Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoiOpen(!roiOpen)}
                className="flex items-center gap-1.5 transition-colors text-brand-primary hover:text-brand-text font-black uppercase text-[11px] tracking-wider py-1 px-3 border border-brand-primary/20 bg-brand-primary/5 rounded"
              >
                <Sparkles size={13} className="animate-pulse" />
                LIVE ROI LAB
                <ChevronDown size={12} className={`transition-transform duration-350 ${roiOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Working ROI Dropdown panel */}
              <AnimatePresence>
                {roiOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] bg-white border-4 border-brand-text p-6 shadow-[10px_10px_0px_#1E1E1E] text-brand-text z-50 text-left font-sans"
                  >
                    <div className="flex justify-between items-center pb-3 border-b-2 border-brand-text/10 mb-4">
                      <h4 className="font-black text-xs uppercase tracking-tight flex items-center gap-2">
                        <Calculator size={14} className="text-brand-primary" /> Leakage Calculator
                      </h4>
                      <button onClick={() => setRoiOpen(false)}>
                        <X size={16} className="opacity-60 hover:opacity-100" />
                      </button>
                    </div>

                    <p className="text-xxs opacity-70 leading-normal mb-4">
                      Adjust parameters to visualize actual profit bleeding avoided by moving to automatic inventory control.
                    </p>

                    {/* Slider 1 */}
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-xxs font-black uppercase">
                        <span>Daily Orders</span>
                        <span className="text-brand-primary text-xs font-black">{dailyOrders} KOTs</span>
                      </div>
                      <input 
                        type="range" 
                        min="20" 
                        max="500" 
                        value={dailyOrders} 
                        onChange={(e) => setDailyOrders(Number(e.target.value))}
                        className="w-full h-1.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary"
                      />
                    </div>

                    {/* Slider 2 */}
                    <div className="space-y-1 mb-5">
                      <div className="flex justify-between text-xxs font-black uppercase">
                        <span>Avg Ticket Price</span>
                        <span className="text-brand-primary text-xs font-black">₹{avgTicket}</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="1500" 
                        step="50"
                        value={avgTicket} 
                        onChange={(e) => setAvgTicket(Number(e.target.value))}
                        className="w-full h-1.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary"
                      />
                    </div>

                    {/* Results block */}
                    <div className="p-3 bg-brand-bg/40 border border-brand-text/10 rounded space-y-2 mb-3">
                      <div className="flex justify-between items-center text-xxs font-bold uppercase">
                        <span>Estimated leak saved:</span>
                        <span className="text-emerald-700 font-extrabold text-xs">₹{monthlySavings.toLocaleString('en-IN')}/mo</span>
                      </div>
                      <div className="flex justify-between items-center text-xxs font-bold uppercase">
                        <span>BharpetOS Annual Gain:</span>
                        <span className="text-brand-primary font-black text-sm">₹{annualSavings.toLocaleString('en-IN')}/yr</span>
                      </div>
                    </div>

                    <div className="text-[10px] font-bold text-center text-[#183656] bg-brand-energy/20 px-2 py-1 border border-brand-energy/40 rounded">
                      🎉 Licence pays for itself in just <span className="font-black underline">{paysBackInDays} days</span>!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Items */}
            {["PRODUCTS", "PRICING", "ABOUT"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-colors hover:text-brand-primary"
              >
                {item}
              </motion.a>
            ))}

            {/* Live KOT Simulator Direct Link */}
            <button
              onClick={triggerMockKOT}
              className="flex items-center gap-1.5 font-black text-[10px] tracking-wider text-white bg-brand-text py-1 px-3 border border-transparent hover:bg-brand-primary transition-all duration-300"
            >
              <Play size={10} className="fill-white" />
              SIMULATE ORDER
            </button>
          </div>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-text text-white px-5 py-2.5 rounded-none font-bold text-[11px] uppercase tracking-widest border-r-4 border-b-4 border-brand-primary/30 hover:bg-brand-primary transition-all"
          >
            GET CONTROL
          </motion.button>
        </div>
      </motion.nav>

      {/* Floating simulator alert nodes & notifications on screen corner */}
      <div className="fixed top-24 right-6 z-50 pointer-events-none select-none max-w-sm space-y-3">
        {/* Toast Notifier */}
        <AnimatePresence>
          {kotNotification && (
            <motion.div
              initial={{ opacity: 0, x: 80, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.9 }}
              className="bg-brand-text text-white border-2 border-brand-primary rounded p-4 shadow-xl flex items-start gap-3 pointer-events-auto"
            >
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping mt-1.5 shrink-0" />
              <div>
                <p className="font-display font-black text-xxs tracking-wider text-brand-primary uppercase">LIVE SYSTEM DEMO</p>
                <p className="font-sans font-bold text-xs text-brand-bg leading-snug mt-1">{kotNotification}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Active KOT Tickets list dynamically updating in real-time */}
        <AnimatePresence>
          {activeKOTs.map((kot) => (
            <motion.div
              key={kot.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-white border-4 border-brand-text p-3 shadow-[4px_4px_0px_#1ea] pointer-events-auto flex items-center justify-between"
            >
              <div className="font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-brand-primary">{kot.id}</span>
                  <span className="text-[10px] bg-brand-bg font-sans font-black px-1.5 py-0.5 uppercase tracking-tighter">
                    {kot.table}
                  </span>
                </div>
                <p className="font-black text-brand-text mt-1 text-sm">{kot.qty}x {kot.item}</p>
              </div>
              <button
                onClick={() => removeKOT(kot.id)}
                className="w-6 h-6 rounded-full bg-brand-bg hover:bg-brand-primary hover:text-white flex items-center justify-center text-[10px] font-black pointer-events-auto transition-colors"
                title="Mark Cooked & Route"
              >
                ✓
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

