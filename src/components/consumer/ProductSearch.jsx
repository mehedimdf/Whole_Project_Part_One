import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsAPI } from '../../services/api';

const ProductSearchC = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [priceRange, setPriceRange] = useState(250);
    const [selectedRating, setSelectedRating] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const query = searchParams.get('query');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await productsAPI.search(query || '');
                if (response.data?.products?.products) {
                    setProducts(response.data.products.products);
                } else {
                    setProducts([]);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products. Please try again.');
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query]);

    const handlePriceChange = (e) => {
        setPriceRange(e.target.value);
    };

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div>
            <section className="bg-gray-100 py-12 px-4 relative overflow-hidden banner-background">
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500 opacity-70"></div>
                <div className="container mx-auto relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold mb-2">
                        {query ? `Search Results for "${query}"` : 'Shop Our Products'}
                    </h1>
                    <p className="text-lg">Home / {query ? 'Search' : 'Shop'}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <div className="filter-section mb-8">
                            <h4>Categories</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li><a href="#" className="hover:text-green-600">All Categories</a></li>
                                <li><a href="#" className="hover:text-green-600">Vegetables (10)</a></li>
                                <li><a href="#" className="hover:text-green-600">Fruits (8)</a></li>
                                <li><a href="#" className="hover:text-green-600">Cooking (5)</a></li>
                                <li><a href="#" className="hover:text-green-600">Beverages (3)</a></li>
                                <li><a href="#" className="hover:text-green-600">Dairy & Eggs (4)</a></li>
                            </ul>
                        </div>

                        <div className="filter-section mb-8">
                            <h4>Price</h4>
                            <input 
                                type="range" 
                                min="0" 
                                max="500" 
                                value={priceRange}
                                onChange={handlePriceChange}
                                className="w-full" 
                            />
                            <div className="flex justify-between text-gray-600 text-sm mt-2">
                                <span>€0</span>
                                <span>€500</span>
                            </div>
                        </div>

                        <div className="filter-section mb-8">
                            <h4>Rating</h4>
                            <div className="flex items-center space-x-2 mb-2">
                                <input 
                                    type="radio" 
                                    id="rating5" 
                                    name="rating" 
                                    value="5"
                                    checked={selectedRating === '5'}
                                    onChange={handleRatingChange}
                                    className="text-green-600 focus:ring-green-500" 
                                />
                                <label htmlFor="rating5" className="flex items-center">
                                    <span className="text-yellow-400">★★★★★</span>
                                    <span className="text-gray-600 text-sm ml-2">(450+)</span>
                                </label>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                                <input 
                                    type="radio" 
                                    id="rating4" 
                                    name="rating" 
                                    value="4"
                                    checked={selectedRating === '4'}
                                    onChange={handleRatingChange}
                                    className="text-green-600 focus:ring-green-500" 
                                />
                                <label htmlFor="rating4" className="flex items-center">
                                    <span className="text-yellow-400">★★★★☆</span>
                                    <span className="text-gray-600 text-sm ml-2">(370+)</span>
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="radio" 
                                    id="rating3" 
                                    name="rating" 
                                    value="3"
                                    checked={selectedRating === '3'}
                                    onChange={handleRatingChange}
                                    className="text-green-600 focus:ring-green-500" 
                                />
                                <label htmlFor="rating3" className="flex items-center">
                                    <span className="text-yellow-400">★★★☆☆</span>
                                    <span className="text-gray-600 text-sm ml-2">(150+)</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-section mb-8">
                            <h4>Popular Tag</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-800 cursor-pointer">Organic</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-800 cursor-pointer">Fresh</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-800 cursor-pointer">Healthy</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-800 cursor-pointer">Vegetables</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-800 cursor-pointer">Fruits</span>
                            </div>
                        </div>

                        <div className="filter-section mb-8">
                            <h4>Discount</h4>
                            <div className="bg-green-500 text-white rounded-md p-4 text-center">
                                <p className="text-xl font-bold">79% Discount</p>
                                <p className="text-sm mt-1">on select products</p>
                            </div>
                        </div>

                        <div className="filter-section">
                            <h4>Sale Products</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <img src="https://placehold.co/60x60/D1FAE5/10B981?text=Sale" alt="Sale Product" className="w-16 h-16 object-cover rounded-md" />
                                        <div>
                                            <p className="text-gray-800 font-medium">Organic Tomatoes</p>
                                            <div className="flex items-center">
                                                <span className="text-gray-500 line-through text-sm mr-2">€5.00</span>
                                                <span className="text-green-600 font-bold">€3.50</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <img src="https://placehold.co/60x60/D1FAE5/10B981?text=Sale" alt="Sale Product" className="w-16 h-16 object-cover rounded-md" />
                                        <div>
                                            <p className="text-gray-800 font-medium">Fresh Berries</p>
                                            <div className="flex items-center">
                                                <span className="text-gray-500 line-through text-sm mr-2">€12.00</span>
                                                <span className="text-green-600 font-bold">€8.00</span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                {loading ? (
                                    <p className="text-gray-600">Loading products...</p>
                                ) : error ? (
                                    <p className="text-red-600">{error}</p>
                                ) : (
                                    <p className="text-gray-600">
                                        {products.length} {products.length === 1 ? 'product' : 'products'} found
                                        {query && ` for "${query}"`}
                                    </p>
                                )}
                            </div>
                            <select 
                                className="p-2 border border-gray-300 rounded-md text-gray-700"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option value="default">Default Sorting</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                        </div>

                        {loading ? (
                            <div className="text-center py-8">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-8 text-red-600">
                                {error}
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-8 text-gray-600">
                                No products found. Try a different search term.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-100">
                                        <div className="relative">
                                            <img 
                                                src={product.imagePath || `https://placehold.co/300x200/F0FDF4/15803D?text=${encodeURIComponent(product.name)}`} 
                                                alt={product.name} 
                                                className="w-full h-40 object-cover" 
                                            />
                                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500 hover:text-red-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                            <div className="flex items-center text-yellow-400 text-sm mb-2">
                                                {'★'.repeat(Math.floor(product.rating || 0))}
                                                {'☆'.repeat(5 - Math.floor(product.rating || 0))}
                                                <span className="text-gray-500 ml-1">({product.reviewCount || 0})</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-700 font-bold text-lg">
                                                    € {product.price || '0.00'}
                                                </span>
                                                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ProductSearchC;