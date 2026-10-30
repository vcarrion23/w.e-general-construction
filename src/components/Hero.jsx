import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import stonewall from '../assets/stonewall.jpg';

const Hero = ({ onOpenQuote, onNavigate }) => {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#101418] py-32 md:py-36">
      <img
        src={stonewall}
        alt="Finished paver patio and stone retaining wall surrounding a pool"
        className="hero__background absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,14,18,0.35)_0%,rgba(10,14,18,0.55)_48%,rgba(10,14,18,0.78)_100%)]" />

      <div className="hero__content mx-auto w-full max-w-7xl px-6 text-center md:px-10">
        <p className="hero__intro mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-sky-300 md:mb-5 md:text-sm md:tracking-[0.3em]">
          W.E. General Construction · Hudson Valley
        </p>
        <h1 className="hero__title mx-auto max-w-5xl text-4xl font-extrabold uppercase leading-[1.06] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hardscape craftsmanship<br className="hidden sm:block" />
          <span className="text-sky-300">you can trust.</span>
        </h1>
        <p className="hero__description mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:mt-6 md:text-lg">
          Custom patios, walkways, stonework, and masonry, built with care for the place you call home.
        </p>
        <p className="hero__details mt-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-[10px] md:mt-5 md:text-xs md:tracking-[0.2em]">
          Licensed &amp; insured <span className="mx-2 text-sky-300">·</span> Hablamos español
        </p>
        <div className="hero__actions mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-9">
          <a
            href="#gallery"
            onClick={(event) => { event.preventDefault(); onNavigate('gallery'); }}
            className="inline-flex min-h-14 items-center justify-center gap-3 bg-sky-400 px-7 text-xs font-extrabold uppercase tracking-[0.15em] text-[#11141a] transition-colors hover:bg-white"
          >
            Explore our projects <ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={onOpenQuote}
            className="min-h-14 border border-white/60 bg-black/15 px-7 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#11141a]"
          >
            Request an estimate
          </button>
        </div>
        <a href="#services" onClick={(event) => { event.preventDefault(); onNavigate('services'); }} className="hero__scroll-link mx-auto mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white md:mt-10">
          Discover what we build <ArrowDown className="hero__scroll-icon" size={14} />
        </a>
      </div>
    </section>
  );
};

export default Hero;