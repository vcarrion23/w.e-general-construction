import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#040914] overflow-x-hidden pt-20">
      {/* Pass down modal opener toggle into navbar controls */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      
      <main className="flex-grow">
        <Services />
        <ContactForm />
      </main>

      {/* Embedded interactive slide-over module */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      
      <footer className="bg-[#02050c] border-t border-white/5 py-14 text-center">
        <div className="max-w-7xl mx-auto px-8 space-y-3">
          <p className="text-xs font-bold text-white tracking-[0.3em] uppercase">
            W.E. GENERAL CONSTRUCTION COMPANY
          </p>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium">
            © 2026 W.E. GENERAL • LOCAL CONTRACTING • LICENSED & INSURED
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App