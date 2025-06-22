import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chinese from "../../../assets/Shop/chinese.jpg";
import ProductCard from '../../common/ProductCard';

const productImages = {
  greenApple: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&h=300&fit=crop",
  orange: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
  chineseCabbage: Chinese,
  greenLettuce: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop",
  eggplant: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=300&h=300&fit=crop"
};

const Featured = () => {
  const navigate = useNavigate();

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
  ];

  const handleNavigate = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredProducts.map((product) => (
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

export default Featured;
