import React from 'react';
import { CheckCircle2, Languages } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactForm = () => (
  <section id="contact" className="py-32 bg-[#02050c] border-t border-blue-950/40">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      {/* Left Column Text Animation */}
      <div className="lg:col-span-5">
        <ScrollReveal>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white leading-tight">
                Let’s review your <br />project requirements.
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-sm">
              Submit your outline below. Our management handles site planning, transparent contracts, and clear milestone schedules.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>Fully Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>Direct Local Owner Accountability</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/30 border border-blue-900/50 px-3 py-2 w-fit rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.05)]">
                <Languages size={16} className="text-blue-400" />
                <span>Hablamos Español / Se Habla Español</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Column Form Container Animation */}
      <div className="lg:col-span-7 w-full">
        <ScrollReveal delay="delay-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#091326] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Route</label>
                <input type="text" placeholder="Email or Phone" className="w-full bg-[#091326] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 transition-all outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Category</label>
              <select className="w-full bg-[#091326] border border-white/5 text-slate-300 p-4 font-medium text-sm focus:border-blue-500 outline-none cursor-pointer appearance-none">
                <option>General Contracting & Upgrades</option>
                <option>Residential Additions & Remodeling</option>
                <option>Foundation & Structural Frame Correction</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scope Overview</label>
              <textarea rows="4" placeholder="Describe the work required..." className="w-full bg-[#091326] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 transition-all outline-none resize-none"></textarea>
            </div>

            <button type="button" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4.5 tracking-[0.2em] text-xs uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-blue-950/40">
              SUBMIT REQUEST
            </button>
          </form>
        </ScrollReveal>
      </div>

    </div>
  </section>
);

export default ContactForm;