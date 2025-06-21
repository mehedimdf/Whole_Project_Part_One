import React from 'react';
import { FaPaperPlane, FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const NewsLetter = () => {
  return (
<div className='bg-gray-50'>
      <div className=" py-4 px-6 flex items-center justify-between container mx-auto min-h-32">
      {/* Left: Newsletter Text */}
      <h2 className="text-xl font-bold text-gray-900 whitespace-nowrap mr-4">
        Subscribe our Newsletter
      </h2>

      {/* Middle: Email Input with Subscribe Button */}
      <div className="flex flex-grow max-w-xl mx-4">
        <div className="relative flex-grow">
          <input
            type="email"
            className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-l-3xl focus:outline-none"
            placeholder="Your email address"
          />
        </div>
        <button
          type="button"
          className="px-4 py-2 rounded-r-3xl text-white font-medium whitespace-nowrap flex items-center"
          style={{ backgroundColor: '#00B207' }}
        >
          <span className="mr-2">Subscribe</span>

        </button>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex space-x-2 ml-4">
        <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaFacebookF className="text-gray-700" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaInstagram className="text-gray-700" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaTelegramPlane className="text-gray-700" />
        </a>
      </div>
    </div>
</div>
  );
};

export default NewsLetter;