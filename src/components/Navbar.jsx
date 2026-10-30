import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp';

const Navbar = ({ activePage, onNavigate, onOpenQuote }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 48);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <nav className={`site-nav fixed left-0 top-0 z-50 w-full ${isScrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#home" onClick={(event) => { event.preventDefault(); onNavigate('home'); setMenuOpen(false); }} className="site-nav__brand group" aria-label="W.E. General Construction home">
          <img src={logoImg} alt="W.E. General Construction" className="site-nav__logo" />
        </a>

        <div className={`site-nav__links flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200 md:gap-7 md:text-xs ${isScrolled ? 'site-nav__links--visible' : ''}`}>
          {[
            ['home', 'Home'],
            ['services', 'Services'],
            ['gallery', 'Gallery'],
            ['contact', 'Contact Us'],
          ].map(([page, label]) => (
            <a
              key={page}
              href={`#${page}`}
              aria-current={activePage === page ? 'page' : undefined}
              onClick={(event) => { event.preventDefault(); onNavigate(page); setMenuOpen(false); }}
              className={`site-nav__link transition-colors hover:text-sky-300 ${activePage === page ? 'site-nav__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
          <button onClick={onOpenQuote} className="site-nav__quote cursor-pointer border border-sky-400/50 bg-sky-400 font-bold tracking-[0.12em] text-[#11141a] transition-colors hover:bg-white">
            GET A QUOTE
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="site-nav__menu-button cursor-pointer p-2 text-white transition-colors hover:text-sky-300 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#11141a] px-6 py-8 shadow-2xl md:hidden">
          {[
            ['home', 'Home'],
            ['services', 'Services'],
            ['gallery', 'Gallery'],
            ['contact', 'Contact Us & Reviews'],
          ].map(([page, label]) => (
            <a
              key={page}
              href={`#${page}`}
              onClick={(event) => { event.preventDefault(); onNavigate(page); setMenuOpen(false); }}
              className={`text-sm font-bold uppercase tracking-wider hover:text-sky-300 ${activePage === page ? 'text-sky-300' : 'text-slate-200'}`}
            >
              {label}
            </a>
          ))}
          <div className="h-px bg-white/5 my-1" />
          <button 
            onClick={() => { setMenuOpen(false); onOpenQuote(); }}
            className="w-full cursor-pointer bg-sky-400 py-3.5 text-center text-xs font-black uppercase tracking-widest text-[#11141a]"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;