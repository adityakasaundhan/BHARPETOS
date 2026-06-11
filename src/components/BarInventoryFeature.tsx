import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DollarSign, Box, AlertTriangle, SlidersHorizontal, Plus, Search, Filter, ArrowDownRight, RotateCcw, Edit3, Trash2 } from "lucide-react";

export default function BarInventoryFeature() {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
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

        <div className="bg-white border-[6px] border-brand-text rounded-[32px] overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.1)] flex flex-col xl:flex-row">
          
          {/* Left panel - Insights */}
          <div className="xl:w-1/3 bg-gray-50 border-b xl:border-b-0 xl:border-r border-gray-200 p-8 flex flex-col">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Inventory Overview</h3>
            <p className="text-sm font-bold opacity-40 uppercase tracking-wider mb-8">Track stock levels, batches & ingredients</p>
            
            <div className="space-y-4 flex-1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center text-left cursor-pointer"
              >
                <div>
                  <p className="text-xs font-black uppercase opacity-40 mb-1">Total Stock Value</p>
                  <p className="text-2xl font-black text-brand-text">₹2,19,500</p>
                </div>
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                   <DollarSign size={20} />
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center text-left cursor-pointer"
              >
                <div>
                  <p className="text-xs font-black uppercase opacity-40 mb-1">Bottles in Stock</p>
                  <p className="text-2xl font-black tracking-tight">783.2 <span className="text-xs">Btls</span></p>
                </div>
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                   <Box size={20} />
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-red-100 flex justify-between items-center text-left cursor-pointer"
              >
                <div>
                  <p className="text-xs font-black uppercase opacity-40 text-red-500 mb-1">Critical Warnings</p>
                  <p className="text-2xl font-black text-red-500 tracking-tight">1 <span className="text-xs">Items Low</span></p>
                </div>
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                   <AlertTriangle size={20} />
                </div>
              </motion.div>
            </div>
            
            <button className="w-full mt-6 bg-[#ECA825] text-white py-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 shadow-lg shadow-orange-500/20 cursor-pointer transition-all active:scale-95">
              <Plus size={16} /> New Bar Product
            </button>
          </div>

          {/* Right panel - Interactive Mockup */}
          <div className="xl:w-2/3 p-4 md:p-8 bg-[#F9F9F9] relative overflow-hidden">
             
             {/* Sub Navigation */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0 relative z-10">
                <div className="flex bg-white p-1 rounded-xl w-fit shadow-sm border border-gray-100">
                  <button className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer text-gray-400 hover:text-gray-600">Raw Material Food</button>
                  <button className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer bg-black text-white shadow-sm">Bar Inventory</button>
                </div>
                
                <div className="flex gap-4 border-b border-gray-200 text-[10px] font-black uppercase tracking-widest overflow-x-auto w-full md:w-auto">
                  <button className="py-2 border-b-2 border-brand-text text-brand-text whitespace-nowrap">Liquid Management</button>
                  <button className="py-2 border-b-2 border-transparent text-gray-400 whitespace-nowrap">Insights & Analytics</button>
                </div>
             </div>

             {/* Search/Filter Bar */}
             <div className="flex flex-col sm:flex-row gap-3 mb-8 shrink-0 relative z-10">
                <div className="flex-1 bg-white border border-gray-200 rounded-xl flex items-center px-4 py-3 shadow-sm min-w-0">
                  <Search size={16} className="text-gray-400 shrink-0" />
                  <input readOnly type="text" value="Search brand, category, mixers..." className="w-full text-xs font-bold outline-none px-3 bg-transparent text-gray-400 truncate" />
                </div>
                <div className="flex gap-2">
                  <div className="bg-white border border-gray-200 rounded-xl p-1 flex items-center shadow-sm h-full">
                    <button className="bg-black text-white px-4 py-1.5 text-[10px] font-black uppercase rounded-lg">All</button>
                    <button className="text-gray-500 px-4 py-1.5 text-[10px] font-black uppercase">Healthy</button>
                    <button className="text-gray-500 px-4 py-1.5 text-[10px] font-black uppercase">Low</button>
                  </div>
                </div>
             </div>

             {/* Dynamic Animated Cards container */}
             <div className="relative min-h-[350px] z-10">
                <AnimatePresence mode="popLayout">
                  {items.map((item, i) => (
                    i === activeItem && (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -30 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border-[3px] border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl absolute w-full left-0 top-0 origin-bottom"
                      >
                         <div className="flex justify-between items-start mb-6">
                            <div>
                               <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-2 block">{item.cat}</span>
                               <h4 className="text-xl md:text-2xl font-black uppercase text-brand-text leading-tight">{item.name}</h4>
                            </div>
                            <div className="text-right shrink-0 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                               <span className={`inline-block px-3 py-1 rounded text-[10px] font-black uppercase mb-2 ${item.status === 'LOW STOCK' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'}`}>{item.status}</span>
                               <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Bottle Cost</p>
                               <p className="text-sm font-black text-emerald-600">{item.costMl}</p>
                            </div>
                         </div>

                         <div className="flex justify-between bg-gray-50/50 rounded-2xl p-3 sm:p-4 border border-gray-100 mb-6 gap-2 sm:gap-0">
                            <div className="text-center w-1/3">
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">Stock Qty</p>
                              <p className="text-lg sm:text-2xl font-black text-brand-text truncate">{item.stockQty} <span className="text-[10px] sm:text-xs text-gray-500">Btls</span></p>
                              <p className="text-[10px] text-gray-500 font-bold tracking-wider">{item.stockDesc}</p>
                            </div>
                            <div className="text-center w-1/3 border-l border-r border-gray-200 px-1 sm:px-4 shrink min-w-0">
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">Volume</p>
                              <p className="text-lg sm:text-2xl font-black text-orange-500 truncate">{item.volume} <span className="text-[10px] sm:text-xs">ML</span></p>
                              <p className="text-[10px] text-gray-500 font-bold tracking-wider">Size: {item.size}</p>
                            </div>
                            <div className="text-center w-1/3">
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">Net Value</p>
                              <p className="text-lg sm:text-2xl font-black text-brand-primary truncate">₹{item.netValue}</p>
                              <p className="text-[10px] text-gray-500 font-bold tracking-wider">Valuation</p>
                            </div>
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

                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                         </div>
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
