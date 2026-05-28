import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ProjectGallery from './components/ProjectGallery'
import ContactForm from './components/ContactForm'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#11141a] overflow-x-hidden pt-20">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      
      <main className="flex-grow">
        <Services />
        <ProjectGallery />
        <ContactForm />
      </main>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      
      <footer className="bg-[#0b1017] border-t border-white/5 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="text-xs font-bold text-white tracking-[0.3em] uppercase">
            W.E. GENERAL CONSTRUCTION
          </p>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium">
            © 2026 W.E. GENERAL CONSTRUCTION • HUDSON VALLEY • LICENSED & INSURED
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App