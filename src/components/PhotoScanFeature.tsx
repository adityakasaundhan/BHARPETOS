import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, FileText, CheckCircle2, TrendingUp, AlertCircle, ShoppingBag, Landmark, ArrowRight } from "lucide-react";

interface ReceiptProduct {
  name: string;
  qty: string;
  price: number;
}

interface ReceiptData {
  id: string;
  title: string;
  merchant: string;
  date: string;
  total: number;
  category: "Kitchen Inventory" | "Utilities" | "Dairy Supplies";
  items: ReceiptProduct[];
  gstin?: string;
}

const sampleReceipts: ReceiptData[] = [
  {
    id: "rec-1",
    title: "Fresh Farm Vegetables Invoice",
    merchant: "Raju Wholesale Vegetable Mart",
    date: "May 20, 2026",
    total: 2450,
    category: "Kitchen Inventory",
    gstin: "07AAAAA1111A1Z1",
    items: [
      { name: "Bulk Onions (Grade A)", qty: "50 Kg", price: 1250 },
      { name: "Fresh Red Tomatoes", qty: "30 Kg", price: 900 },
      { name: "Starch-free Potatoes", qty: "15 Kg", price: 300 }
    ]
  },
  {
    id: "rec-2",
    title: "LPG Commercial Supply Receipt",
    merchant: "Indane Gas Agency Patel",
    date: "May 19, 2026",
    total: 3600,
    category: "Utilities",
    items: [
      { name: "Commercial LPG Cylinder ref.", qty: "2 Units", price: 3600 }
    ]
  },
  {
    id: "rec-3",
    title: "Premium Dairy Products Bill",
    merchant: "Guru Nanak Dairy & Paneer hub",
    date: "May 20, 2026",
    total: 5800,
    category: "Dairy Supplies",
    gstin: "09BBBBB2222B2Z2",
    items: [
      { name: "Fresh Hand-pressed Paneer", qty: "12 Kg", price: 4200 },
      { name: "Pure Unsalted Table Butter", qty: "4 Kg", price: 1600 }
    ]
  }
];

