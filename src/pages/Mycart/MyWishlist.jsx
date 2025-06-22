import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Eye, 
  X, 
  Star,
  ArrowLeft,
  Share2
} from 'lucide-react';

const MyWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Chinese Cabbage",
      price: 17.28,
      originalPrice: 48.00,
      discount: "64% off",
      rating: 5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
      inStock: true,
      dateAdded: "2024-06-20"
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.00,
      originalPrice: 20.00,
      discount: "30% off",
      rating: 4,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
      inStock: true,
      dateAdded: "2024-06-18"
    },
    {
      id: 3,
      name: "Green Apple",
      price: 12.99,
      originalPrice: null,
      discount: null,
      rating: 4,
      reviews: 25,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
      inStock: true,
      dateAdded: "2024-06-15"
    },
    {
      id: 4,
      name: "Fresh Broccoli",
      price: 8.50,
      originalPrice: null,
      discount: null,
      rating: 5,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
      inStock: false,
      dateAdded: "2024-06-10"
    },
    {
      id: 5,
      name: "Organic Carrots",
      price: 6.75,
      originalPrice: 9.00,
      discount: "25% off",
      rating: 4,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop",
      inStock: true,
      dateAdded: "2024-06-08"
    },
    {
      id: 6,
      name: "Purple Eggplant",
      price: 11.20,
      originalPrice: null,
      discount: null,
      rating: 4,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=300&h=300&fit=crop",
      inStock: true,
      dateAdded: "2024-06-05"
    }
  ]);

  const [selectedItems, setSelectedItems] = useState(new Set());

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    setSelectedItems(prev => {
      const newSelected = new Set(prev);
      newSelected.delete(id);
      return newSelected;
    });
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const selectAll = () => {
    if (selectedItems.size === wishlistItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(wishlistItems.map(item => item.id)));
    }
  };

  const addSelectedToCart = () => {
    if (selectedItems.size > 0) {
      console.log('Adding selected items to cart:', Array.from(selectedItems));
      // Add to cart logic here
    }
  };

  const removeSelected = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.has(item.id)));
    setSelectedItems(new Set());
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Shopping</span>
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Wishlist Stats */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">{wishlistItems.length}</span> items in wishlist
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">{selectedItems.size}</span> selected
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={selectAll}
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              {selectedItems.size === wishlistItems.length ? 'Deselect All' : 'Select All'}
            </button>
            {selectedItems.size > 0 && (
              <>
                <button
                  onClick={addSelectedToCart}
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                >
                  Add to Cart ({selectedItems.size})
                </button>
                <button
                  onClick={removeSelected}
                  className="px-4 py-2 bg-red-100 text-red-600 text-sm rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove Selected
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-6">Save items you love to your wishlist</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group ${
                selectedItems.has(item.id) ? 'border-green-500 shadow-md' : 'border-gray-200'
              }`}
            >
              {/* Product Image */}
              <div className="relative">
                {/* Selection Checkbox */}
                <div className="absolute top-3 left-3 z-10">
                  <input
                    type="checkbox"
                    checked={selectedItems.has(item.id)}
                    onChange={() => toggleSelectItem(item.id)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>

                {/* Discount Badge */}
                {item.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                    {item.discount}
                  </div>
                )}

                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  style={{ marginTop: item.discount ? '30px' : '0' }}
                >
                  <X className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>

                {/* Product Image */}
                <div className="aspect-square bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white text-gray-600 hover:text-green-600 rounded-full transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      className={`p-2 rounded-full transition-colors ${
                        item.inStock 
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                {!item.inStock && (
                  <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs text-center py-1">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-xs text-gray-500">({item.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-green-600">
                    ${item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>

                {/* Date Added */}
                <div className="text-xs text-gray-500 mb-3">
                  Added {new Date(item.dateAdded).toLocaleDateString()}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button 
                    className={`flex-1 py-2 px-3 text-sm rounded-md transition-colors ${
                      item.inStock 
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!item.inStock}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recommendations */}
 {wishlistItems.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          {/* <h3 className="text-xl font-semibold text-gray-900 mb-4">
            You might also like
          </h3> */}
          <div className="text-center">
            {/* <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              View Recommendations
            </button> */}
          </div>
        </div>
      )} 
  
    </div>
  );
};

export default MyWishlist;