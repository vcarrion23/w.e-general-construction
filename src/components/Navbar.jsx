import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Navbar = ({ onOpenQuote }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#11141a]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* Brand Architecture Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 overflow-hidden border border-sky-500/30 bg-[#171d26] p-0.5 transition-colors group-hover:border-sky-500">
            <img src={logoImg} alt="W.E. Logo" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight uppercase text-white leading-none">
              W.E. <span className="text-sky-400 font-light tracking-wide">GENERAL</span>
            </span>
            <span className="text-[7.5px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
              CONSTRUCTION
            </span>
          </div>
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex gap-10 items-center text-slate-300 font-semibold text-xs uppercase tracking-[0.2em]">
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-sky-400 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          <button onClick={onOpenQuote} className="border border-sky-500/30 bg-sky-500/10 text-sky-400 px-5 py-2 font-bold tracking-[0.15em] hover:bg-sky-400 hover:text-[#11141a] transition-all duration-300 cursor-pointer">
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Toggle Trigger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-400 hover:text-white p-1 cursor-pointer">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#11141a] border-b border-white/5 px-6 py-8 flex flex-col gap-5 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-slate-300 font-bold text-sm uppercase tracking-wider hover:text-sky-400">Our Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-slate-300 font-bold text-sm uppercase tracking-wider hover:text-sky-400">Project Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-300 font-bold text-sm uppercase tracking-wider hover:text-sky-400">Contact Channels</a>
          <div className="h-px bg-white/5 my-1" />
          <button 
            onClick={() => { setMenuOpen(false); onOpenQuote(); }}
            className="w-full bg-sky-500 text-[#11141a] text-center font-black py-3.5 text-xs uppercase tracking-widest cursor-pointer"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;