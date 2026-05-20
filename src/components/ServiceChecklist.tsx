import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

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

export default function ServiceChecklist() {
  return (
    <section className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Included Services */}
          <div>
            <div className="flex items-center gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
              <span className="w-8 h-[2px] bg-brand-primary"></span>
              All-In-One Solution
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-12">
              Everything <br /> You Need.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 p-4 border-2 border-brand-text/10 hover:border-brand-primary transition-colors bg-white/50"
                >
                  <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
                  <span className="font-bold text-sm uppercase tracking-tight">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why BharpetOS */}
          <div className="lg:pt-24 text-right">
            <div className="flex items-center justify-end gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
              Why BharpetOS?
              <span className="w-8 h-[2px] bg-brand-primary"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-12">
              The Edge <br /> We Provide.
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-4 p-6 border-4 border-brand-text bg-brand-energy translate-x-0 hover:-translate-x-2 transition-transform shadow-[8px_8px_0px_#1E1E1E]"
                >
                  <span className="text-2xl font-black uppercase tracking-tighter italic">{reason}</span>
                  <div className="w-8 h-8 bg-brand-text flex items-center justify-center">
                    <span className="text-brand-energy font-black">✓</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
