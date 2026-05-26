import React from 'react';
import { HardHat, Home, Ruler, Shield, Drill, Truck, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  { num: "01", title: "General Contracting", icon: <HardHat />, desc: "Complete oversight and end-to-end site execution for commercial builds, framing upgrades, and custom developments." },
  { num: "02", title: "Residential Remodeling", icon: <Home />, desc: "Transforming high-end residential interiors with precise carpentry, structural additions, and custom finishes." },
  { num: "03", title: "Structural Repair", icon: <Ruler />, desc: "Expert foundation reinforcement, accurate leveling assessments, and load-bearing timber/steel frame replacement." },
  { num: "04", title: "Framing & Masonry", icon: <Shield />, desc: "Rigid wall framing structures, custom retaining setups, clean brickwork, and reinforced heavy concrete works." },
  { num: "05", title: "Finish Carpentry", icon: <Drill />, desc: "Bespoke fine trim adjustments, architectural millwork layout installation, and premium internal details." },
  { num: "06", title: "Site Prep & Excavation", icon: <Truck />, desc: "Full-scale utility trenching, professional layout grading, dirt work, and heavy machinery field operations." },
];

const Services = () => (
  <section id="services" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Animated Clean Header */}
      <ScrollReveal>
        <div className="max-w-3xl mb-24 border-l-4 border-blue-600 pl-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            BUILDING SPACES AND PLACES <br/>
            <span className="font-light text-slate-400 lowercase italic font-serif text-4xl md:text-5xl">with absolute integrity.</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Grid Matrix with Column Delay Mapping */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const delays = ["", "delay-100", "delay-200"];
          const delayClass = delays[i % 3];

          return (
            <ScrollReveal key={i} delay={delayClass}>
              <div className="steel-panel p-10 flex flex-col justify-between group cursor-pointer min-h-[310px] h-full">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono font-bold text-blue-500/50 tracking-widest">{s.num}</span>
                    <div className="text-blue-500/40 group-hover:text-blue-400 transition-colors">
                      {React.cloneElement(s.icon, { size: 20, strokeWidth: 1.5 })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-white">PROJECT METRICS</span>
                  <ArrowUpRight size={14} className="text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
      
    </div>
  </section>
);

export default Services;