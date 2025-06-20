import React from 'react';
import { FiHeadphones, FiShield, FiRefreshCw } from 'react-icons/fi';

const Support = () => {
  const supportItems = [
    {
      icon: <FiHeadphones size={24} className="text-green-600" />,
      title: "Customer Support 24/7",
      desc: "Instant access to Support",
    },
    {
      icon: <FiShield size={24} className="text-green-600" />,
      title: "100% Secure Payment",
      desc: "We ensure your money is save",
    },
    {
      icon: <FiRefreshCw size={24} className="text-green-600" />,
      title: "Money-Back Guarantee",
      desc: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg mx-4 md:mx-auto container grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-4 md:px-8 -mt-4 relative z-10">
      {supportItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
