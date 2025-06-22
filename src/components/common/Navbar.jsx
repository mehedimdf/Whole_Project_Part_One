import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
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
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "underline text-green-400" : "hover:underline"
                }
              >
                Sign In
              </NavLink>{" "}
              /
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "underline text-green-400" : "hover:underline"
                }
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white pb-2">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-gray-900 font-semibold text-xl"
          >
            <img src={Logo} alt="logo" className="h-6" />
            FrischeFarm
          </NavLink>

          {/* Icons and Search */}
          <div className="flex-1 max-w-2xl mx-8 flex items-center gap-4">


            {/* Search Section */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden flex-1 ml-4">
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

         
{/* Right Icons Section */}
<div className="flex items-center gap-4 text-xl text-gray-600">
  {/* Wishlist Icon Link */}
  <NavLink
    to="myWishlist/id"
    className={({ isActive }) =>
      `relative hover:text-green-600 ${isActive ? "text-green-600" : ""}`
    }
  >
    <IoMdHeartEmpty />
  </NavLink>

  {/* Divider */}
  <div className="border-l h-5" />

  {/* Cart Icon Link */}
  <NavLink
    to="mycart/id"
    className={({ isActive }) =>
      `relative flex items-center gap-5 hover:text-green-600 ${isActive ? "text-green-600" : ""}`
    }
  >
    {/* Bag icon with badge */}
    <div className="relative">
      <SlHandbag className="text-xl" />
      <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        2
      </span>
    </div>

    {/* Cart text and total */}
    <div className="text-sm leading-tight text-gray-700">
      <p className="text-xs">Shopping cart:</p>
      <p className="font-semibold">88.00 €</p>
    </div>
  </NavLink>
</div>



        </div>

        {/* Bottom Nav Links */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center gap-6 text-sm font-medium text-gray-700">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/farmers"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              Farmers
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
