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
          <div className="lg:col-span-8 bg-white text-brand-text rounded-3xl p-4 md:p-8 shadow-[0px_40px_100px_rgba(0,0,0,0.4)] border-8 border-white/5 relative h-[600px] overflow-hidden">
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

function POSMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="h-full flex flex-col bg-[#F7F7F7]"
    >
      <div className="bg-white p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-text rounded-full" />
          <span className="font-black text-sm uppercase tracking-tighter">Royal Orchid Dine-in</span>
          <span className="bg-orange-500 text-white text-[8px] px-2 py-0.5 rounded font-black">PRO PLAN</span>
        </div>
        <div className="text-[10px] font-bold opacity-40">System Live • 10:34 am</div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-48 bg-brand-text text-white p-4 space-y-4">
           {['Dashboard', 'POS Billing', 'Live Orders', 'Menu', 'Tables', 'Inventory'].map((item, i) => (
             <div key={item} className={`p-2 rounded text-[10px] font-black uppercase tracking-widest cursor-pointer ${i === 1 ? 'bg-orange-500/20 text-orange-500 border-l-2 border-orange-500' : 'opacity-40'}`}>
                {item}
             </div>
           ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex gap-2 mb-8 bg-white p-2 border rounded-xl overflow-x-auto">
            {['All', 'Main Course', 'Bread', 'Dessert', 'Starter', 'Drink'].map(t => (
              <span key={t} className={`whitespace-nowrap px-4 py-2 text-[9px] font-black uppercase rounded-lg ${t === 'All' ? 'bg-orange-500 text-white' : 'bg-gray-50'}`}>
                {t}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: 'PANEER TIKKA MASALA', p: '₹310.00', s: 'Full/Half' },
              { n: 'MISSE ROTI', p: '₹45.00', s: 'Add Full' },
              { n: 'GULAB JAMUN', p: '₹30.00', s: 'Add Full' },
              { n: 'BUTTER TANDOORI ROTI', p: '₹20.00', s: 'Add Full' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border shadow-sm group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-black text-xs">{item.p}</span>
                </div>
                <h4 className="font-black text-sm uppercase mb-6 tracking-tight leading-none h-8">{item.n}</h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-100 text-orange-600 text-[8px] font-black py-2 rounded-lg uppercase">Add Full</button>
                  {item.s.includes('/') && <button className="flex-1 bg-orange-500 text-white text-[8px] font-black py-2 rounded-lg uppercase">Half</button>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cart Sidebar */}
        <div className="w-64 bg-white border-l p-4 flex flex-col">
           <div className="flex justify-between border-b pb-4 mb-4">
              <span className="text-[10px] font-black text-orange-500 border-b-2 border-orange-500 pb-1">CURRENT CART</span>
              <span className="text-[10px] font-black opacity-30">LIVE ORDERS</span>
           </div>
           <div className="flex-1 flex flex-col items-center justify-center opacity-10">
              <ShoppingCart size={48} />
              <p className="text-[10px] font-black uppercase mt-4">Cart is Empty</p>
           </div>
           <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-[10px] font-bold opacity-40">
                 <span>Subtotal</span>
                 <span>₹0.00</span>
              </div>
              <p className="text-xl font-black text-right">₹0.00</p>
              <button className="w-full bg-orange-200/50 text-orange-400 py-4 rounded-2xl font-black uppercase text-[10px] cursor-not-allowed">Place Order</button>
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
      <div className="bg-white p-4 border-b flex justify-between items-center">
        <h3 className="text-xl font-black uppercase tracking-tighter">Live Kitchen Feed</h3>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-20" />
          <input disabled placeholder="Search Order No..." className="bg-gray-100 rounded-xl pl-10 pr-4 py-2 text-[10px] border-none" />
        </div>
      </div>
      
      <div className="p-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500/20"
        >
           <div className="bg-orange-500 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-black">T-A</div>
                <div>
                  <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">ORD-7IR65</p>
                  <p className="text-xs font-bold bg-white/20 inline-block px-2 py-0.5 rounded uppercase">Pending</p>
                </div>
              </div>
           </div>
           <div className="p-6 space-y-6">
              <div className="flex gap-4 group">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-black text-xs border group-hover:bg-orange-50 transition-colors">2</div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h4 className="font-black text-xs uppercase">Paneer Tikka Masala (Half)</h4>
                       <span className="text-[10px] font-bold opacity-30">₹360.00</span>
                    </div>
                    <p className="text-[9px] font-black text-orange-500 uppercase mt-1">Half</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-black text-xs border">3</div>
                 <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h4 className="font-black text-xs uppercase">Misse Roti</h4>
                       <span className="text-[10px] font-bold opacity-30">₹135.00</span>
                    </div>
                 </div>
              </div>
              <button className="w-full bg-blue-500 text-white rounded-2xl py-5 mt-6 font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30">
                 <Clock size={16} /> Start Cooking
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
      className="h-full bg-white flex flex-col"
    >
      <div className="p-8 border-b flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter">Inventory Management</h3>
          <p className="text-sm font-bold opacity-40">Track your stock levels, ingredients and supplies.</p>
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-2xl font-black uppercase text-xs flex items-center gap-3">
           <Plus size={18} /> New Item
        </button>
      </div>

      <div className="p-8 flex gap-6">
         <div className="flex-1 p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500"><Package /></div>
            <div>
               <p className="text-[10px] font-black uppercase opacity-40">Total Items</p>
               <p className="text-4xl font-black">6</p>
            </div>
         </div>
         <div className="flex-1 p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-red-500"><Activity /></div>
            <div>
               <p className="text-[10px] font-black uppercase opacity-40 text-red-500">Low Stock</p>
               <p className="text-4xl font-black text-red-500">0</p>
            </div>
         </div>
      </div>

      <div className="px-8 flex-1 overflow-y-auto">
         <table className="w-full">
            <thead className="border-b text-left">
               <tr>
                  <th className="py-4 text-[10px] font-black uppercase opacity-30">Item Name</th>
                  <th className="py-4 text-[10px] font-black uppercase opacity-30">In Stock</th>
                  <th className="py-4 text-[10px] font-black uppercase opacity-30">Pricing</th>
                  <th className="py-4 text-[10px] font-black uppercase opacity-30">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y">
               {[
                 { n: 'HALDI', c: 'Masala', s: '9.95 kg', p: '₹20.00' },
                 { n: 'PANNER', c: 'Dairy', s: '48.2 kg', p: '₹320.00' },
                 { n: 'TOMATO', c: 'Vegetables', s: '25 kg', p: '₹20.00' }
               ].map((item, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                     <td className="py-6">
                        <p className="font-black text-sm uppercase">{item.n}</p>
                        <p className="text-[9px] font-black uppercase opacity-30">{item.c}</p>
                     </td>
                     <td className="py-6 font-black text-lg tracking-tighter">{item.s}</td>
                     <td className="py-6">
                        <p className="text-[10px] font-black">Buy:</p>
                        <p className="text-[10px] font-bold opacity-30">{item.p}</p>
                     </td>
                     <td className="py-6">
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="px-3 py-1 bg-green-100 text-green-600 text-[8px] font-black rounded uppercase">Stock In</button>
                           <button className="px-3 py-1 bg-red-100 text-red-600 text-[8px] font-black rounded uppercase">Stock Out</button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
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
      className="h-full bg-[#F7F7F7] flex flex-col"
    >
      <div className="p-8 bg-white border-b flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">Staff & Salary</h3>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Manage your team, track roles and monthly salaries.</p>
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-2xl font-black uppercase text-xs flex items-center gap-3">
           <Plus size={18} /> Add Staff
        </button>
      </div>

      <div className="p-8">
        <div className="flex gap-3 mb-10">
           {['Directory', 'Attendance', 'Salary'].map((t, i) => (
             <button key={t} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${i === 0 ? 'bg-black text-white' : 'border-2 border-gray-100'}`}>
                {t}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
           <div className="bg-white p-8 rounded-[40px] border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                 <CreditCard className="text-orange-500" size={20} />
                 <p className="text-[10px] font-black uppercase opacity-40">Monthly Payroll</p>
              </div>
              <p className="text-4xl font-black tracking-tighter">₹5,000.00</p>
           </div>
           <div className="bg-white p-8 rounded-[40px] border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                 <Users className="text-orange-500" size={20} />
                 <p className="text-[10px] font-black uppercase opacity-40">Active Team</p>
              </div>
              <p className="text-4xl font-black tracking-tighter">1 Members</p>
           </div>
        </div>

        <motion.div 
           whileHover={{ y: -4 }}
           className="bg-white p-10 rounded-[40px] border shadow-sm flex items-center justify-between"
        >
           <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-4xl font-black opacity-40">A</div>
              <div>
                 <h4 className="text-2xl font-black uppercase mb-1">Anvesha</h4>
                 <p className="text-xs font-black text-orange-500 uppercase tracking-widest">Chef</p>
                 
                 <div className="mt-6 flex flex-col gap-1 text-[10px] font-bold opacity-40">
                    <p>✆ 7891234567</p>
                    <p>✉ No email registered</p>
                 </div>
              </div>
           </div>
           <div className="text-right">
              <p className="text-[10px] font-black uppercase opacity-40 mb-2">Monthly Salary</p>
              <p className="text-3xl font-black">₹5,000.00</p>
              <p className="text-[8px] font-black opacity-30 uppercase mt-4">Joined 18/04/2026</p>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
