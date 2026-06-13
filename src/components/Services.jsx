import React from 'react';
import ScrollReveal from './ScrollReveal';

const services = [
  { num: "01", title: "Patios & Walkways", desc: "Custom stone, paver, and high-durability concrete layouts tailored for elegant home exteriors." },
  { num: "02", title: "Stone Walls & Steps", desc: "Structural masonry retaining walls, custom landscaping barriers, and pristine stone step craftsmanship." },
  { num: "03", title: "Masonry Construction", desc: "Master-level brick laying, custom stone layouts, and reinforced high-density block work built to last." },
  { num: "04", title: "Driveways & Wall Systems", desc: "Full grading preparation, deep foundation work, and structural concrete block wall systems." },
  { num: "05", title: "Stucco Application", desc: "Premium exterior protective stucco coatings providing clean, updated weatherproof styling." },
  { num: "06", title: "Professional Welding", desc: "Secure on-site structural framework adjustments, modifications, and custom metal fabrication work." },
];

const Services = () => (
  <section id="services" className="py-28 bg-transparent">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      
      {/* Front of Card Tagline Layout */}
      <ScrollReveal>
        <div className="max-w-3xl mb-20 border-l-4 border-sky-400 pl-5">
          <p className="text-sky-400 font-black tracking-[0.3em] text-[10px] uppercase mb-2">Wilmer Erraez • General Contractor</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
            "Give Us One Project, <br/>
            <span className="font-light text-slate-400 lowercase italic font-serif text-3xl md:text-5xl block mt-2">We'll earn the next."</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Capabilities Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const delayClass = ["", "delay-100", "delay-200"][i % 3];

          return (
            <ScrollReveal key={i} delay={delayClass}>
              <div className="card-panel p-8 flex flex-col justify-between min-h-[190px] h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono font-bold text-sky-400/40 tracking-widest">{s.num}</span>
                    <span className="text-[9px] font-bold text-slate-600 tracking-widest uppercase">W.E.</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    {s.desc}
                  </p>
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