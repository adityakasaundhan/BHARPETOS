import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: scrolled ? 64 : 80,
        backgroundColor: scrolled ? "rgba(228, 226, 221, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(30, 30, 30, 0.1)" : "1px solid transparent"
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 transition-all"
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Logo 
          size={36} 
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <div className="hidden md:flex gap-10 font-bold text-xs tracking-widest">
          {["FEATURES", "PRODUCTS", "PRICING", "ABOUT"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition-colors hover:text-brand-primary"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-text text-white px-6 py-2.5 rounded-none font-bold text-xs uppercase tracking-widest border-r-4 border-b-4 border-brand-primary/30 hover:bg-brand-primary transition-all"
        >
          GET CONTROL
        </motion.button>
      </div>
    </motion.nav>
  );
}