export default function PhotoScanFeature() {
  const [selectedReceipt, setSelectedReceipt] = useState<ReceiptData>(sampleReceipts[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scannedData, setScannedData] = useState<ReceiptData | null>(sampleReceipts[0]);
  const [dragActive, setDragActive] = useState(false);
  const [customFileSelected, setCustomFileSelected] = useState<string | null>(null);

  const startScan = (receipt: ReceiptData) => {
    setIsScanning(true);
    setScanProgress(0);
    setScannedData(null);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setScannedData(receipt);
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 80);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setCustomFileSelected(file.name);
      
      // Simulate dynamic scanned content for custom uploaded file
      const customReceipt: ReceiptData = {
        id: "custom",
        title: "Uploaded Document Scan",
        merchant: file.name.substring(0, 25).replace(/\.[^/.]+$/, ""),
        date: "Today (Auto Detected)",
        total: 1850,
        category: "Kitchen Inventory",
        items: [
          { name: "Parsed Item 01 (Verified)", qty: "1 unit", price: 1200 },
          { name: "Parsed Item 02 (Verified)", qty: "2 units", price: 650 }
        ]
      };
      setSelectedReceipt(customReceipt);
      startScan(customReceipt);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomFileSelected(file.name);

      const customReceipt: ReceiptData = {
        id: "custom",
        title: "Uploaded Document Scan",
        merchant: file.name.substring(0, 25).replace(/\.[^/.]+$/, ""),
        date: "Today (Auto Detected)",
        total: 1850,
        category: "Kitchen Inventory",
        items: [
          { name: "Parsed Item 01 (Verified)", qty: "2 Packs", price: 1100 },
          { name: "Parsed Item 02 (Verified)", qty: "1 Unit", price: 750 }
        ]
      };
      setSelectedReceipt(customReceipt);
      startScan(customReceipt);
    }
  };

  return (
    <section id="scanner" className="py-24 px-6 bg-brand-bg border-b-4 border-brand-text scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title with Custom Accent */}
        <div className="mb-20">
          <div className="flex items-center gap-4 text-brand-primary font-bold text-xs tracking-widest uppercase mb-6">
            <span className="w-8 h-[2px] bg-brand-primary"></span>
            Intelligence First Platform
          </div>
          <h2 className="text-4xl sm:text-6.5xl md:text-[85px] font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.8] mb-8 select-none">
            PHOTO SCAN TO <br />
            <span className="text-brand-primary italic">INVENTORY & EXPENSES</span>
          </h2>
          <p className="text-xl font-medium opacity-85 max-w-2xl leading-tight">
            Take a snap of any retail purchase receipt, raw item invoice, or utility bill. Our AI scanner auto-detects line items, calculates tax, boosts stock levels, and posts instant expense entries in your bookkeeping system.
          </p>
        </div>

        {/* Workspace Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Input / Receipt Simulator */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border-4 border-brand-text bg-white p-6 shadow-[8px_8px_0px_#1E1E1E]">
              <div className="mb-6 flex justify-between items-center border-b-2 border-brand-text/10 pb-4">
                <span className="text-xs font-black uppercase tracking-widest opacity-60">1. SELECT OR DROP INVOICE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              </div>

              {/* Sample Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {sampleReceipts.map((rec, i) => (
                  <button
                    key={rec.id}
                    onClick={() => {
                      setCustomFileSelected(null);
                      setSelectedReceipt(rec);
                      startScan(rec);
                    }}
                    className={`py-3 px-2 border-2 text-center text-xxs md:text-xs font-bold leading-tight uppercase transition-all ${
                      !customFileSelected && selectedReceipt.id === rec.id
                        ? "border-brand-text bg-brand-primary text-white"
                        : "border-brand-text/20 hover:border-brand-text"
                    }`}
                  >
                    Bill #{i + 1}
                  </button>
                ))}
              </div>

              {/* Interactive Drop area or live visualization */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className={`relative border-4 border-dashed p-8 text-center flex flex-col items-center justify-center transition-all min-h-[400px] overflow-hidden ${
                  dragActive ? "border-brand-primary bg-brand-primary/5" : "border-brand-text/20 bg-brand-bg/10"
                }`}
              >
                {/* Simulated Laser Scan Beam */}
                {isScanning && (
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-1 bg-brand-primary shadow-[0_0_15px_#DB4A2B] z-10"
                  />
                )}

                {/* Simulated receipt presentation */}
                <div className="w-full max-w-xs bg-white border-2 border-brand-text p-6 shadow-[4px_4px_0px_#1E1E1E] text-left relative font-mono text-xs text-brand-text">
                  <div className="absolute top-2 right-2 text-xxs bg-brand-text text-white px-1 py-0.5 uppercase tracking-widest scale-75 origin-top-right font-black">
                    REC-{selectedReceipt.id.toUpperCase()}
                  </div>
                  
                  <div className="text-center pb-4 border-b border-dashed border-brand-text/30">
                    <h4 className="font-black text-sm uppercase tracking-tighter mb-1">{selectedReceipt.merchant}</h4>
                    <p className="text-[10px] opacity-60">{selectedReceipt.date}</p>
                    {selectedReceipt.gstin && (
                      <p className="text-[9px] font-bold text-brand-primary mt-1">GSTIN: {selectedReceipt.gstin}</p>
                    )}
                  </div>

                  <div className="py-4 border-b border-dashed border-brand-text/30 space-y-2">
                    {selectedReceipt.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline relative">
                        {/* Highlights parsed during scan */}
                        {isScanning && scanProgress > idx * 30 && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute inset-y-0 -left-1 bg-brand-highlight/20 border-l border-brand-highlight z-0"
                          />
                        )}
                        <div className="relative z-10 font-bold shrink-0">{item.name}</div>
                        <div className="relative z-10 flex-grow border-b border-dotted border-brand-text/25 mx-2 min-w-[10px]"></div>
                        <div className="relative z-10 font-mono flex gap-4">
                          <span className="opacity-50">{item.qty}</span>
                          <span className="font-bold">₹{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center text-sm font-black uppercase">
                    <span>Total Amount</span>
                    <span>₹{selectedReceipt.total}</span>
                  </div>

                  {/* Stamp overlay */}
                  {!isScanning && scannedData && (
                    <motion.div
                      initial={{ scale: 2, opacity: 0, rotate: -25 }}
                      animate={{ scale: 1, opacity: 0.9, rotate: -15 }}
                      className="absolute bottom-16 right-4 py-1 px-4 border-4 border-green-600 text-green-600 font-extrabold text-base tracking-widest uppercase rounded select-none shadow-md backdrop-blur-sm"
                    >
                      AI PARSED
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  <div className="flex gap-4">
                    <label className="cursor-pointer bg-brand-text text-white px-4 py-2 text-xs font-black uppercase tracking-tight hover:bg-brand-primary transition-colors">
                      <input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleFileSelect} />
                      Upload Receipt
                    </label>
                    <button
                      onClick={() => startScan(selectedReceipt)}
                      disabled={isScanning}
                      className="bg-brand-energy border-2 border-brand-text text-brand-text px-4 py-2 text-xs font-black uppercase tracking-tight hover:bg-brand-text hover:text-white transition-all shadow-[2px_2px_0px_#1E1E1E]"
                    >
                      Trigger Scan
                    </button>
                  </div>
                  <p className="text-[10px] opacity-40 mt-1 uppercase font-black">Or drag and drop your photo invoice instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real-time Ledger Routing & System Output */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="border-4 border-brand-text bg-white p-8 shadow-[8px_8px_0px_#1E1E1E] min-h-[580px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b-2 border-brand-text/10 pb-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest opacity-60">2. LEDGER ROUTING INTERFACES</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping"></span>
                    <span className="font-display font-black text-xs uppercase tracking-tight text-brand-primary">
                      {isScanning ? `${Math.round(scanProgress)}% SCANNING` : "IDLE / SYNC READY"}
                    </span>
                  </div>
                </div>

                {/* Progress bar info */}
                {isScanning && (
                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-black uppercase tracking-tight mb-2">
                      <span>Analyzing receipt text blocks (OCR & NLP parsing)</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full bg-brand-bg h-4 border-2 border-brand-text relative overflow-hidden">
                      <motion.div
                        className="bg-brand-primary h-full"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {scannedData && !isScanning ? (
                    <motion.div
                      key={scannedData.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Live Ledger Category Indicator */}
                      <div className="p-4 bg-brand-bg/30 border-2 border-brand-text flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-wider opacity-50">AUTOMATIC BILL REGISTRATION</p>
                          <h4 className="text-xl font-black">{scannedData.merchant}</h4>
                        </div>
                        <span className="px-3 py-1 bg-brand-text text-white text-xs font-black uppercase tracking-widest">
                          {scannedData.category}
                        </span>
                      </div>

                      {/* Routed Inventory Card */}
                      <div className="border-2 border-brand-text bg-white shadow-[4px_4px_0px_#1E1E1E] p-5">
                        <div className="flex justify-between pb-3 border-b border-brand-text/10 mb-3 items-center">
                          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-tight text-brand-primary">
                            <ShoppingBag size={16} /> INTERNET INVENTORY AUTO-UPGRADE
                          </span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 font-bold uppercase rounded">
                            Approved Stock Boost
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          {scannedData.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm font-semibold text-brand-text">
                              <span>➕ Inward {item.name}</span>
                              <span className="font-bold underline text-brand-primary">+{item.qty} Stock Quantity</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Routed Expense Card */}
                      <div className="border-2 border-brand-text bg-white shadow-[4px_4px_0px_#1E1E1E] p-5">
                        <div className="flex justify-between pb-3 border-b border-brand-text/10 mb-3 items-center">
                          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-tight text-brand-primary">
                            <Landmark size={16} /> REAL-TIME EXPENSE REGISTER ENTRY
                          </span>
                          <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 font-bold uppercase rounded">
                            Logged Ledger Line
                          </span>
                        </div>
                        <div className="flex justify-between items-center bg-brand-bg/25 p-3 border border-brand-text/10">
                          <div>
                            <p className="font-bold text-xs uppercase opacity-75">Debit Led: {scannedData.category}</p>
                            <p className="text-xxs opacity-40">Date: {scannedData.date} • Mode: Bill Image Attach.</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black text-brand-primary">₹{scannedData.total}</p>
                            <p className="text-xxs opacity-40">GST included</p>
                          </div>
                        </div>
                      </div>

                      {/* AI recommendations */}
                      <div className="flex gap-4 p-4 border border-brand-primary/20 bg-brand-highlight/5 items-start">
                        <TrendingUp className="text-brand-primary shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-xs font-black uppercase text-brand-primary tracking-tight">AI Purchase Optimization Suggestion</p>
                          <p className="text-xs font-medium opacity-80 leading-relaxed mt-1">
                            Pricing for {scannedData.items[0]?.name || "inventory items"} is fluctuating. Stock is estimated to deplete in 6 days. Our auto-purchase forecast recommends staging next procurement order on Tuesday to leverage maximum local regional discounts.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-[350px] flex flex-col items-center justify-center text-center opacity-60">
                      <Camera size={48} className="text-brand-primary mb-4 animate-bounce" />
                      <p className="font-display font-black text-lg uppercase">System Awaiting Document Input Scan...</p>
                      <p className="text-xs max-w-sm mt-2 opacity-75">
                        Select a sample bill tab on the left or drop an image file to trigger immediate AI optical recognition parsing.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 flex justify-between items-center bg-brand-text text-white p-4 uppercase tracking-tighter text-xs font-black">
                <span>⚡ BharpetOS AI OCR Engine v3.2</span>
                <span>Active Link: Verified </span>
              </div>
            </div>
          </div>

        </div>

        {/* Informative Grid Segment specifying priority updates */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t-4 border-brand-text/10">
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
            <div>
              <h4 className="font-black text-lg uppercase tracking-tight">01. ZERO MANUAL WORK</h4>
              <p className="text-sm opacity-70 leading-normal mt-1">Eliminate manual ledger writing. Just snapshot raw material packets, vegetables, and daily dairy loads on reception.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
            <div>
              <h4 className="font-black text-lg uppercase tracking-tight">02. INSTANT EXPENSE CLASSIFICATION</h4>
              <p className="text-sm opacity-70 leading-normal mt-1">Receipt totals are automatically categorized and logged against your operating margins for perfect profit tracking.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
            <div>
              <h4 className="font-black text-lg uppercase tracking-tight">03. STOCK SYNCHRONIZATION</h4>
              <p className="text-sm opacity-70 leading-normal mt-1">Quantities instantly update ingredient counts and recipes, preventing ingredient stockouts or discrepancies.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
