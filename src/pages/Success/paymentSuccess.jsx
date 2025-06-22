import React, { useState } from 'react';
import { X } from 'lucide-react';

const PaymentSuccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition duration-200"
        onClick={() => setIsOpen(true)}
      >
        Place Order
      </button>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleClose} // click outside
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl relative flex"
        onClick={(e) => e.stopPropagation()} // stop propagation to prevent closing on inside click
      >
        {/* Left side - Image */}
        <div className="w-1/2 bg-green-500 relative flex items-center justify-center">
          <img 
            src="https://i.ibb.co/KxT85cKg/success.png" 
            alt="Success"
            className="w-full h-full object-cover rounded-l-2xl"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails */}
          <div className="absolute inset-0 bg-green-500 items-center justify-center p-8 hidden">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-white bg-opacity-20 rounded-2xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl">🥕</span>
                  <span className="text-6xl">🥬</span>
                  <span className="text-6xl">🌶️</span>
                </div>
                <p className="text-lg font-semibold">Fresh Vegetables</p>
                <p className="text-sm opacity-90">Delivered to your door</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 p-8 relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-200"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col justify-center h-full">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Thank You for Your Order!
              </h1>
              <div className="text-gray-600 space-y-3 leading-relaxed">
                <p>You've just supported local farmers and helped reduce CO₂ emissions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
