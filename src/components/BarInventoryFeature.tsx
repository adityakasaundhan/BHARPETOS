import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DollarSign, Box, AlertTriangle, SlidersHorizontal, Plus, Search, Filter, ArrowDownRight, RotateCcw, Edit3, Trash2, GlassWater, Sparkles } from "lucide-react";

export default function BarInventoryFeature() {
  const [activeItem, setActiveItem] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isScanning) {
        setActiveItem((prev) => (prev + 1) % 2);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isScanning]);

  // Trigger scanning animation occasionally
  useEffect(() => {
    const scanTimer = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 2000);
    }, 8000);
    return () => clearInterval(scanTimer);
  }, []);

  const items = [
    {
      cat: 'WINES',
      name: "JACOB'S CREEK, Chardonnay Cabernet",
      status: 'LOW STOCK',
      costMl: '₹2.67/ML',
      stockQty: '4.0',
      stockDesc: '4F + 0ml',
      volume: '3,000',
      size: '750 ML',
      netValue: '8,000',
      min: 5,
      current: 4,
      cap: 10,
      color: 'orange'
    },
    {
      cat: 'BEERS',
      name: 'KINGFISHER ULTRA MAX',
      status: 'HEALTHY',
      costMl: '₹0.35/ML',
      stockQty: '522.8',
      stockDesc: '522F + 500ml',
      volume: '339,800',
      size: '650 ML',
      netValue: '1,43,360',
      min: 170,
      current: 522.8,
      cap: 800,
      color: 'emerald'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F9F9F9] border-b-4 border-brand-text">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
            <span className="w-8 h-[2px] bg-brand-primary"></span>
            Liquid Intelligence
          </div>
          <h2 className="text-4xl sm:text-6.5xl md:text-[85px] font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.8] mb-8 select-none">
            BAR & PREMIUM <br />
            <span className="text-brand-primary italic">INVENTORY CONTROL</span>
          </h2>
          <p className="text-xl font-medium opacity-85 max-w-2xl leading-tight">
            Stop losing profit to spillage or unrecorded consumption. Track every drop from bottle to glass with real-time depletion, auto-valuation and comprehensive audit logs.
          </p>
        </div>

        <div className="bg-white border-[6px] border-brand-text rounded-[32px] overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.1)] flex flex-col xl:flex-row relative">
          {/* Floating Decorative Elements */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 text-brand-primary/10 pointer-events-none z-0"
          >
            <GlassWater size={120} />
          </motion.div>

          {/* Left panel - Insights */}
          <div className="xl:w-1/3 bg-gray-50 border-b xl:border-b-0 xl:border-r border-gray-200 p-8 flex flex-col relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Inventory Overview</h3>
            <p className="text-sm font-bold opacity-40 uppercase tracking-wider mb-8">Track stock levels, batches & ingredients</p>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="space-y-4 flex-1"
            >
              {[
                { label: 'Total Stock Value', val: '₹2,19,500', Icon: DollarSign, color: 'text-orange-500', bg: 'bg-orange-50' },
                { label: 'Bottles in Stock', val: '783.2', unit: 'Btls', Icon: Box, color: 'text-blue-500', bg: 'bg-blue-50' },
                { label: 'Critical Warnings', val: '1', unit: 'Items Low', Icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100', alert: true }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`bg-white p-5 rounded-2xl shadow-sm border ${card.border || 'border-gray-100'} flex justify-between items-center text-left cursor-pointer transition-colors hover:border-brand-primary group`}
                >
                  <div>
                    <p className={`text-xs font-black uppercase opacity-40 mb-1 ${card.alert ? 'text-red-500' : ''}`}>{card.label}</p>
                    <p className={`text-2xl font-black ${card.alert ? 'text-red-500' : 'text-brand-text'} group-hover:text-brand-primary`}>
                      {card.val} {card.unit && <span className="text-xs opacity-60 font-medium">{card.unit}</span>}
                    </p>
                  </div>
                  <motion.div 
                    animate={card.alert ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`w-12 h-12 ${card.bg} ${card.color} rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors`}
                  >
                     <card.Icon size={20} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#000' }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-[#ECA825] text-white py-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer transition-all"
            >
              <Plus size={16} /> New Bar Product
            </motion.button>
          </div>

          {/* Right panel - Interactive Mockup */}
          <div className="xl:w-2/3 p-4 md:p-8 bg-[#F9F9F9] relative overflow-hidden">
             
             {/* Sub Navigation */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0 relative z-10"
             >
                <div className="flex bg-white p-1 rounded-xl w-fit shadow-sm border border-gray-100">
                  <button className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer text-gray-400 hover:text-gray-600">Raw Material Food</button>
                  <button className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer bg-black text-white shadow-sm">Bar Inventory</button>
                </div>
                
                <div className="flex gap-4 border-b border-gray-200 text-[10px] font-black uppercase tracking-widest overflow-x-auto w-full md:w-auto">
                  <button className="py-2 border-b-2 border-brand-text text-brand-text whitespace-nowrap">Liquid Management</button>
                  <button className="py-2 border-b-2 border-transparent text-gray-400 whitespace-nowrap">Insights & Analytics</button>
                </div>
             </motion.div>

             {/* Search/Filter Bar */}
             <div className="flex flex-col sm:flex-row gap-3 mb-8 shrink-0 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="flex-1 bg-white border border-gray-200 rounded-xl flex items-center px-4 py-3 shadow-sm min-w-0"
                >
                  <Search size={16} className="text-gray-400 shrink-0" />
                  <input readOnly type="text" value="Search brand, category, mixers..." className="w-full text-xs font-bold outline-none px-3 bg-transparent text-gray-400 truncate" />
                </motion.div>
                <div className="flex gap-2">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white border border-gray-200 rounded-xl p-1 flex items-center shadow-sm h-full"
                  >
                    {['All', 'Healthy', 'Low'].map((filter, idx) => (
                      <button 
                        key={filter}
                        className={`px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-colors cursor-pointer ${idx === 0 ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </motion.div>
                </div>
             </div>

             {/* Dynamic Animated Cards container */}
             <div className="relative min-h-[350px] z-10">
                {/* Scanning Light Effect Overlay */}
                <AnimatePresence>
                  {isScanning && (
                    <motion.div 
                      key="scanner"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 pointer-events-none rounded-3xl"
                    >
                      <motion.div 
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-brand-primary/40 shadow-[0_0_20px_rgba(219,74,43,0.8)] z-30 flex justify-center"
                      >
                        <div className="bg-brand-primary text-white text-[8px] font-bold px-2 py-0.5 rounded-full -mt-2 flex items-center gap-1">
                          <Sparkles size={8} /> SCANNING STOCK
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-brand-primary/[0.02] mix-blend-overlay" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="popLayout">
                  {items.map((item, i) => (
                    i === activeItem && (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        exit={{ opacity: 0, x: -50, rotate: -2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border-[3px] border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl absolute w-full left-0 top-0 cursor-pointer"
                      >
                         <div className="flex justify-between items-start mb-6">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                               <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-2 block">{item.cat}</span>
                               <h4 className="text-xl md:text-2xl font-black uppercase text-brand-text leading-tight">{item.name}</h4>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-right shrink-0 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100"
                            >
                               <span className={`inline-block px-3 py-1 rounded text-[10px] font-black uppercase mb-2 ${item.status === 'LOW STOCK' ? 'bg-orange-100 text-orange-700 animate-pulse' : 'bg-emerald-100 text-emerald-700'}`}>{item.status}</span>
                               <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Bottle Cost</p>
                               <p className="text-sm font-black text-emerald-600">{item.costMl}</p>
                            </motion.div>
                         </div>

                         <div className="flex justify-between bg-gray-50/50 rounded-2xl p-3 sm:p-4 border border-gray-100 mb-6 gap-2 sm:gap-0">
                            {[
                              { label: 'Stock Qty', val: item.stockQty, unit: 'Btls', desc: item.stockDesc },
                              { label: 'Volume', val: item.volume, unit: 'ML', desc: `Size: ${item.size}`, highlight: 'text-orange-500' },
                              { label: 'Net Value', val: `₹${item.netValue}`, unit: '', desc: 'Valuation', highlight: 'text-brand-primary' }
                            ].map((stat, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className={`text-center w-1/3 ${idx === 1 ? 'border-l border-r border-gray-200 px-1 sm:px-4' : ''} shrink min-w-0`}
                              >
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">{stat.label}</p>
                                <p className={`text-lg sm:text-2xl font-black truncate ${stat.highlight || 'text-brand-text'}`}>{stat.val} <span className="text-[10px] sm:text-xs text-gray-500">{stat.unit}</span></p>
                                <p className="text-[10px] text-gray-500 font-bold tracking-wider">{stat.desc}</p>
                              </motion.div>
                            ))}
                         </div>

                         <div className="mb-8">
                           <div className="flex justify-between text-[10px] font-black mb-2 opacity-60 uppercase tracking-wider">
                             <span>Stock Level</span>
                             <span>Min: {item.min} Btls ({item.min * parseInt(item.size)}ml)</span>
                           </div>
                           <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${(item.current / item.cap) * 100}%` }}
                                 transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                                 className={`h-full ${item.color === 'orange' ? 'bg-[#ECA825]' : 'bg-emerald-500'}`} 
                              />
                           </div>
                         </div>

                         <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.6 }}
                           className="grid grid-cols-2 md:grid-cols-4 gap-3"
                         >
                            <button className="flex justify-center items-center gap-2 bg-gray-100 rounded-xl py-3 text-[10px] font-black uppercase text-brand-text hover:bg-gray-200 transition-colors">
                              <Plus size={14} /> Restock
                            </button>
                            <button className="flex justify-center items-center gap-2 bg-white border-2 border-gray-200 rounded-xl py-3 text-[10px] font-black uppercase text-brand-text hover:bg-gray-50 transition-colors">
                              <ArrowDownRight size={14} /> Spill/Waste
                            </button>
                            
                            <button className="flex justify-center items-center gap-2 bg-white border-2 border-gray-200 rounded-xl py-3 text-[10px] font-black uppercase text-gray-500 md:col-span-1 hover:text-brand-text transition-colors">
                              <RotateCcw size={14} /> Audit
                            </button>
                            <div className="flex gap-2">
                               <button className="flex-1 flex justify-center items-center bg-white border-2 border-gray-200 rounded-xl hover:text-brand-primary transition-colors text-gray-400"><Edit3 size={16} /></button>
                               <button className="flex-1 flex justify-center items-center bg-white border-2 border-gray-200 rounded-xl hover:text-red-500 transition-colors text-gray-400"><Trash2 size={16} /></button>
                            </div>
                         </motion.div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
             </div>
             
             {/* Decorative Background grid */}
             <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
