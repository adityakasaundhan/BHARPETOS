import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CreditCard, 
  Utensils, 
  Users, 
  Package, 
  ChevronRight, 
  Plus, 
  Search,
  ShoppingCart,
  Clock,
  CheckCircle2,
  Activity
} from "lucide-react";

const MODULES = [
  { id: 'pos', name: 'POS Billing', icon: CreditCard, color: 'bg-orange-500' },
  { id: 'kitchen', name: 'Kitchen Feed', icon: Utensils, color: 'bg-blue-500' },
  { id: 'inventory', name: 'Inventory', icon: Package, color: 'bg-green-500' },
  { id: 'staff', name: 'Staff & Salary', icon: Users, color: 'bg-purple-500' },
];

export default function SystemShowcase() {
  const [activeTab, setActiveTab] = useState('pos');

  return (
    <section className="py-32 px-6 bg-brand-text text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
              A Complete <br />
              <span className="text-brand-primary italic">Ecosystem.</span>
            </h2>
            
            <div className="space-y-4">
              {MODULES.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  className={`w-full group text-left p-6 border-2 transition-all flex items-center justify-between ${
                    activeTab === mod.id 
                    ? 'border-brand-primary bg-brand-primary text-white scale-105' 
                    : 'border-white/10 hover:border-white/30 text-white/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <mod.icon size={24} />
                    <span className="text-2xl font-black uppercase tracking-tighter">{mod.name}</span>
                  </div>
                  <ChevronRight className={`transition-transform ${activeTab === mod.id ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
            
            <p className="pt-12 text-white/40 text-sm font-bold uppercase tracking-widest max-w-xs">
              Every pixel refined. <br />Every workflow optimized. <br />Made for the chaos of hospitality.
            </p>
          </div>

          {/* Right: The Mockup */}
          <div className="lg:col-span-8 bg-white text-brand-text rounded-2xl md:rounded-3xl p-1 md:p-6 shadow-[0px_40px_100px_rgba(0,0,0,0.4)] border-4 md:border-8 border-white/5 relative h-[560px] md:h-[600px] overflow-hidden">
             <AnimatePresence mode="wait">
                {activeTab === 'pos' && <POSMockup key="pos" />}
                {activeTab === 'kitchen' && <KitchenMockup key="kitchen" />}
                {activeTab === 'inventory' && <InventoryMockup key="inventory" />}
                {activeTab === 'staff' && <StaffMockup key="staff" />}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Sparkles, Receipt, Trash2, HelpCircle } from "lucide-react";

interface CartItem {
  id: string;
  n: string;
  qty: number;
  p: number; // selling price
  c: number; // cost price
}

function POSMockup() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', n: 'PANEER TIKKA MASALA', qty: 1, p: 310, c: 110 },
    { id: '2', n: 'MISSE ROTI', qty: 2, p: 45, c: 12 }
  ]);
  const [mobileSubTab, setMobileSubTab] = useState<'menu' | 'cart' | 'tools'>('menu');

  const menuItems = [
    { id: '1', n: 'PANEER TIKKA MASALA', p: 310, c: 110, s: 'Full/Half', cat: 'Main Course' },
    { id: '2', n: 'MISSE ROTI', p: 45, c: 12, s: 'Add Full', cat: 'Bread' },
    { id: '3', n: 'GULAB JAMUN', p: 50, c: 15, s: 'Add Full', cat: 'Dessert' },
    { id: '4', n: 'BUTTER TANDOORI ROTI', p: 25, c: 6, s: 'Add Full', cat: 'Bread' }
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, n: item.n, qty: 1, p: item.p, c: item.c }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(i => i.qty > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.p * item.qty), 0);
  const totalCost = cart.reduce((sum, item) => sum + (item.c * item.qty), 0);
  const profit = subtotal - totalCost;
  const marginPercentage = subtotal > 0 ? Math.round((profit / subtotal) * 100) : 0;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="h-full flex flex-col bg-[#F7F7F7] overflow-hidden"
    >
      <div className="bg-white p-3 md:p-4 border-b flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 md:gap-4 shrink-0">
        <div className="flex items-center gap-2 md:grid-cols-2">
          <div className="w-8 h-8 rounded-full bg-brand-text flex items-center justify-center text-white text-[10px] font-black shrink-0">B</div>
          <div>
            <span className="font-black text-[10px] md:text-xs uppercase tracking-tighter block leading-none">Royal Orchid Dine-in</span>
            <span className="text-[7px] md:text-[8px] font-bold text-emerald-600">TABLE 04 • WORKING SESSION</span>
          </div>
          <span className="bg-orange-500 text-white text-[7px] md:text-[8px] px-1.5 py-0.5 rounded font-black shrink-0">PRO PLAN</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 self-end xs:self-auto">
          <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <div className="text-[8.5px] md:text-[10px] font-bold opacity-50">Margins live</div>
        </div>
      </div>

      {/* Mobile Sub-tab switcher */}
      <div className="flex md:hidden bg-white border-b shrink-0 text-[10px] font-black uppercase shadow-xs">
        <button 
          onClick={() => setMobileSubTab('menu')}
          className={`flex-1 py-2.5 text-center transition-all ${mobileSubTab === 'menu' ? 'border-b-4 border-brand-primary text-brand-primary bg-brand-primary/5' : 'text-gray-500'}`}
        >
          🍔 Menu
        </button>
        <button 
          onClick={() => setMobileSubTab('cart')}
          className={`flex-1 py-2.5 text-center transition-all ${mobileSubTab === 'cart' ? 'border-b-4 border-brand-primary text-brand-primary bg-brand-primary/5' : 'text-gray-500'}`}
        >
          🛒 Cart ({cart.reduce((s, i) => s + i.qty, 0)})
        </button>
        <button 
          onClick={() => setMobileSubTab('tools')}
          className={`flex-1 py-2.5 text-center transition-all ${mobileSubTab === 'tools' ? 'border-b-4 border-brand-primary text-brand-primary bg-brand-primary/5' : 'text-gray-500'}`}
        >
          🔧 Admin
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Actions & Integrations */}
        <div className={`w-full md:w-44 bg-brand-text text-white p-3 space-y-3 shrink-0 flex-col justify-between ${mobileSubTab === 'tools' ? 'flex' : 'hidden md:flex'}`}>
           <div className="space-y-2">
             <p className="text-[9px] font-black text-brand-primary/80 uppercase px-2">Operator Panel</p>
             {[
               { name: 'POS Billing', active: true },
               { name: 'Live Orders', active: false },
               { name: 'Table Margins', active: false },
               { name: 'Raw Cost Audit', active: false }
             ].map((item) => (
               <div 
                 key={item.name} 
                 className={`p-2 rounded text-[9px] font-black uppercase tracking-wider cursor-pointer transition-colors ${
                   item.active 
                     ? 'bg-brand-primary text-white border-l-4 border-brand-primary' 
                     : 'opacity-50 hover:bg-white/5 hover:opacity-100'
                 }`}
               >
                  {item.name}
               </div>
             ))}
           </div>
           
           <div className="p-2 border-2 border-dashed border-white/15 rounded bg-white/5 space-y-1">
             <span className="text-[8px] font-black opacity-40 uppercase block">Smart Forecast</span>
             <p className="text-[9px] font-bold leading-tight text-brand-energy">
               📉 High demand expected for Paneer tonight. Pre-prep suggested.
             </p>
           </div>
        </div>

        {/* Menu Items Grid for Billing */}
        <div className={`flex-grow p-4 md:p-5 overflow-y-auto bg-gray-50/50 ${mobileSubTab === 'menu' ? 'block' : 'hidden md:block'}`}>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-black text-xs uppercase tracking-wider text-brand-text/60">Tap to add:</h4>
            <span className="text-[8.5px] md:text-[10px] bg-brand-primary/10 text-brand-primary px-2 py-0.5 font-black uppercase rounded shrink-0">
              RATIOS ACTIVE
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-8">
            {menuItems.map((item) => {
              const profitMarginRatio = Math.round(((item.p - item.c) / item.p) * 100);
              return (
                <div 
                  key={item.id} 
                  onClick={() => addToCart(item)}
                  className="bg-white p-3 md:p-4 rounded-xl border border-brand-text/5 hover:border-brand-primary hover:shadow-md cursor-pointer transition-all dynamic-hover select-none group relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-emerald-50 text-emerald-700 text-[8px] px-1.5 py-0.5 font-black uppercase rounded">
                      ₹{item.p}
                    </span>
                    <span className="text-[8px] text-gray-400 font-bold group-hover:text-brand-primary transition-colors">
                      {item.cat}
                    </span>
                  </div>
                  <h4 className="font-black text-[10px] md:text-xxs tracking-normal uppercase text-brand-text line-clamp-1 group-hover:text-brand-primary transition-colors mb-2">
                    {item.n}
                  </h4>
                  <div className="flex justify-between items-center pt-2 border-t border-brand-text/5">
                    <span className="text-[8px] text-gray-400 font-semibold uppercase">Cost: ₹{item.c}</span>
                    <span className="text-[9px] text-emerald-600 font-black">+{profitMarginRatio}% profit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Cart Sidebar with Real-time Profit Tracking */}
        <div className={`w-full md:w-72 bg-white border-l p-4 flex-col justify-between shrink-0 ${mobileSubTab === 'cart' ? 'flex' : 'hidden md:flex'}`}>
           <div className="flex-grow overflow-y-auto max-h-[290px] md:max-h-none">
             <div className="flex justify-between items-center border-b pb-3 mb-3">
                <span className="text-[10px] font-black text-brand-primary pb-1 flex items-center gap-1">
                  <Receipt size={12} /> ACTIVE CART ({cart.reduce((s, i) => s + i.qty, 0)})
                </span>
                <button 
                  onClick={() => setCart([])} 
                  className="text-[9px] font-black text-red-500 hover:underline uppercase"
                >
                  Clear
                </button>
             </div>

             {cart.length === 0 ? (
               <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingCart size={32} className="text-gray-400 animate-pulse mb-3" />
                  <p className="text-[9px] font-black uppercase tracking-tight">Your Cart is Empty</p>
                  <p className="text-[8px] text-gray-400 mt-1 max-w-[150px]">Click menu cards to build an order and analyze live operations</p>
               </div>
             ) : (
               <div className="space-y-2 max-h-[160px] md:max-h-[220px] overflow-y-auto pr-1">
                 {cart.map((item) => {
                   const itemProfit = (item.p - item.c) * item.qty;
                   const itemMargin = Math.round((itemProfit / (item.p * item.qty)) * 100);
                   return (
                     <div key={item.id} className="p-2 border border-brand-text/5 bg-gray-50/50 rounded flex items-center justify-between group">
                       <div className="flex-1 pr-2">
                         <h5 className="font-black text-[9px] text-brand-text leading-tight uppercase line-clamp-1">{item.n}</h5>
                         <div className="flex items-center gap-2 mt-1">
                           <span className="text-[8px] bg-white border px-1 rounded font-bold">Qty: {item.qty}</span>
                           <span className="text-[8px] text-gray-400">Cost: ₹{item.c * item.qty} ({itemMargin}%)</span>
                         </div>
                       </div>
                       
                       <div className="text-right shrink-0 flex items-center gap-2">
                         <div>
                           <p className="font-black text-[10px] text-brand-text">₹{item.p * item.qty}</p>
                           <p className="text-[7.5px] font-extrabold text-emerald-600">Profit: +₹{itemProfit}</p>
                         </div>
                         <div className="flex flex-col gap-1">
                           <button 
                             onClick={() => updateQty(item.id, 1)} 
                             className="text-gray-400 hover:text-brand-text font-black text-[10px] w-4 h-4 rounded bg-white border flex items-center justify-center shadow-xs cursor-pointer"
                           >
                             +
                           </button>
                           <button 
                             onClick={() => updateQty(item.id, -1)} 
                             className="text-gray-400 hover:text-brand-text font-black text-[10px] w-4 h-4 rounded bg-white border flex items-center justify-center shadow-xs cursor-pointer"
                           >
                             -
                           </button>
                         </div>
                       </div>
                     </div>
                   );
                 })}
               </div>
             )}
           </div>

           {/* Total Profit Margins Widget - The CORE Value Proposition */}
           <div className="border-t pt-3 mt-3 space-y-2 bg-white shrink-0">
              <div className="space-y-1 bg-brand-bg/25 p-2 rounded border border-brand-text/5">
                 <div className="flex justify-between text-[8px] font-black uppercase text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-brand-text">₹{subtotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between text-[8px] font-black uppercase text-gray-500">
                    <span>Ingredients Cost</span>
                    <span className="font-bold text-red-600">₹{totalCost.toFixed(2)}</span>
                 </div>
                 
                 {cart.length > 0 && (
                   <div className="pt-1.5 border-t border-brand-text/5 flex justify-between items-center font-sans">
                      <span className="text-[8px] font-black uppercase text-emerald-700 flex items-center gap-0.5">
                        <TrendingUp size={10} /> NET PROFIT (PROFIT-LOCK)
                      </span>
                      <span className="text-[11px] font-black text-emerald-700">₹{profit.toFixed(2)}</span>
                   </div>
                 )}
              </div>

              {cart.length > 0 && (
                <div className="bg-emerald-600 text-white p-2 text-center rounded text-[10px] font-black tracking-wider uppercase flex justify-between items-center font-sans">
                  <span>GROSS LIVE MARGIN:</span>
                  <span className="bg-white text-emerald-700 px-1.5 py-0.5 rounded text-[9px] font-black font-mono">
                    {marginPercentage}%
                  </span>
                </div>
              )}

              <button 
                disabled={cart.length === 0}
                className={`w-full py-2.5 rounded-lg font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  cart.length > 0 
                    ? 'bg-brand-primary text-white hover:bg-opacity-95' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                 <Sparkles size={11} className={cart.length > 0 ? 'animate-pulse' : ''} />
                 DEDUCT & ROUTE KOT
              </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

function KitchenMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full bg-[#EFEFEF] flex flex-col"
    >
      <div className="bg-white p-3 md:p-4 border-b flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center shrink-0">
        <div>
          <h3 className="text-sm font-black uppercase tracking-tighter">Live KOT Kitchen Grid</h3>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Waiter App Sync Active • 100% orders routed</p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          <span className="text-[8px] font-black bg-blue-100 text-blue-800 px-2 py-1 rounded uppercase">
            Orders pending: 1
          </span>
          <span className="text-[8px] font-black bg-emerald-100 text-emerald-800 px-2 py-1 rounded uppercase">
            Active Cooks: 3
          </span>
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex-1 overflow-y-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-primary"
        >
           <div className="bg-brand-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black text-xs">T-04</div>
                <div>
                  <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">ORD-7IR65 • Dine-in</p>
                  <p className="text-[9px] font-bold bg-white/20 inline-block px-1.5 py-0.5 rounded uppercase">Routed by: Waiter Ashish</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold opacity-60">EST. PREP</p>
                <p className="text-xs font-black text-[#ECA825]">12 MINUTES</p>
              </div>
           </div>
           
           <div className="p-5 space-y-4 text-brand-text">
              <div className="flex gap-3 group border-b pb-3 border-gray-100">
                 <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-black text-xs border border-brand-primary/20 shrink-0">2</div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h4 className="font-black text-xs uppercase text-brand-text">Paneer Tikka Masala (Half)</h4>
                       <span className="text-[8px] bg-[#ECA825]/20 text-[#183656] px-1.5 py-0.5 font-bold rounded uppercase">MEDIUM SPICY</span>
                    </div>
                    <p className="text-[9px] font-bold text-red-500 uppercase mt-1">⚠️ Preference: Make dry, add extra ginger strips</p>
                 </div>
              </div>
              
              <div className="flex gap-3 text-brand-text pb-2 border-b border-gray-100">
                 <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-black text-xs border shrink-0">3</div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h4 className="font-black text-xs uppercase">Misse Roti</h4>
                       <span className="text-[8px] text-emerald-600 font-bold uppercase">BUTTER SPREAD</span>
                    </div>
                 </div>
              </div>

              {/* Live Prep Status Metadata */}
              <div className="flex items-center justify-between text-[9px] bg-brand-bg/30 p-2.5 rounded border border-brand-text/5 font-mono">
                 <span className="font-bold opacity-50 uppercase">Ingredients Pre-Deducted</span>
                 <span className="font-black text-emerald-700">✓ 350g Paneer, 45g Ghee, Spices locked</span>
              </div>

              <button className="w-full bg-emerald-600 text-white rounded-xl py-3 mt-2 font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                 <Clock size={14} /> COMPLETE & NOTIFY WAITER
              </button>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function InventoryMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full bg-white flex flex-col overflow-hidden"
    >
      <div className="p-4 md:p-6 border-b flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center shrink-0">
        <div>
          <h3 className="text-sm md:text-xl font-black uppercase tracking-tighter">AI Inventory Consumption Core</h3>
          <p className="text-[8.5px] md:text-[10px] font-bold opacity-40 uppercase tracking-wider">Auto stock depletion based on POS & Waiter recipe billing</p>
        </div>
        <button className="bg-brand-text text-white px-4 py-1.5 rounded-xl font-black uppercase text-[9px] md:text-[10px] flex items-center gap-1.5 hover:bg-brand-primary transition-colors cursor-pointer shrink-0 self-end sm:self-auto">
           <Plus size={13} /> Manual Inward Adjust
        </button>
      </div>

      {/* High-level stock alerts */}
      <div className="px-4 md:px-6 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
         <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-primary shrink-0"><Package size={15} /></div>
            <div>
               <p className="text-[7.5px] font-black uppercase opacity-40">Total Raw Goods</p>
               <p className="text-sm md:text-md font-black leading-none">42 Items</p>
            </div>
         </div>
         <div className="p-2.5 bg-red-50 rounded-xl border border-red-100 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-red-500 shrink-0"><Activity size={15} /></div>
            <div>
               <p className="text-[7.5px] font-black uppercase opacity-40 text-red-500">Below Safety Limit</p>
               <p className="text-sm md:text-md font-black text-red-500 leading-none">1 Alert</p>
            </div>
         </div>
         <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-emerald-600 shrink-0"><CheckCircle2 size={15} /></div>
            <div>
               <p className="text-[7.5px] font-black uppercase opacity-40 text-emerald-600">Avg Food Waste Avoided</p>
               <p className="text-sm md:text-md font-black text-emerald-600 leading-none">14.2% / mo</p>
            </div>
         </div>
      </div>

      <div className="px-4 md:px-6 flex-1 overflow-auto mt-4 pb-8">
         <div className="min-w-[620px] md:min-w-0">
           <table className="w-full text-left">
              <thead className="border-b bg-gray-50/50">
                 <tr>
                    <th className="py-2 px-1 text-[8px] md:text-[8.5px] font-black uppercase opacity-45">Ingredient Name & Class</th>
                    <th className="py-2 px-1 text-[8px] md:text-[8.5px] font-black uppercase opacity-45">Current Stock Level</th>
                    <th className="py-2 px-1 text-[8px] md:text-[8.5px] font-black uppercase opacity-45">Predicted depletion</th>
                    <th className="py-2 px-1 text-[8px] md:text-[8.5px] font-black uppercase opacity-45">Cost Trend & actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y text-brand-text">
                 {[
                   { 
                     n: 'FRESH PANNER (A-GRADE)', 
                     c: 'Masala & Dairy', 
                     s: '4.8 kg', 
                     status: 'CRITICAL LOW',
                     daysLeft: '0.8 Days Remaining',
                     waste: '2.1% loss', 
                     p: '₹320.00/kg',
                     trend: 'Rate stable (0.0%)'
                   },
                   { 
                     n: 'KASHMIRI MIRCH POWDER', 
                     c: 'Masala / Spices', 
                     s: '12.4 kg', 
                     status: 'HEALTHY',
                     daysLeft: '22 Days Remaining',
                     waste: '0.5% loss', 
                     p: '₹480.00/kg',
                     trend: 'Rate down -3.2% ↓'
                   },
                   { 
                     n: 'DESI GHEE (VERKA BRAND)', 
                     c: 'Commercial Cooking fats', 
                     s: '18.1 Ltr', 
                     status: 'HEALTHY',
                     daysLeft: '11 Days Remaining',
                     waste: '1.2% loss', 
                     p: '₹680/Ltr',
                     trend: 'Price Alert: High (+4.5% ↑)'
                   }
                 ].map((item, i) => (
                    <tr key={i} className="group hover:bg-gray-50/70 transition-colors">
                       <td className="py-2.5 px-1">
                          <p className="font-black text-xxs uppercase tracking-tight text-brand-text">{item.n}</p>
                          <p className="text-[7.5px] font-bold uppercase opacity-40">{item.c}</p>
                       </td>
                       <td className="py-2.5 px-1">
                          <div className="flex items-center gap-1.5">
                             <span className="font-black text-xs tracking-tight">{item.s}</span>
                             <span className={`text-[7px] font-black px-1 rounded uppercase ${
                               item.status === 'CRITICAL LOW' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-emerald-100 text-emerald-700'
                             }`}>
                               {item.status}
                             </span>
                          </div>
                       </td>
                       <td className="py-2.5 px-1">
                          <p className="text-xxs font-bold text-[#183656]">{item.daysLeft}</p>
                          <p className="text-[7.5px] font-black text-orange-500 uppercase">{item.waste} shrinkage</p>
                       </td>
                       <td className="py-2.5 px-1">
                          <div className="flex justify-between items-center pr-2">
                             <div>
                                <p className="text-[9px] font-black">{item.p}</p>
                                <p className={`text-[7px] font-bold ${item.trend.includes('down') ? 'text-emerald-600' : 'text-orange-500'}`}>{item.trend}</p>
                             </div>
                             <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                {item.status === 'CRITICAL LOW' ? (
                                  <button className="px-2 py-1 bg-brand-primary text-white text-[7.5px] font-black rounded uppercase cursor-pointer">
                                     Auto PO
                                  </button>
                                ) : (
                                  <button className="px-2 py-1 bg-gray-100 text-brand-text text-[7.5px] font-black rounded uppercase border hover:bg-gray-200 cursor-pointer">
                                     Audit
                                  </button>
                                )}
                             </div>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
              </div>
      </div>
    </motion.div>
  );
}

function StaffMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="h-full bg-[#F7F7F7] flex flex-col overflow-hidden"
    >
      <div className="p-4 md:p-6 bg-white border-b flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center shrink-0">
        <div>
          <h3 className="text-sm md:text-xl font-black uppercase tracking-tighter leading-none mb-1">Staff, Attendance & Incentives</h3>
          <p className="text-[8.5px] md:text-[10px] font-bold opacity-40 uppercase tracking-widest">Connect waiter performance to dynamic order commission rates</p>
        </div>
        <button className="bg-brand-text text-white px-4 py-1.5 rounded-xl font-black uppercase text-[9px] md:text-[10px] flex items-center gap-1.5 hover:bg-brand-primary transition-colors cursor-pointer shrink-0 self-end sm:self-auto">
           <Plus size={13} /> Onboard Staff
        </button>
      </div>

      <div className="p-4 md:p-6 flex-1 overflow-y-auto">
        <div className="flex flex-wrap gap-2 mb-4 shrink-0">
           {['Team Directory', 'Live Attendance', 'Sales Payout'].map((t, i) => (
             <button key={t} className={`px-3 py-1 text-[8.5px] font-black uppercase tracking-tight transition-colors cursor-pointer ${i === 0 ? 'bg-brand-text text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-100'}`}>
                {t}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 shrink-0">
           <div className="bg-white p-3 md:p-4 rounded-xl border border-brand-text/5 shadow-xs">
              <div className="flex items-center gap-1.5 mb-1.5 text-brand-primary">
                 <CreditCard size={13} />
                 <p className="text-[8px] font-black uppercase opacity-60">Total Active payroll</p>
              </div>
              <p className="text-base md:text-xl font-black tracking-tight">₹48,500.00 / mo</p>
              <p className="text-[7.5px] text-gray-400 font-bold uppercase mt-1">Next pay run: June 1st</p>
           </div>
           
           <div className="bg-white p-3 md:p-4 rounded-xl border border-brand-text/5 shadow-xs">
              <div className="flex items-center gap-1.5 mb-1.5 text-emerald-600">
                 <Users size={13} />
                 <p className="text-[8px] font-black uppercase opacity-60">Performance Incentives</p>
              </div>
              <p className="text-base md:text-xl font-black tracking-tight text-emerald-600">₹4,250.00 distributed</p>
              <p className="text-[7.5px] text-emerald-700 font-black uppercase mt-1">📈 Waiter commissions set at 0.5%</p>
           </div>
        </div>

        <motion.div 
           whileHover={{ y: -2 }}
           className="bg-white p-4 rounded-2xl border border-brand-text/5 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
         >
           <div className="flex items-center gap-3">
              <div className="w-11 h-11 md:w-14 md:h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-md md:text-xl font-black text-brand-primary border-2 border-brand-primary/20 shrink-0">A</div>
              <div>
                 <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="text-xs md:text-sm font-black uppercase text-brand-text leading-tight">Anvesha Roy</h4>
                    <span className="text-[7px] md:text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-black uppercase shrink-0">
                      Present (9:15 AM)
                    </span>
                 </div>
                 <p className="text-[8.5px] md:text-[9px] font-black text-[#183656] uppercase tracking-wider mt-0.5">Head Chef • Kitchen Admin</p>
                 
                 <div className="mt-2.5 flex items-center gap-3 text-[7.5px] md:text-[8.5px] font-bold opacity-45">
                    <span>✆ 7891234567</span>
                    <span>✉ Verified Chef Profile</span>
                 </div>
              </div>
           </div>
           <div className="text-left md:text-right w-full md:w-auto mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-150">
              <p className="text-[8px] font-black uppercase opacity-40 mb-1">Head Chef base salary</p>
              <p className="text-sm md:text-lg font-black text-brand-text">₹35,000.00</p>
              <p className="text-[7.5px] font-bold text-emerald-600 uppercase mt-1">No advance loans pending</p>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
