import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
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
    setTimeout(() => nextStep(), 300); // Smooth auto-advance
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-[#040914]/80 backdrop-blur-lg transition-opacity" onClick={onClose} />
      
      {/* Central Interactive Panel */}
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#091326] to-[#050b16] border border-blue-500/20 shadow-2xl p-8 md:p-10 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <div>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Step {step} of 3</span>
            <h3 className="text-xl font-bold uppercase tracking-tight mt-0.5">Project Estimate Request</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Step 1: Scope Classification selection */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <p className="text-sm text-slate-400 mb-2">Select the primary scope of work required:</p>
            {['General Contracting', 'Residential Remodeling', 'Structural Repairs & Framing'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleSelectProject(type)}
                className={`w-full text-left p-5 border transition-all flex justify-between items-center ${
                  formData.projectType === type 
                    ? 'border-blue-500 bg-blue-500/10 text-white' 
                    : 'border-white/5 bg-[#040914]/40 text-slate-300 hover:border-blue-500/40 hover:bg-[#0c1a33]/30'
                }`}
              >
                <span className="text-sm font-bold uppercase tracking-wide">{type}</span>
                {formData.projectType === type && <Check size={16} className="text-blue-500" />}
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Information Intake */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-5 duration-300">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#040914] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 outline-none" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Route (Phone/Email)</label>
              <input 
                type="text" 
                placeholder="representative@firm.com or (555) 000-0000"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                className="w-full bg-[#040914] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 outline-none" 
              />
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-6">
              <button onClick={prevStep} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                <ArrowLeft size={14} /> Back
              </button>
              <button 
                onClick={nextStep} 
                disabled={!formData.name || !formData.contact}
                className="flex items-center gap-2 bg-blue-600 disabled:opacity-40 hover:bg-blue-500 text-white font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Continue <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Project Vision Summary */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-5 duration-300">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scope Details / Timelines</label>
              <textarea 
                rows="4" 
                placeholder="Briefly describe what your project requires..."
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="w-full bg-[#040914] border border-white/5 text-white p-4 font-medium text-sm focus:border-blue-500 outline-none resize-none"
              />
            </div>

            <div className="bg-blue-950/20 border border-blue-900/40 p-4 text-xs text-slate-400 font-medium">
              <span className="text-blue-400 font-bold uppercase block mb-1">Se Habla Español</span>
              Podemos revisar los detalles de su proyecto y comunicarnos directamente en español si lo prefiere.
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-6">
              <button onClick={prevStep} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                <ArrowLeft size={14} /> Back
              </button>
              <button 
                type="button"
                onClick={() => {
                  alert("Project criteria transmitted successfully.");
                  onClose();
                  setStep(1);
                  setFormData({ projectType: '', name: '', contact: '', details: '' });
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold px-8 py-4 text-xs uppercase tracking-widest shadow-lg shadow-blue-950/40 cursor-pointer hover:from-blue-500 hover:to-blue-400"
              >
                SUBMIT ANALYSIS
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;