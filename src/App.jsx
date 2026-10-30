import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ProjectGallery from './components/ProjectGallery'
import HomeProjectPreview from './components/HomeProjectPreview'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import QuoteModal from './components/QuoteModal'

const pages = ['home', 'services', 'gallery', 'contact'];

const getPageFromHash = () => {
  const page = window.location.hash.slice(1);
  return pages.includes(page) ? page : 'home';
};

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activePage, setActivePage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  const navigateTo = (page) => {
    if (page === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = page;
  };

  const openQuote = () => setIsQuoteOpen(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#11141a] overflow-x-hidden">
      <Navbar activePage={activePage} onNavigate={navigateTo} onOpenQuote={openQuote} />
      
      <main key={activePage} className="page-view flex-grow">
        {activePage === 'home' && (
          <>
            <Hero onOpenQuote={openQuote} onNavigate={navigateTo} />
            <HomeProjectPreview onNavigate={navigateTo} />
          </>
        )}
        {activePage === 'gallery' && <ProjectGallery />}
        {activePage === 'services' && <Services />}
        {activePage === 'contact' && <><Reviews /><ContactForm /></>}
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