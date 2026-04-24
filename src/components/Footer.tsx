import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-brand-text text-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-sm">
            <h3 className="text-4xl font-display mb-4">BHARPETOS®</h3>
            <p className="text-lg opacity-60 mb-8">
              The next-generation operating system for the modern restaurant. 
              Designed for speed. Born in Bengaluru.
            </p>
            <div className="p-6 border-2 border-brand-bg/20 bg-brand-bg/5 hover:border-brand-primary transition-colors">
              <p className="text-xs font-black uppercase tracking-widest text-brand-highlight mb-4">Crafted By</p>
              <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">Forge Eternal Tech</h4>
              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold">Leadership</p>
                  <p className="text-sm font-bold">Aditya Kasaundhan (CEO)</p>
                  <p className="text-sm font-bold">Aditya Pratap Singh Rathour (CTO)</p>
                </div>
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold">Direct Line</p>
                  <p className="text-sm font-bold">+91 9511421803</p>
                  <p className="text-sm font-bold">+91 8004262191</p>
                </div>
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold">Inquiries</p>
                  <p className="text-sm font-bold">eternalsforge@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <p className="font-bold mb-6 text-brand-highlight">FOLLOW</p>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/eternalforgetech?utm_source=qr&igsh=MTByaHUzZ3kxd2k5OA==" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold tracking-widest text-brand-bg/50 uppercase">
          <div>© 2026 BharpetOS Inc. — Mumbai, IN</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="https://www.instagram.com/eternalforgetech?utm_source=qr&igsh=MTByaHUzZ3kxd2k5OA==" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Twitter/X</a>
            <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
