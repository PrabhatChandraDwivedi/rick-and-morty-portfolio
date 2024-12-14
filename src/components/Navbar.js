import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-lg bg-white/30 border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      
          <h1 className="text-2xl font-bold text-pink-400">Prabhat</h1>

  
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-pink-400 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="text-white hover:text-pink-400 font-medium transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-pink-400 font-medium transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-pink-400 font-medium border border-pink-400 py-2 px-4 rounded-full hover:bg-pink-400 hover:text-white transition-colors">
                Message Me
              </Link>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>


        {isMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-2 mb-4 bg-white/30 p-4 rounded-lg shadow-lg">
            <li>
              <Link
                to="/"
                className="text-black hover:text-pink-400 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="text-black hover:text-pink-400 font-medium transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black hover:text-pink-400 font-medium transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-pink-400 font-medium border border-pink-400 py-2 px-4 rounded-full hover:bg-pink-400 hover:text-white transition-colors">
                Message Me
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
