import React from 'react';
import logoImg from '../assets/logo.jpg';

const Navbar = ({ onOpenQuote }) => (
  <nav className="fixed w-full top-0 left-0 z-50 bg-[#040914]/90 backdrop-blur-xl border-b border-blue-500/10 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
      
      {/* Brand Cluster */}
      <a href="#" className="flex items-center gap-4 group">
        <div className="w-12 h-12 overflow-hidden border border-blue-500/20 bg-[#091326] p-0.5 transition-colors group-hover:border-blue-500">
          <img src={logoImg} alt="W.E. Logo" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tight uppercase text-white leading-none">
            W.E. <span className="text-blue-500 font-light tracking-wide">GENERAL</span>
          </span>
          <span className="text-[8px] font-bold text-slate-500 tracking-[0.3em] uppercase mt-1">
            CONSTRUCTION
          </span>
        </div>
      </a>

      {/* Navigation Options */}
      <div className="hidden md:flex gap-12 items-center text-slate-300 font-semibold text-xs uppercase tracking-[0.2em]">
        <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        <button 
          onClick={onOpenQuote}
          className="border border-blue-500/30 bg-blue-500/10 text-blue-400 px-6 py-2.5 font-bold tracking-[0.15em] hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.1)] cursor-pointer"
        >
          GET A QUOTE
        </button>
      </div>
      
    </div>
  </nav>
);

export default Navbar;