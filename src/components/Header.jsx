import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { cartItems } = useCart(); // Get the cart items from context
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <img
            src="https://motorolain.vtexassets.com/arquivos/motorola-logo.png"
            alt="logo"
            className="h-9" // Set logo height
          />
        </Link>

        {/* Navigation and Search Bar */}
        <nav className="flex items-center space-x-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-2xl border w-80 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* Navigation Links */}
          <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition-colors">Contact</Link>

          {/* Cart with Icon */}
          <Link to="/cart" className="relative flex items-center text-gray-800 hover:text-blue-500 transition-colors">
            <FaShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
