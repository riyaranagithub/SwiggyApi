// Header.js
import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 mb-2">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-gray-800 w-6">
        <img src='/Swiggy-logo.avif' className='w-7 h-7 transition-transform duration-200 hover:scale-110'></img>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <Link to="/grocery" className="text-gray-600 hover:text-gray-800">
            Grocery
          </Link>
          <SearchBar/>
        </nav>

        {/* Cart Icon and Logout Button */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3 {/* Sample cart count */}
            </span>
          </Link>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white border-t border-gray-200 py-2">
        <nav className="flex flex-col items-start space-y-2 px-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
          <Link to="/grocery" className="text-gray-600 hover:text-gray-800">
            Grocery
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
