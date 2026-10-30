import React from 'react';
import ScrollReveal from './ScrollReveal';
import { projectPhotos } from '../data/projects';

const ProjectGallery = () => (
  <section id="gallery" className="py-24 bg-[#0e1218] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      
      <ScrollReveal>
        <div className="mb-12">
          <p className="text-sky-400 font-black tracking-[0.3em] text-[10px] uppercase mb-1">W.E. GENERAL CONSTRUCTION</p>
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-white tracking-tight">Featured Projects</h3>
          <p className="text-slate-400 text-xs font-medium mt-1">A selection of our patios, walkways, masonry, and stonework.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectPhotos.map((img, i) => (
          <ScrollReveal key={i} delay={["", "delay-100", "delay-200"][i % 3]}>
            <article className="group h-full overflow-hidden border border-white/5 bg-[#171d26] shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img src={img.src} alt={img.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 border border-sky-400/20 bg-[#11141a]/90 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-sky-400">
                  {img.label}
                </span>
              </div>
              <div className="border-t border-white/5 p-4">
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">{img.title}</h4>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
);

export default ProjectGallery;