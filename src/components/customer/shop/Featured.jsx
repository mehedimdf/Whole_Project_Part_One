import React from 'react'
import { SlHandbag } from "react-icons/sl"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import Chinese from "../../../assets/Shop/chinese.jpg"

// Mock images - replace with your actual imports
const productImages = {
  greenApple: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&h=300&fit=crop",
  orange: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
  chineseCabbage: Chinese,
  greenLettuce: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
  eggplant: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=300&h=300&fit=crop"
}

// Simple star rating component
const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`text-xs ${
            index < rating ? 'text-orange-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      originalPrice: 20.99,
      image: productImages.greenApple,
      rating: 4,
      sale: true,
      discount: '50%'
    },
    {
      id: 2,
      name: 'Fresh Indian Malta',
      price: 20.00,
      image: productImages.orange,
      rating: 4
    },
    {
      id: 3,
      name: 'Chinese Cabbage',
      price: 12.00,
      image: productImages.chineseCabbage,
      rating: 4
    },
    {
      id: 4,
      name: 'Green Lettuce',
      price: 9.00,
      image: productImages.greenLettuce,
      rating: 4
    },
    {
      id: 5,
      name: 'Eggplant',
      price: 34.00,
      image: productImages.eggplant,
      rating: 4
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Sale Badge */}
            {product.sale && (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                Sale 50%
              </div>
            )}
            
            {/* Action Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <IoMdHeartEmpty className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <MdOutlineRemoveRedEye className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Product Image */}
            <div className="aspect-square overflow-hidden bg-gray-50 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <StarRating rating={product.rating} />
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors group/btn">
                  <SlHandbag className="w-4 h-4 text-gray-600 group-hover/btn:text-green-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured