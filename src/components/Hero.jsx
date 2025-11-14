import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Welcome to MeowShop</h1>
            <p className="mt-4 text-gray-600 text-lg">Premium products for modern lifestyles. Clean, fast, and responsive.</p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="px-6 py-3 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition">Shop Now</a>
              <a href="#about" className="px-6 py-3 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition">Learn More</a>
            </div>
          </div>
          <div className="order-first md:order-last grid grid-cols-2 gap-3">
            <img className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md" src="https://picsum.photos/seed/hero1/600/400" alt="hero"/>
            <img className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md" src="https://picsum.photos/seed/hero2/600/400" alt="hero"/>
            <img className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md" src="https://picsum.photos/seed/hero3/600/400" alt="hero"/>
            <img className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md" src="https://picsum.photos/seed/hero4/600/400" alt="hero"/>
          </div>
        </div>
      </div>
    </section>
  );
}
