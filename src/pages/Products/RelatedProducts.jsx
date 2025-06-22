import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard';

const RelatedProducts = () => {
  const navigate = useNavigate();

  const relatedProducts = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      originalPrice: 20.99,
      discount: "Sale 50%",
      rating: 4,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
      sale: true,
      inStock: true
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 14.99,
      originalPrice: null,
      discount: null,
      rating: 4,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&h=300&fit=crop",
      sale: false,
      inStock: true
    },
    {
      id: 3,
      name: "Green Capsicum",
      price: 14.99,
      originalPrice: null,
      discount: null,
      rating: 4,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
      sale: false,
      inStock: true
    },
    {
      id: 4,
      name: "Ladies Finger",
      price: 14.99,
      originalPrice: null,
      discount: null,
      rating: 4,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
      sale: false,
      inStock: false
    }
  ];

  const handleNavigate = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Related Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} onNavigate={handleNavigate} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        {/* <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
          View All Products
        </button> */}
      </div>
    </div>
  );
};

export default RelatedProducts;
