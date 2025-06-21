import React from 'react';
import HeroImg from '../../assets/hero.png';
import Support from './Support';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-[#f5f5f5] font-poppins ">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <p className="text-green-600 font-semibold uppercase">Welcome to Frische Farm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fresh & Healthy <br />
            Organic Products
          </h1>
          <p className="text-gray-500">We deliver, you enjoy</p>
          <Link to="shop">
          <button className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">
            Shop now <FiArrowRight />
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src={HeroImg} alt="Fresh vegetables" className="w-full" />
        </div>
      </div>

      {/* Support Section */}
      <Support />
  
    </div>
  );
};

export default Home;
