import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Heart, ShoppingCart, Star, ChevronDown } from "lucide-react";
import ProductCard from "../../components/common/ProductCard";

const Category = () => {
  const navigate = useNavigate();
  const { sorting } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get URL parameters
  const categoryParam = searchParams.get("category") || "all";
  const sortParam = searchParams.get("sort") || "latest";
  const minPrice = parseInt(searchParams.get("minPrice")) || 0;
  const maxPrice = parseInt(searchParams.get("maxPrice")) || 2000;
  const ratingParam = searchParams.get("rating") || "5.0";
  const tagParam = searchParams.get("tag") || "";

  // State management
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState(sortParam);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedRating, setSelectedRating] = useState(ratingParam);
  const [wishlist, setWishlist] = useState(new Set());

  // Sample products data
  const allProducts = [
    {
      id: 1,
      name: "Big Potatoes",
      price: 14.99,
      originalPrice: null,
      rating: 5.0,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",

      category: "vegetables",
      inStock: true,
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 17.28,
      originalPrice: null,
      rating: 4.8,
      reviews: 89,

      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
      category: "vegetables",
      inStock: true,
      dateAdded: "2024-02-01",
    },
    {
      id: 3,
      name: "Lychee Finger",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.5,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
      category: "vegetables",
      outOfStock: true,
      dateAdded: "2024-01-20",
    },
    {
      id: 4,
      name: "Eggplant",
      price: 20.99,
      originalPrice: null,
      rating: 4.2,
      reviews: 73,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
      category: "vegetables",
      inStock: true,
      dateAdded: "2024-01-25",
    },
    {
      id: 5,
      name: "Fresh Cauliflower",
      price: 47.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 201,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
      category: "vegetables",
      inStock: true,
      dateAdded: "2024-02-05",
    },
    {
      id: 6,
      name: "Green Apple",
      price: 16.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",

      category: "fruits",
      inStock: true,
      dateAdded: "2024-01-30",
    },
    {
      id: 7,
      name: "Green Capsicum",
      price: 12.5,
      originalPrice: null,
      rating: 4.3,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",

      category: "vegetables",
      inStock: true,
      dateAdded: "2024-02-10",
    },
    {
      id: 8,
      name: "Green Chili",
      price: 8.75,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",

      category: "vegetables",
      inStock: true,
      dateAdded: "2024-01-18",
    },
    {
      id: 9,
      name: "Green Cucumber",
      price: 6.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 87,
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",

      category: "vegetables",
      inStock: true,
      dateAdded: "2024-02-03",
    },
  ];

  const categories = [
    { name: "all", label: "All Categories", count: allProducts.length },
    {
      name: "vegetables",
      label: "Vegetables",
      count: allProducts.filter((p) => p.category === "vegetables").length,
    },
    {
      name: "fruits",
      label: "Fruits",
      count: allProducts.filter((p) => p.category === "fruits").length,
    },
  ];

  const popularTags = [
    "Healthy",
    "Organic",
    "Vegetarian",
    "Kid foods",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Launch",
    "Dinner",
    "Breakfast",
    "Fruit",
  ];

  function handleTagClick(tag) {
    console.log(tag);
    const params = new URLSearchParams(window.location.search);
    params.set("tag", tag);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }

  const ratingOptions = ["5.0", "4.0", "3.0", "2.0", "1.0"];

  // Update URL when filters change
  const updateURL = (newFilters) => {
    const params = new URLSearchParams();
    if (newFilters.category !== "all")
      params.set("category", newFilters.category);
    if (newFilters.sort !== "latest") params.set("sort", newFilters.sort);
    if (newFilters.minPrice !== 0) params.set("minPrice", newFilters.minPrice);
    if (newFilters.maxPrice !== 2000)
      params.set("maxPrice", newFilters.maxPrice);
    if (newFilters.rating !== "5.0") params.set("rating", newFilters.rating);

    setSearchParams(params);
  };

  //handle tag select

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by rating
    filtered = filtered.filter(
      (product) => product.rating >= parseFloat(selectedRating)
    );

    // Sort products
    filtered.sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      } else if (sortBy === "oldest") {
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      }
      return 0;
    });

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Handle filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateURL({
      category,
      sort: sortBy,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating: selectedRating,
    });
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    updateURL({
      category: selectedCategory,
      sort,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating: selectedRating,
    });
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    updateURL({
      category: selectedCategory,
      sort: sortBy,
      minPrice: newRange[0],
      maxPrice: newRange[1],
      rating: selectedRating,
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    updateURL({
      category: selectedCategory,
      sort: sortBy,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating,
    });
  };

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar - 1 column */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* Categories */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Categories</h3>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50 ${
                        selectedCategory === category.name
                          ? "bg-green-50 text-green-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      <span className="text-sm">{category.label}</span>
                      <span className="text-xs text-gray-400">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Price</h3>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <div className="px-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="text-sm font-medium">
                      ₹{priceRange[0]} — ₹{priceRange[1]}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={(e) =>
                        handlePriceChange([
                          parseInt(e.target.value),
                          priceRange[1],
                        ])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        handlePriceChange([
                          priceRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">₹0</span>
                    <span className="text-xs text-gray-500">₹2000</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Rating</h3>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <div className="space-y-2">
                  {ratingOptions.map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="rating"
                        className="text-green-600 focus:ring-green-500"
                        checked={selectedRating === rating}
                        onChange={() => handleRatingChange(rating)}
                      />
                      <div className="flex items-center space-x-1">
                        {renderStars(parseFloat(rating))}
                        <span className="text-sm text-gray-600 ml-1">
                          {rating} & up
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Popular Tag</h3>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => handleTagClick(tag)} // ✅ Fix: pass as arrow function
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full cursor-pointer hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Discount Banner */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-4 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-1">79% Discount</div>
                  <div className="text-sm mb-3">on your first order</div>
                  <button className="bg-white text-orange-500 px-4 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                    Shop Now →
                  </button>
                </div>
                <div className="absolute -right-2 -top-2 text-6xl opacity-20">
                  🛒
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - 3 columns */}
          <div className="col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
              <div className="text-gray-600">
                <strong>{filteredProducts.length}</strong> Results Found
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <>
                  <ProductCard product={product}></ProductCard>
                </>
              ))}
            </div>

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-8">
                <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  Load More Products
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">
                  No products found
                </div>
                <div className="text-gray-500">Try adjusting your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
