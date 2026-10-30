import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { featuredProjects } from '../data/projects';

const HomeProjectPreview = ({ onNavigate }) => (
  <section className="border-y border-white/5 bg-[#11141a] py-20 md:py-24">
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">Built by W.E.</p>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white md:text-4xl">A few recent projects</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              A glimpse of the patios, stonework, and outdoor spaces we build across the Hudson Valley.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 border border-white/15 px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-sky-400 hover:text-sky-300"
          >
            View full gallery <ArrowRight size={14} />
          </button>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={['', 'delay-100', 'delay-200'][index]}>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              aria-label={`View ${project.title} in the full project gallery`}
              className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#171d26] text-left"
            >
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b10]/90 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 right-4">
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.2em] text-sky-300">{project.label}</span>
                <span className="block text-sm font-bold uppercase tracking-wide text-white">{project.title}</span>
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeProjectPreview;
