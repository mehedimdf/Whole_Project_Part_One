const LandingC = () => (
    <>
        <section className="bg-green-50 py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight mb-4">
                        Fresh & Healthy <br /> Organic Food
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover the finest organic produce delivered fresh to your door.
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                        Shop Now
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="https://placehold.co/600x400/D1FAE5/10B981?text=Organic+Produce" alt="Organic Produce Basket" className="rounded-lg shadow-xl max-w-full h-auto" />
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Introducing Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/F0FDF4/15803D?text=Fresh+Apples" alt="Fresh Apples" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Apples</h3>
                            <p className="text-gray-600 text-sm">Crisp and juicy organic apples.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">$3.99/kg</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/F0FDF4/15803D?text=Organic+Carrots" alt="Organic Carrots" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Organic Carrots</h3>
                            <p className="text-gray-600 text-sm">Sweet and crunchy, perfect for snacks.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">$2.49/bunch</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/F0FDF4/15803D?text=Farm+Eggs" alt="Farm Fresh Eggs" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Farm Fresh Eggs</h3>
                            <p className="text-gray-600 text-sm">Pasture-raised, rich in nutrients.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">$4.99/dozen</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/F0FDF4/15803D?text=Organic+Spinach" alt="Organic Spinach" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Organic Spinach</h3>
                            <p className="text-gray-600 text-sm">Fresh, leafy greens for a healthy diet.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-green-700 font-bold text-lg">$2.79/bunch</span>
                                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Special Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/150x150/D1FAE5/10B981?text=Juice" alt="Organic Juice" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Organic Cold-Pressed Juices</h3>
                        <p className="text-gray-600 text-center">Refreshing and packed with vitamins.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/150x150/D1FAE5/10B981?text=Bread" alt="Artisan Bread" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Artisan Sourdough Breads</h3>
                        <p className="text-gray-600 text-center">Hand-baked with natural ingredients.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105">
                        <img src="https://placehold.co/150x150/D1FAE5/10B981?text=Honey" alt="Local Honey" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Raw Honey</h3>
                        <p className="text-gray-600 text-center">Pure and unfiltered, straight from the hive.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">✨ Recipe Generator ✨</h2>
                <div className="max-w-2xl mx-auto bg-green-50 rounded-lg shadow-lg p-8">
                    <p className="text-gray-700 mb-6">Enter a list of ingredients you have, and let our AI suggest a delicious recipe for you!</p>
                    <textarea id="ingredientsInput" rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-6" placeholder="e.g., chicken, broccoli, rice, soy sauce"></textarea>
                    <button id="generateRecipeBtn" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto">
                        <span id="buttonText">Generate Recipe ✨</span>
                        <div id="loadingSpinner" className="spinner hidden ml-2"></div>
                    </button>
                    <div id="recipeOutput" className="mt-8 p-6 bg-white rounded-md border border-gray-200 text-left whitespace-pre-wrap">
                        <p className="text-gray-500">Your generated recipe will appear here.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-green-50 rounded-lg p-6 shadow-md">
                        <p className="text-gray-700 italic mb-4">"The produce is incredibly fresh and the delivery is always on time. Highly recommend FreshFarm!"</p>
                        <div className="flex items-center justify-center">
                            <img src="https://placehold.co/60x60/D1FAE5/10B981?text=JD" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" />
                            <span className="font-semibold text-gray-800">John Doe</span>
                        </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 shadow-md">
                        <p className="text-gray-700 italic mb-4">"I love the variety of organic options. It's so convenient to get healthy food delivered."</p>
                        <div className="flex items-center justify-center">
                            <img src="https://placehold.co/60x60/D1FAE5/10B981?text=JS" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" />
                            <span className="font-semibold text-gray-800">Jane Smith</span>
                        </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 shadow-md">
                        <p className="text-gray-700 italic mb-4">"FreshFarm has transformed my cooking. The quality of ingredients is simply amazing."</p>
                        <div className="flex items-center justify-center">
                            <img src="https://placehold.co/60x60/D1FAE5/10B981?text=AM" alt="Client Avatar" className="w-12 h-12 rounded-full mr-4" />
                            <span className="font-semibold text-gray-800">Alice Miller</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-green-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://placehold.co/600x400/D1FAE5/10B981?text=News+1" alt="News Image 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Farming Practices</h3>
                            <p className="text-gray-600 text-sm mb-4">Learn about our commitment to eco-friendly farming methods.</p>
                            <a href="#" className="text-green-600 hover:underline font-medium">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://placehold.co/600x400/D1FAE5/10B981?text=News+2" alt="News Image 2" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits of Organic Diet</h3>
                            <p className="text-gray-600 text-sm mb-4">Discover why choosing organic food is good for your health.</p>
                            <a href="#" className="text-green-600 hover:underline font-medium">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://placehold.co/600x400/D1FAE5/10B981?text=News+3" alt="News Image 3" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">New Seasonal Produce Arrives!</h3>
                            <p className="text-gray-600 text-sm mb-4">Check out the exciting new fruits and vegetables available now.</p>
                            <a href="#" className="text-green-600 hover:underline font-medium">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default LandingC;