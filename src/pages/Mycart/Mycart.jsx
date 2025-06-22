import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  X, 
  ArrowLeft 
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom'

const MyShoppingCart = () => {
      const { id } = useParams()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chinese Cabbage",
      price: 17.28,
      quantity: 5,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=80&h=80&fit=crop"
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.00,
      quantity: 5,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=80&h=80&fit=crop"
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, action) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          if (action === 'increment') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrement' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const getTotalSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const applyCoupon = () => {
    // Coupon logic would go here
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
        My Shopping Cart {id}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-sm font-medium text-gray-600 uppercase tracking-wide">
            <div className="col-span-5">PRODUCT</div>
            <div className="col-span-2 text-center">PRICE</div>
            <div className="col-span-3 text-center">QUANTITY</div>
            <div className="col-span-2 text-center">SUBTOTAL</div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 items-center">
                {/* Product Info */}
                <div className="col-span-5 flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center">
                  <span className="font-medium text-gray-900">€{item.price}</span>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, 'decrement')}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 'increment')}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="col-span-1 text-center">
                  <span className="font-medium text-gray-900">€{getSubtotal(item)}</span>
                </div>

                {/* Remove Button */}
                <div className="col-span-1 text-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6 pt-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Return to shop</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded">
              Update Cart
            </button>
          </div>

          {/* Coupon Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={applyCoupon}
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors mt-6"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Cart Total
            </h2>
            
            <div className="space-y-3">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">€{getTotalSubtotal()}</span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              
              {/* Divider */}
              <hr className="border-gray-200" />
              
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">€{getTotalSubtotal()}</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <Link to="/checkout">
            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
              Proceed to checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShoppingCart;