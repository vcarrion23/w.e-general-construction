import React from 'react';
import { CheckCircle2, Languages, Phone, Mail, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-[#02050c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Tap to Call, Text & Info Channels */}
        <div className="lg:col-span-5">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <p className="text-sky-400 font-black tracking-[0.3em] text-xs uppercase mb-3">FREE ESTIMATES</p>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white leading-tight">
                  Let’s start building <br />your next project.
                </h3>
              </div>
              
              {/* Fully interactive phone and text lines */}
              <div className="space-y-4 bg-[#171d26] border border-white/5 p-6 rounded-sm">
                
                {/* Connection Routing for Line 1 */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3 text-sm font-bold text-white">
                    <Phone size={16} className="text-sky-400" />
                    <span>(845) 654-3081</span>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:8456543081" className="p-2 bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-[#11141a] transition-colors rounded-sm text-xs font-bold uppercase tracking-wider">Call</a>
                    <a href="sms:8456543081" className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-[#11141a] transition-colors rounded-sm text-xs flex items-center gap-1"><MessageSquare size={12} /> Text</a>
                  </div>
                </div>

                {/* Connection Routing for Line 2 */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3 text-sm font-bold text-white">
                    <Phone size={16} className="text-sky-400" />
                    <span>(914) 486-1469</span>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:9144861469" className="p-2 bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-[#11141a] transition-colors rounded-sm text-xs font-bold uppercase tracking-wider">Call</a>
                    <a href="sms:9144861469" className="p-2 bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-[#11141a] transition-colors rounded-sm text-xs flex items-center gap-1"><MessageSquare size={12} /> Text</a>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-center gap-3 text-xs font-medium text-slate-400 border-t border-white/5 pt-4 mt-2">
                  <Mail size={14} className="text-sky-400" />
                  <a href="mailto:we.generalconstructions@gmail.com" className="hover:text-sky-400 transition-colors">we.generalconstructions@gmail.com</a>
                </div>
              </div>
              
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <CheckCircle2 size={15} className="text-sky-400" />
                  <span>Licensed & Insured Contractor</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/30 border border-sky-900/40 px-3 py-2 w-fit rounded-sm">
                  <Languages size={15} className="text-sky-400" />
                  <span>Hablamos Español / Se Habla Español</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Reference guidelines to text or click quote directly */}
        <div className="lg:col-span-7 w-full">
          <ScrollReveal delay="delay-100">
            <div className="p-8 bg-[#171d26] border border-white/5 space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3">How to request an estimate:</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We make our bidding completely straightforward. To get a fast, precise price assessment on your next outdoor layout or structural project, you can use any option:
              </p>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-wide text-slate-400">
                <li className="flex items-start gap-3"><span className="text-sky-400">1.</span> <span>Click the <strong className="text-white">"Get a Quote"</strong> button at the top right to drop info directly into our mailbox instantly.</span></li>
                <li className="flex items-start gap-3"><span className="text-sky-400">2.</span> <span>Tap any of the mobile <strong className="text-white">Text buttons</strong> to message Wilmer photos and sizing constraints directly from your phone.</span></li>
                <li className="flex items-start gap-3"><span className="text-sky-400">3.</span> <span>Call our field lines directly to coordinate an on-site evaluation session.</span></li>
              </ul>
              <div className="h-px bg-white/5 my-2" />
              <p className="text-slate-400 text-xs italic">Hablamos español. Envíenos un mensaje de texto o llámenos directamente para coordinar los detalles de su proyecto.</p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;