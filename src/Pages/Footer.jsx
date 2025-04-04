import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src={'./logo.png'} alt="Logo" className="h-12" />
          </Link>
        </div>
        {/* Links Section */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-yellow-500 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-4 text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
