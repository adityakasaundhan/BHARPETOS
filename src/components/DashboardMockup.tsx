import { motion } from "motion/react";
import { Activity, ArrowUpRight, BarChart3, Clock, LayoutGrid, Package, Users, Wallet } from "lucide-react";

export default function DashboardMockup() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border-4 border-brand-text shadow-[32px_32px_0px_rgba(30,30,30,0.05)] rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b-2 border-brand-text/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-text rounded-full flex items-center justify-center text-white">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">bharpetOS Intelligence</h3>
                <p className="text-xs font-bold opacity-40 uppercase tracking-widest">• ENGINE V2.0 • REAL-TIME PROFIT SCAN</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white border-2 border-brand-text/10 p-3 rounded-xl flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-tight">Business Health Score</p>
                  <p className="text-xl font-black">84</p>
                </div>
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    className="h-full bg-brand-primary"
                  />
                </div>
              </div>
              
              <div className="bg-white border-2 border-brand-text/10 p-3 rounded-xl">
                <p className="text-[10px] font-black opacity-40 uppercase tracking-tight text-green-500">Growth</p>
                <p className="text-xl font-black text-green-500">+24.5% ↗</p>
              </div>
            </div>
          </div>

          {/* Main Sale Section */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-50/30">
            <div className="lg:col-span-2 bg-white border-2 border-brand-text/5 p-8 rounded-3xl shadow-sm">
              <p className="text-xs font-black opacity-40 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Wallet className="text-brand-energy" size={14} /> Net Daily Sale Revenue
              </p>
              <h4 className="text-7xl font-black mb-4">₹42,850.00</h4>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                <ArrowUpRight size={14} /> +12.4%
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white border-2 border-brand-text/5 p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-1">Orders Today</p>
                  <p className="text-3xl font-black">124</p>
                </div>
                <Users size={24} className="opacity-20" />
              </div>
              <div className="bg-white border-2 border-brand-text/5 p-6 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-1">Avg Order Value</p>
                  <p className="text-3xl font-black">₹345.50</p>
                </div>
                <Activity size={24} className="opacity-20 text-brand-primary" />
              </div>
            </div>
          </div>

          {/* Critical Rows */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-0">
            <div className="bg-white border-2 border-brand-text/5 p-6 rounded-2xl flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Wallet size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Unsettled Revenue</p>
                  <p className="text-xl font-black">₹2,150.00</p>
                  <p className="text-[10px] opacity-60">ACROSS 4 PENDING BILLS</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-wider">Collect Now</button>
            </div>
            
            <div className="bg-white border-2 border-brand-text/5 p-6 rounded-2xl flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Critical Stock Level</p>
                  <p className="text-xl font-black">67 Items</p>
                  <p className="text-[10px] text-orange-600 font-bold">BELOW MINIMUM THRESHOLD</p>
                </div>
              </div>
              <button className="bg-orange-600 text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-wider">Restock</button>
            </div>
          </div>

          {/* Grid of Stats */}
          <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50/50">
            {[
              { label: "Estimated Net Profit", val: "₹12,640.00", color: "bg-brand-primary/10", text: "text-brand-primary" },
              { label: "Total Daily Expense", val: "₹28,060.00", color: "bg-gray-100", text: "text-gray-400" },
              { label: "Real-time Food Cost", val: "28.4%", color: "bg-green-100", text: "text-green-600", status: "Healthy" },
              { label: "Table Occupancy", val: "18/24", color: "bg-green-100", text: "text-green-600", status: "Active" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border-2 border-brand-text/5 relative overflow-hidden group">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">{stat.label}</p>
                <p className="text-2xl font-black">{stat.val}</p>
                {stat.status && (
                  <div className={`mt-4 inline-block px-3 py-1 rounded-lg text-[9px] font-black uppercase text-white ${stat.text.includes('green') ? 'bg-green-600' : 'bg-brand-primary'}`}>
                    {stat.status}
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4 pt-0">
             <div className="bg-blue-700 text-white p-6 rounded-3xl relative overflow-hidden md:col-span-1">
                <p className="text-[10px] font-black uppercase opacity-60 mb-2">Lifetime Revenue</p>
                <p className="text-2xl font-black">₹8,42,150.00</p>
                <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-10">$</div>
             </div>
             
             {[
               { label: "Today's Orders", val: "124", icon: LayoutGrid },
               { label: "Total Volume", val: "1,420", icon: BarChart3 },
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-3xl border border-brand-text/5 flex flex-col justify-between">
                 <div>
                    <p className="text-[10px] font-black uppercase opacity-40 mb-1">{item.label}</p>
                    <p className="text-3xl font-black">{item.val}</p>
                 </div>
                 <item.icon className="opacity-10 self-end" size={24} />
               </div>
             ))}

             <div className="bg-brand-text text-white p-6 rounded-3xl flex flex-col justify-between">
                <p className="text-[10px] font-black uppercase opacity-40 mb-1">Avg Ticket Size</p>
                <p className="text-3xl font-black">₹345.50</p>
                <div className="flex items-center gap-2 text-[9px] font-black self-end text-brand-primary uppercase">
                   <Activity size={14} /> per transaction
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
