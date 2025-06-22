import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Greenlettuce from "../../../assets/Shop/ourp8.png";
import Bagun from "../../../assets/Shop/ourp5.png";
import Eggplant from "../../../assets/Shop/eggplant.jpg";
import Greenlchili from "../../../assets/Shop/ourp6.png";
import Mango from "../../../assets/Shop/ourp2.png";
import Tomato from "../../../assets/Shop/ourp3.png";
import Cauliflower from "../../../assets/Shop/ourp1.png";
import Apple from "../../../assets/Shop/ourp4.png";
import ProductCard from '../../common/ProductCard';

const productImages = {
  greenlettuce: Greenlettuce,
  bagun: Bagun,
  eggplant: Eggplant,
  greenchilli: Greenlchili,
  cauliflower: Cauliflower,
  tomatos: Tomato,
  mango: Mango,
  apple: Apple
};

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Vegetable', 'Fruit'];

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
  ];

  const filteredProducts =
    activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const handleNavigate = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onNavigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
