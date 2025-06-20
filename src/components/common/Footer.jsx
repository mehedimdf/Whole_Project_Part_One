import React from 'react';
import Logo from "../../assets/frische-logo.png";

// Image imports
import ApplePay from "../../assets/payments/applepay.png";
import Visa from "../../assets/payments/visa.png";
import Mastercard from "../../assets/payments/mastercard.png";
import Cart from "../../assets/payments/cart.png";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-gray-400 text-sm font-poppins pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="FrischeFarm" className="h-6" />
            <span className="text-white text-2xl font-semibold">FrischeFarm</span>
          </div>
          <a
            href="mailto:info@frischefarm.com"
            className="text-white border-b-2 border-green-600 inline-block pb-1"
          >
            info@frischefarm.com
          </a>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-3">My Account</h4>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shoping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Helps */}
        <div>
          <h4 className="text-white font-semibold mb-3">Helps</h4>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>Faqs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Proxy */}
        <div>
          <h4 className="text-white font-semibold mb-3">Proxy</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="space-y-1">
            <li>Fruit & Vegetables</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>FrischeFarm eCommerce © 2024. All Rights Reserved</p>
          <div className="flex items-center gap-3">
            <img src={ApplePay} alt="Apple Pay" className="h-8" />
            <img src={Visa} alt="Visa" className="h-8" />
            <img src={Mastercard} alt="MasterCard" className="h-8" />
            <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
              <img src={Cart} alt="Secure" className="h-8 w-14" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
