import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Business Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Ready to start your <br /> 
              <span className="text-blue-600 italic font-light text-5xl">next build?</span>
            </h3>
            
            <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed">
              From blueprints to the final walkthrough, we are here to guide you. Reach out for a consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Call Us</p>
                    <p className="text-gray-900 font-semibold tracking-tight">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Email</p>
                    <p className="text-gray-900 font-semibold tracking-tight">build@we-construction.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Office</p>
                    <p className="text-gray-900 font-semibold tracking-tight">Builder City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Hours</p>
                    <p className="text-gray-900 font-semibold tracking-tight">Mon - Fri: 8am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Project Category</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm appearance-none cursor-pointer">
                  <option>Residential Remodel</option>
                  <option>Commercial Build-out</option>
                  <option>New Construction</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Brief Description</label>
                <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none" placeholder="How can we help?"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-4 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 group">
                Send Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;