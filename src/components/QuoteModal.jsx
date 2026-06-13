import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    name: '',
    contact: '',
    details: ''
  });

  if (!isOpen) return null;

  const nextStep = () => setStep((p) => Math.min(p + 1, 3));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const handleSelectProject = (type) => {
    setFormData({ ...formData, projectType: type });
    setTimeout(() => nextStep(), 250);
  };

  const handleSilentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Maps perfectly to the default EmailJS Contact Us template variables
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.contact,
      message: `Project Type: ${formData.projectType}\n\nScope Details:\n${formData.details}`
    };

    try {
      await emailjs.send(
        'service_khf2lwh',  // Your Service ID
        'template_szqa804', // Your Template ID
        templateParams, 
        'GAdIPmJfI0YLSqpcJ'  // Your Public Key
      );

      setIsSuccess(true);
    } catch (error) {
      console.error('Email pipeline failure:', error);
      alert('Transmission error. Please text Wilmer directly at (845) 654-3081.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseReset = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setFormData({ projectType: '', name: '', contact: '', details: '' });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#040914]/85 backdrop-blur-lg transition-opacity" onClick={handleCloseReset} />
      
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#171d26] to-[#11141a] border border-sky-500/20 shadow-2xl p-8 md:p-10 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <div>
            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
              {isSuccess ? 'Completed' : `Step ${step} of 3`}
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight mt-0.5">Project Estimate Request</h3>
          </div>
          <button onClick={handleCloseReset} className="text-slate-400 hover:text-white transition-colors p-1 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Success Feedback Screen */}
        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-sky-500/10 border border-sky-400 text-sky-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <Check size={32} />
            </div>
            <h4 className="text-lg font-bold uppercase tracking-wide">Message Transmitted</h4>
            <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              Wilmer has received your scope parameters. Rest assured, our team will review the requirements and contact you shortly.
            </p>
            <button onClick={handleCloseReset} className="mt-4 bg-sky-400 text-[#11141a] font-bold px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer">
              Close Window
            </button>
          </div>
        ) : (
          <>
            {/* Step 1: Category Selection */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
                <p className="text-sm text-slate-400 mb-2">Select the primary category required:</p>
                {['Patios, Walkways & Stone Walls', 'Masonry & Concrete Works', 'Stucco, Welding & Site Prep'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleSelectProject(type)}
                    className="w-full text-left p-5 border border-white/5 bg-[#11141a]/40 text-slate-300 hover:border-sky-400/40 hover:bg-[#1c2430]/30 transition-all flex justify-between items-center cursor-pointer"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide">{type}</span>
                    {formData.projectType === type && <Check size={16} className="text-sky-400" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Information Intake */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#11141a] border border-white/5 text-white p-4 font-medium text-sm focus:border-sky-400 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Information</label>
                  <input type="text" placeholder="Phone number or Email" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} className="w-full bg-[#11141a] border border-white/5 text-white p-4 font-medium text-sm focus:border-sky-400 outline-none" />
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-6">
                  <button type="button" onClick={prevStep} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"><ArrowLeft size={14} /> Back</button>
                  <button type="button" onClick={nextStep} disabled={!formData.name || !formData.contact} className="flex items-center gap-2 bg-sky-400 disabled:opacity-40 text-[#11141a] font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer">Continue <ArrowRight size={14} /></button>
                </div>
              </div>
            )}

            {/* Step 3: Summary Details */}
            {step === 3 && (
              <form onSubmit={handleSilentSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Vision Details</label>
                  <textarea rows="4" required placeholder="Enter sizing dimensions, timelines, or material details..." value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-[#11141a] border border-white/5 text-white p-4 font-medium text-sm focus:border-sky-400 outline-none resize-none" />
                </div>

                <div className="bg-sky-950/20 border border-sky-900/40 p-4 text-xs text-slate-400 font-medium">
                  <span className="text-sky-400 font-bold uppercase block mb-1">Se Habla Español</span>
                  Podemos revisar los detalles de su proyecto y comunicarnos directamente en español si lo prefiere.
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-6">
                  <button type="button" onClick={prevStep} disabled={isSubmitting} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"><ArrowLeft size={14} /> Back</button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-sky-400 text-[#11141a] font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-lg shadow-blue-950/40 cursor-pointer flex items-center gap-2 hover:bg-sky-300"
                  >
                    {isSubmitting ? (
                      <>Transmitting... <Loader2 size={14} className="animate-spin" /></>
                    ) : (
                      'SUBMIT REQUEST'
                    )}
                  </button>
                </div>
              </form>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;