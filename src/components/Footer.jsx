import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bottom-0 w-full">
      <div className="container mx-auto text-center px-6">
        {/* Footer Navigation */}
        <div className="flex justify-center mb-6">
          <a href="/about" className="text-gray-400 hover:text-white mx-4">About Us</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-4">Contact</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-4">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} E-Commerce By Ajay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
