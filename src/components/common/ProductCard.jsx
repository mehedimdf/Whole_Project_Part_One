import React from 'react';
import { SlHandbag } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productdetails/${product.id}`);
  };
  console.log(product)

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Sale Badge */}
      {product.sale && product.discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          {product.discount}
        </div>
      )}

      {/* Action Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50" onClick={handleClick}>
          <IoMdHeartEmpty className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50" onClick={handleClick}>
          <MdOutlineRemoveRedEye className="w-4 h-4 text-gray-600" />
        </button>
      </div> 

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-50 cursor-pointer" onClick={handleClick}>
        <img
          src={product?.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="text-sm font-medium text-gray-800 mb-2 cursor-pointer"
          onClick={handleClick}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Rating
            initialRating={product.rating}
            readonly
            emptySymbol={<span className="text-gray-300 text-base">★</span>}
            fullSymbol={<span className="text-yellow-400 text-base">★</span>}
          />
          <button className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-colors group">
            <SlHandbag className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
