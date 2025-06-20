import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/frische-logo.png";

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

useEffect(() => {
  let timeoutId;

  const handleScroll = () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const shouldShow = window.scrollY < 40;
      setShowTopBar((prev) => (prev !== shouldShow ? shouldShow : prev));
    }, 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <header className="sticky top-0 z-50 font-poppins">
      {/* Top Bar */}
      {showTopBar && (
        <div className="w-full bg-gray-800 text-white text-sm py-1">
          <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
            <span>Eng</span>
            <span>Euro</span>
            <span>|</span>
            <div className="flex gap-2">
              <Link to="/signin" className="hover:underline">Sign In</Link> /
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white pb-2">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
            <img src={Logo} alt="logo" className="h-6" />
            FrischeFarm
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <span className="px-3 text-gray-500">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-2 py-2 outline-none"
              />
              <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
                Search
              </button>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="w-24">{/* Optional right content */}</div>
        </div>

        {/* Bottom Nav Links */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="text-green-600">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/farmers">Farmers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
