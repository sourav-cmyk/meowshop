import React from 'react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-indigo-600">MeowShop</div>
            <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
              <a href="#home" className="hover:text-indigo-600 transition">Home</a>
              <a href="#products" className="hover:text-indigo-600 transition">Shop</a>
              <a href="#about" className="hover:text-indigo-600 transition">About</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenCart} className="relative p-2 rounded-md hover:bg-gray-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4A1 1 0 007.8 21h8.4a1 1 0 00.98-.79L18 13M7 13H5.4" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <a className="hidden sm:inline-block px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
}
