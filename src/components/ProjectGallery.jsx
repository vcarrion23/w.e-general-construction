import React from 'react';
import ScrollReveal from './ScrollReveal';

// 1. Precise Asset Import Mapping from your assets directory
import driveway from '../assets/driveway.jpg';
import masonry from '../assets/masonry.jpg';
import masonry2 from '../assets/masonry2.jpg';
import patio from '../assets/patio.jpeg'; // Note: .jpeg extension
import patio2 from '../assets/patio2.jpg';
import patio3 from '../assets/patio3.jpg';
import steps from '../assets/steps.jpg';
import steps2 from '../assets/steps2.jpg';
import stonewall from '../assets/stonewall.jpg';
import walkways from '../assets/walkways.jpeg'; // Note: .jpeg extension

// 2. Comprehensive Project Data Matrix matching your exact files
const projectPhotos = [
  { title: "Premium Paver Driveway Installation", label: "Driveways", src: driveway },
  { title: "Custom Stone Walkway Layout", label: "Walkways", src: walkways },
  { title: "High-End Backyard Patio Space", label: "Patios", src: patio },
  { title: "Custom Stone Wall & Outdoor Stairs", label: "Stone Walls & Steps", src: steps },
  { title: "Structural Stone Retaining Wall", label: "Stone Walls", src: stonewall },
  { title: "Architectural Brick Masonry Design", label: "Masonry Construction", src: masonry },
  { title: "Precision Concrete Stone Stairs", label: "Steps", src: steps2 },
  { title: "Premium Flagstone Patio Layering", label: "Patios", src: patio2 },
  { title: "Reinforced Structural Masonry Blocks", label: "Masonry Construction", src: masonry2 },
  { title: "Custom Natural Stone Patio Border", label: "Patios", src: patio3 },
];

const ProjectGallery = () => (
  <section id="gallery" className="py-24 bg-[#0e1218] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      
      <ScrollReveal>
        <div className="mb-12">
          <p className="text-sky-400 font-black tracking-[0.3em] text-[10px] uppercase mb-1">PROVEN RESULTS</p>
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-white tracking-tight">Project Showcase</h3>
          <p className="text-slate-400 text-xs font-medium mt-1">Swipe or scroll horizontally to explore recently completed field operations.</p>
        </div>
      </ScrollReveal>

      {/* Horizontal fluid swipe track engine tailored for mobile displays */}
      <div className="flex gap-5 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
        {projectPhotos.map((img, i) => (
          <div key={i} className="snap-start shrink-0 w-[290px] sm:w-[360px] bg-[#171d26] border border-white/5 overflow-hidden group shadow-lg">
            <div className="relative h-[220px] bg-slate-900 overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-[#11141a]/90 text-sky-400 border border-sky-400/20 text-[9px] font-black tracking-widest uppercase px-2 py-1">
                {img.label}
              </span>
            </div>
            <div className="p-4 border-t border-white/5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ProjectGallery;