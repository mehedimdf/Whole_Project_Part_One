import React, { useState } from 'react';

const ProductSection = () => {
    const [quantity, setQuantity] = useState(1);

    // JavaScript for mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNavMobile = document.getElementById('mainNavMobile');

    if (mobileMenuToggle && mainNavMobile) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNavMobile.classList.toggle('hidden');
            mainNavMobile.classList.toggle('flex');
        });
    }

    // JavaScript for quantity input
    const updateQuantity = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    }

    // JavaScript for tabs functionality
    const openTab = (evt, tabName) => {
        // Declare all variables
        let i, tabcontent, tablinks;

        // Get all elements with class="tab-content" and hide them
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("active");
        }

        // Get all elements with class="product-tab-button" and remove the "active" class
        tablinks = document.getElementsByClassName("product-tab-button");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
    }

    // Handle thumbnail clicks and initial active state
    React.useEffect(() => {
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        const mainImage = document.getElementById('main-product-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => {
                    t.classList.remove('active');
                    t.classList.remove('border-green-500');
                    t.classList.add('border-transparent');
                });
                // Add active class to the clicked thumbnail
                this.classList.add('active', 'border-green-500');
                // Update main image src
                mainImage.src = this.dataset.image;
            });
        });

        // Set the first thumbnail as active on load
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active', 'border-green-500');
        }

        // Set the default tab to be open on page load
        const defaultTabButton = document.querySelector('.product-tab-button[onClick*="descriptions"]');
        if (defaultTabButton) {
            defaultTabButton.click();
        }
    }, []);

    return (
        <>
        <section className="bg-gray-100 py-6 px-4 relative overflow-hidden banner-background">
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500 opacity-70"></div>
            <div className="container mx-auto relative z-10 text-white text-center">
                <p className="text-lg">Home / Category / Vegetables / Chinese Cabbage</p>
            </div>
        </section>
    
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="relative w-full max-w-lg mb-4">
                            <img id="main-product-image" src="https://placehold.co/500x400/D1FAE5/10B981?text=Chinese+Cabbage" alt="Chinese Cabbage" className="w-full h-auto object-cover rounded-lg shadow-md" />
                            <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Sale 55%</span>
                        </div>
                        <div className="flex space-x-4 overflow-x-auto w-full max-w-lg justify-center">
                            <img src="https://placehold.co/100x80/D1FAE5/10B981?text=Img1" className="product-thumbnail w-24 h-20 object-cover rounded-md cursor-pointer border-2 border-green-500" data-image="https://placehold.co/500x400/D1FAE5/10B981?text=Chinese+Cabbage" />
                            <img src="https://placehold.co/100x80/D1FAE5/10B981?text=Img2" className="product-thumbnail w-24 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-green-500" data-image="https://placehold.co/500x400/D1FAE5/10B981?text=Chinese+Cabbage+2" />
                            <img src="https://placehold.co/100x80/D1FAE5/10B981?text=Img3" className="product-thumbnail w-24 h-20 object-cover rounded-md cursor-2 border-2 border-transparent hover:border-green-500" data-image="https://placehold.co/500x400/D1FAE5/10B981?text=Chinese+Cabbage+3" />
                            <img src="https://placehold.co/100x80/D1FAE5/10B981?text=Img4" className="product-thumbnail w-24 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-green-500" data-image="https://placehold.co/500x400/D1FAE5/10B981?text=Chinese+Cabbage+4" />
                        </div>
                    </div>
    
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Chinese Cabbage</h1>
                        <div className="flex items-center mb-4">
                            <div className="text-yellow-400">★★★★☆</div>
                            <span className="text-gray-500 text-sm ml-2">4 Review</span>
                            <span className="ml-4 text-green-600 font-semibold">In Stock</span>
                        </div>
                        <p className="text-gray-500 line-through text-2xl mr-4">€40.00</p>
                        <p className="text-green-700 font-extrabold text-4xl inline-block mr-4">€17.28</p>
                        <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block">55% OFF</span>
    
                        <div className="flex items-center space-x-2 mt-4">
                            <span className="text-gray-600 font-medium">Brand:</span>
                            <span className="text-gray-800">FreshFarm</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 mb-6">
                            <span className="text-gray-600 font-medium">Share Item:</span>
                            <a href="#" className="text-gray-500 hover:text-green-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4h2v-2zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 7h-.01V9h.01zM10 9H6v-.01zM10 6H6v-.01z"/></svg></a>
                            <a href="#" className="text-gray-500 hover:text-green-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.328 6.475a.997.997 0 00-.707-.294h-4.996a.997.997 0 00-.707.294 1.001 1.001 0 00-.293.707v4.996c0 .26.105.51.293.707a.997.997 0 00.707.294h4.996a.997.997 0 00.707-.294 1.001 1.001 0 00.293-.707v-4.996a1.001 1.001 0 00-.293-.707zm-5.707.707h4.282c.074 0 .147.01.217.03.072.02.138.05.198.09a.148.148 0 01.066.066.25.25 0 01.03.217v4.282c0 .074-.01.147-.03.217a.148.148 0 01-.066.066.25.25 0 01-.217.03h-4.282a.25.25 0 01-.217-.03.148.148 0 01-.066-.066.25.25 0 01-.03-.217v-4.282c0-.074.01-.147.03-.217a.148.148 0 01.066-.066.25.25 0 01.217-.03zm1.258-2.433c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg></a>
                            <a href="#" className="text-gray-500 hover:text-green-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.297 10.377L3.064 3H1l8.156 11.758L1 21h2.573l6.57-9.404L19.436 21H23l-8.625-11.758L23 3h-2.573L13.82 13.404L4.564 3H1.936l7.361 7.377zM17.436 19L6.5 5h-1L17.436 19z"/></svg></a>
                        </div>
    
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md" onClick={() => updateQuantity(-1)}>-</button>
                                <input 
                                    type="number" 
                                    id="product-quantity" 
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                    min="1" 
                                    className="product-quantity-input focus:ring-0 focus:outline-none" 
                                />
                                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md" onClick={() => updateQuantity(1)}>+</button>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-200">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                Add To Cart
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-md transition-colors duration-200">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
    
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 border border-gray-200 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
                            <img src="https://placehold.co/150x150/D1FAE5/10B981?text=Farmer" alt="Farmer" className="w-32 h-32 rounded-lg object-cover border-2 border-green-300 p-0.5" />
                            <div className="text-center md:text-left flex-grow">
                                <p className="text-gray-800 font-semibold text-lg mb-2">About The Farmer / Producer</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Our farmers are committed to delivering the freshest, most sustainable produce.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">84% Discount</span>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">100% Organic</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Freshly delivered with us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <div className="border-b border-gray-200 mb-6 overflow-x-auto whitespace-nowrap flex">
                        <button className="product-tab-button active" onClick={(e) => openTab(e, 'descriptions')}>Descriptions</button>
                        <button className="product-tab-button" onClick={(e) => openTab(e, 'additional-information')}>Additional Information</button>
                        <button className="product-tab-button" onClick={(e) => openTab(e, 'customer-feedback')}>Customer Feedback</button>
                    </div>

                    <div id="descriptions" className="tab-content active w-full">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Betaine Agrochemicals Chemicals is best known by its people dedicated to researching new technologies and their development the carrot selection alone ranges from white, yellow, red, orange and purple carrots. It has been providing a full range of high quality agrochemical product to the Chinese market. The company has a deep understanding of the Chinese agricultural practices, particularly those in the northern and western provinces, which is why it has been able to develop a comprehensive range of products that suit local conditions and local crops. Our organic produce is well-known and popular beyond the region - and is now also available directly to you!
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-6 w-full">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Product Specifications</h3>
                            <table className="info-table w-full">
                                <tbody>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Weight:</td>
                                        <td className="text-gray-900">1kg</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Color:</td>
                                        <td className="text-gray-900">Green</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Type:</td>
                                        <td className="text-gray-900">Organic</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Category:</td>
                                        <td className="text-gray-900">Vegetables</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Stock Status:</td>
                                        <td className="text-green-600 font-semibold">In Stock (35)</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium text-gray-700 pr-4">Tags:</td>
                                        <td className="text-gray-900">Vegetables, Healthy, Chinese, Cabbage, Green Cabbage</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="additional-information" className="tab-content">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">More Details</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This section provides additional technical specifications and detailed information about the product's origin, cultivation methods, and certifications.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="text-gray-900">Origin:</strong> Certified Organic Farm, Bavaria, Germany</li>
                            <li><strong className="text-gray-900">Cultivation:</strong> Grown using sustainable and eco-friendly farming practices.</li>
                            <li><strong className="text-gray-900">Harvest Season:</strong> Spring and Autumn</li>
                            <li><strong className="text-gray-900">Certifications:</strong> EU Organic, GlobalGAP</li>
                            <li><strong className="text-gray-900">Storage Instructions:</strong> Store in a cool, dry place away from direct sunlight.</li>
                            <li><strong className="text-gray-900">Best Before:</strong> Approximately 10 days from delivery.</li>
                        </ul>
                    </div>

                    <div id="customer-feedback" className="tab-content">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-gray-800 mr-2">Anna L.</span>
                                    <div className="text-yellow-400 text-sm">★★★★★</div>
                                </div>
                                <p className="text-gray-700 text-sm italic mb-2">"Absolutely fresh and delicious! Perfect for my stir-fries. Arrived quickly and in perfect condition."</p>
                                <span className="text-gray-500 text-xs">Reviewed on May 15, 2025</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-gray-800 mr-2">Max K.</span>
                                    <div className="text-yellow-400 text-sm">★★★★☆</div>
                                </div>
                                <p className="text-gray-700 text-sm italic mb-2">"Good quality cabbage, a bit smaller than expected but still very tasty. Would buy again."</p>
                                <span className="text-gray-500 text-xs">Reviewed on April 28, 2025</span>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md text-sm transition-colors duration-200">
                                Write a Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-100">
                        <div className="relative">
                            <img src="https://placehold.co/300x200/F0FDF4/15803D?text=Green+Apple" alt="Green Apple" className="w-full h-40 object-cover" />
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Sale 55%</span>
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500 hover:text-red-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Green Apple</h3>
                            <div className="flex items-center text-yellow-400 text-sm mb-2">
                                ★★★★☆
                                <span className="text-gray-500 ml-1">(40)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 line-through text-md mr-2">€14.99</span>
                                <span className="text-green-700 font-bold text-lg">€10.99</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-100">
                        <div className="relative">
                            <img src="https://placehold.co/300x200/F0FDF4/15803D?text=Cauliflower" alt="Cauliflower" className="w-full h-40 object-cover" />
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500 hover:text-red-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Cauliflower</h3>
                            <div className="flex items-center text-yellow-400 text-sm mb-2">
                                ★★★★★
                                <span className="text-gray-500 ml-1">(30)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">€ 14.99</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-100">
                        <div className="relative">
                            <img src="https://placehold.co/300x200/F0FDF4/15803D?text=Green+Capsicum" alt="Green Capsicum" className="w-full h-40 object-cover" />
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500 hover:text-red-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Green Capsicum</h3>
                            <div className="flex items-center text-yellow-400 text-sm mb-2">
                                ★★★★☆
                                <span className="text-gray-500 ml-1">(55)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">€ 14.99</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-100">
                        <div className="relative">
                            <img src="https://placehold.co/300x200/F0FDF4/15803D?text=Lady+Finger" alt="Lady Finger" className="w-full h-40 object-cover" />
                            <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500 hover:text-red-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Lady Finger</h3>
                            <div className="flex items-center text-yellow-400 text-sm mb-2">
                                ★★★★★
                                <span className="text-gray-500 ml-1">(60)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">€ 14.99</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProductSection;  