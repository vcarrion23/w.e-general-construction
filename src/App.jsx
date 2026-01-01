import React from 'react'
import Navbar from './components/Navbar' // Make sure you have this component!
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  return (
    /* flex-col + min-h-screen creates a professional "container" for the whole site */
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Header/Navigation */}
      <Navbar />
      
      {/* 2. Main Content Area: flex-grow ensures this takes up all available space */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      
      {/* 3. Anchored Footer: This now sits firmly at the bottom */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-80">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold tracking-tighter uppercase">
              W.E. General <span className="text-blue-500">Construction</span>
            </h2>
            <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Quality you can stand on.</p>
          </div>
          <div className="text-slate-500 text-xs text-center md:text-right">
            <p>© 2026 W.E. Construction. All rights reserved.</p>
            <p className="mt-1">Licensed • Bonded • Insured</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default App