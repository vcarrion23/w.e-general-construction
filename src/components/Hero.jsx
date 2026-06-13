import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction site" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Building Your <span className="text-blue-500">Vision</span> <br /> 
          With Precision.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10">
          W.E. General Construction specializes in high-quality residential 
          remodeling and commercial development. Built to last, every time.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
            View Our Projects
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;