import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Share2, 
  Facebook, 
  Twitter, 
  Instagram 
} from 'lucide-react';
import { useParams } from 'react-router-dom'
import RelatedProducts from './RelatedProducts';


const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);
    const { id } = useParams()



  // Dummy product data
  const product = {
    id: 1,
    name: "Chinese Cabbage",
    price: 17.28,
    originalPrice: 48.00,
    discount: "64% off",
    rating: 5,
    reviews: 8,
    sku: "SKU-2745394",
    brand: "Fresh Veggies",
    category: "Vegetables",
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green", "Cabbage"],
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1566163339989-cd0e27bec3df?w=400&h=400&fit=crop"
    ],
    shortDescription: "Chúng tôi luôn lọc rau chín tươi ngon, và thực tế rau được coi là chất lượng tốt nhất. Chúng tôi luôn thân thiện với trình đơn và các sản phẩm được chế tạo bằng tâm hồn. Mang đến một thực phẩm chất lượng cao.",
    description: "Fresh Chinese cabbage is a versatile and nutritious vegetable that's perfect for stir-fries, soups, and salads. Our premium quality cabbage is grown using sustainable farming practices and harvested at peak freshness to ensure maximum flavor and nutritional value. Rich in vitamins C and K, folate, and fiber, Chinese cabbage is an excellent addition to a healthy diet. The tender leaves and crisp texture make it ideal for both raw and cooked preparations.",
    additionalInfo: {
      weight: "1-2 lbs per head",
      origin: "Local Farm",
      storage: "Keep refrigerated",
      shelfLife: "7-10 days",
      organic: "Yes",
      season: "Year-round availability"
    },
    customerFeedback: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2024-06-15",
        comment: "Absolutely fresh and crispy! The quality exceeded my expectations. Perfect for my homemade kimchi."
      },
      {
        id: 2,
        name: "Mike Chen",
        rating: 5,
        date: "2024-06-10",
        comment: "Great product! The cabbage was delivered fresh and the leaves were perfect. Will definitely order again."
      },
      {
        id: 3,
        name: "Lisa Wang",
        rating: 4,
        date: "2024-06-08",
        comment: "Good quality cabbage. Fresh and tasty. Delivery was quick and packaging was excellent."
      }
    ]
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'feedback', label: 'Customer Feedback' }
  ];

  return (
<div>
        <div className="max-w-7xl mx-auto p-6 bg-white">
         Product ID: {id}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Image Section */}
        <div className="space-y-4 flex flex-row-reverse gap-3">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex flex-col  space-y-2 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? 'border-green-500' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          {/* Product Title & Rating */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600">{product.reviews} Reviews</span>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-600">{product.sku}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-green-600">${product.price}</span>
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
              {product.discount}
            </span>
          </div>

          {/* Brand & Category */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Brand:</span>
              <span className="text-green-600">{product.brand}</span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed">{product.shortDescription}</p>

          {/* Category & Tags */}
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Category: </span>
              <span className="text-green-600">{product.category}</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Tag: </span>
              <span className="text-gray-600">{product.tags.join(', ')}</span>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => handleQuantityChange('decrement')}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increment')}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-md border transition-colors ${
                isFavorite 
                  ? 'bg-red-50 border-red-200 text-red-600' 
                  : 'bg-white border-gray-200 text-gray-400 hover:text-red-600'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Share */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Share Item:</span>
            <div className="flex space-x-2">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-50 rounded">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 text-pink-600 hover:bg-pink-50 rounded">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className=" pt-8">
        {/* Tab Navigation */}
        <div className="flex space-x-8 border-b-2 border-gray-200 mb-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 text-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.additionalInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-6">
              {product.customerFeedback.map((feedback) => (
                <div key={feedback.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-medium">
                          {feedback.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feedback.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(feedback.rating)}
                          </div>
                          <span className="text-sm text-gray-500">{feedback.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feedback.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </div>
    <RelatedProducts></RelatedProducts>
</div>
  );
};

export default ProductDetails;