import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-80">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold tracking-tighter">W.E. GENERAL CONSTRUCTION</h2>
          <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">Quality you can stand on.</p>
        </div>
        <p className="text-slate-500 text-xs">
          © 2026 W.E. Construction. Licensed & Insured.
        </p>
      </div>
    </footer>
  );
};

export default Footer;