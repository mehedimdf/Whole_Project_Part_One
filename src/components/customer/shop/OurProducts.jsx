import React, { useState } from 'react'
import { SlHandbag } from "react-icons/sl"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdOutlineRemoveRedEye } from "react-icons/md"

import Greenlettuce from "../../../assets/Shop/ourp8.png" 
import Bagun from "../../../assets/Shop/ourp5.png" 
import Eggplant from "../../../assets/Shop/eggplant.jpg" 
import Greenlchili from "../../../assets/Shop/ourp6.png" 
import Mango from "../../../assets/Shop/ourp2.png" 
import Tomato from "../../../assets/Shop/ourp3.png" 
import Cauliflower from "../../../assets/Shop/ourp1.png" 
import Apple from "../../../assets/Shop/ourp4.png" 



// Mock images - replace with your actual imports
const productImages = {
  greenlettuce: Greenlettuce,
  bagun: Bagun,
  eggplant: Eggplant,
  greenchilli: Greenlchili,
  cauliflower: Cauliflower,
  tomatos: Tomato,
  mango: Mango,
  apple: Apple
}

// Simple star rating component since react-ratings isn't available
const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`text-sm ${
            index < rating ? 'text-orange-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Vegetable', 'Fruit']
  
  const products = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      originalPrice: 20.00,
      image: productImages.apple,
      category: 'Fruit',
      rating: 4,
      discount: '50%',
      sale: true
    },
    {
      id: 2,
      name: 'Suripupur Mango',
      price: 14.99,
      image: productImages.mango,
      category: 'Fruit',
      rating: 4
    },
    {
      id: 3,
      name: 'Red Tomatos',
      price: 14.99,
      image: productImages.tomatos,
      category: 'Vegetable',
      rating: 4
    },
    {
      id: 4,
      name: 'Fresh Cauliflower',
      price: 14.99,
      image: productImages.cauliflower,
      category: 'Vegetable',
      rating: 4
    },
    {
      id: 5,
      name: 'Green Lettuce',
      price: 14.99,
      image: productImages.greenlettuce,
      category: 'Vegetable',
      rating: 4
    },
    {
      id: 6,
      name: 'Eggplant',
      price: 14.99,
      image: productImages.eggplant,
      category: 'Vegetable',
      rating: 4
    },
    {
      id: 7,
      name: 'Green Chilli',
      price: 14.99,
      image: productImages.greenchilli,
      category: 'Vegetable',
      rating: 4
    },
    {
      id: 8,
      name: 'Eggplant',
      price: 14.99,
      image: productImages.bagun,
      category: 'Vegetable',
      rating: 4
    }
  ]

  const filteredProducts = activeCategory === 'All' || activeCategory === 'View All' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Introducing Our Products</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                activeCategory === category
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-600 border-transparent hover:text-green-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Sale Badge */}
            {product.sale && (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                Sale {product.discount}
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
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <StarRating rating={product.rating} />
                <button className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition-colors group">
                  <SlHandbag className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProducts