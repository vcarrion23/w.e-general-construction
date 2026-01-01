import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* The Hero is the "Front Door" of your site */}
      <Hero />
      
      {/* Services show what you are capable of */}
      <Services />
      
      {/* Contact Form converts visitors into clients */}
      <ContactForm />
      
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2024 W.E. General Construction. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
