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
      
      <ScrollReveal>
        <div className="mb-16 max-w-3xl">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">What we do</p>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">From the first stone to the finishing details, we bring care and craftsmanship to every project.</p>
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