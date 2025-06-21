import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import bgImage from "../../assets/background.jpg";

const RouteBanner = ({ title }) => {
  return (
    <div className="w-full h-24 relative">
      {/* Background image (flipped horizontally) */}
      <img
        src={bgImage}
        alt="Banner Background"
        className="w-full h-full object-cover scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40 flex items-center px-6">
        <div className="text-white flex items-center gap-3 text-xl">
          <Link to="/" className="hover:underline text-white">
            <GoHome className="text-3xl" />
          </Link>
          <RiArrowRightSLine className="text-2xl" />
          <span className="capitalize text-green-400">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default RouteBanner;
