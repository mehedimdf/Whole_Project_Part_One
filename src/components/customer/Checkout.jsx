const Checkout = () => {
    return (
        <>
            <section className="bg-gray-100 py-6 px-4 relative overflow-hidden banner-background">
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500 opacity-70"></div>
                <div className="container mx-auto relative z-10 text-white text-center">
                    <p className="text-lg">Shopping Cart / Checkout</p>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Three Boxes */}
                        <div className="w-full lg:w-2/3 space-y-8">
                            {/* Shipping Address Box */}
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input type="radio" id="address-1" name="shipping_address" value="address-1" className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" checked />
                                        <label htmlFor="address-1" className="ml-2 block text-gray-700">
                                            <span className="font-medium">Home Address</span>
                                            <p className="text-sm text-gray-500">123 Main Street, Munich, Bavaria, 80331</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" id="address-2" name="shipping_address" value="address-2" className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" />
                                        <label htmlFor="address-2" className="ml-2 block text-gray-700">
                                            <span className="font-medium">Office Address</span>
                                            <p className="text-sm text-gray-500">456 Business Ave, Munich, Bavaria, 80333</p>
                                        </label>
                                    </div>
                                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add New Address
                                    </button>
                                </div>
                            </div>

                            {/* Delivery Notes Box */}
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Delivery Notes</h2>
                                <div className="space-y-4">
                                    <textarea 
                                        id="delivery-notes" 
                                        rows="4" 
                                        placeholder="Add any special instructions for delivery..." 
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                    ></textarea>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="gift-wrap" name="gift_wrap" className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                                        <label htmlFor="gift-wrap" className="ml-2 block text-gray-700 text-sm">Gift Wrap (+5€)</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="express-delivery" name="express_delivery" className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                                        <label htmlFor="express-delivery" className="ml-2 block text-gray-700 text-sm">Express Delivery (+10€)</label>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Box */}
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input type="radio" id="saved-card-1" name="payment_method" value="saved-card-1" className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" checked />
                                        <label htmlFor="saved-card-1" className="ml-2 block text-gray-700">
                                            <span className="font-medium">Visa ending in 4242</span>
                                            <p className="text-sm text-gray-500">Expires 12/25</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" id="saved-card-2" name="payment_method" value="saved-card-2" className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500" />
                                        <label htmlFor="saved-card-2" className="ml-2 block text-gray-700">
                                            <span className="font-medium">Mastercard ending in 8888</span>
                                            <p className="text-sm text-gray-500">Expires 09/24</p>
                                        </label>
                                    </div>
                                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add New Payment Method
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center text-gray-700">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/48x48/D1FAE5/10B981?text=CC" alt="Chinese Cabbage" className="w-12 h-12 object-cover rounded-md" />
                                            <span className="ml-3 font-medium">Chinese Cabbage x5</span>
                                        </div>
                                        <span className="font-semibold">86.40 €</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-700">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/48x48/FEE2E2/DC2626?text=RC" alt="Red Capsicum" className="w-12 h-12 object-cover rounded-md" />
                                            <span className="ml-3 font-medium">Red Capsicum x6</span>
                                        </div>
                                        <span className="font-semibold">70.00 €</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-gray-800">
                                        <span className="font-medium">Subtotal</span>
                                        <span className="font-semibold">156.40 €</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-800">
                                        <span className="font-medium">Shipping</span>
                                        <span className="text-green-600 font-semibold">Free</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-2xl font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>156.40 €</span>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                        <h3 className="text-xl font-bold text-gray-800 md:w-1/3">Subscribe our Newsletter</h3>
                        <div className="flex w-full md:w-1/2">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                            />
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-r-md transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex space-x-4 md:w-1/6 justify-center md:justify-end">
                            <a href="#" className="text-gray-600 hover:text-green-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.297 10.377L3.064 3H1l8.156 11.758L1 21h2.573l6.57-9.404L19.436 21H23l-8.625-11.758L23 3h-2.573L13.82 13.404L4.564 3H1.936l7.361 7.377zM17.436 19L6.5 5h-1L17.436 19z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.328 6.475a.997.997 0 00-.707-.294h-4.996a.997.997 0 00-.707.294 1.001 1.001 0 00-.293.707v4.996c0 .26.105.51.293.707a.997.997 0 00.707.294h4.996a.997.997 0 00.707-.294 1.001 1.001 0 00.293-.707v-4.996a1.001 1.001 0 00-.293-.707zm-5.707.707h4.282c.074 0 .147.01.217.03.072.02.138.05.198.09a.148.148 0 01.066.066.25.25 0 01.03.217v4.282c0 .074-.01.147-.03.217a.148.148 0 01-.066.066.25.25 0 01-.217.03h-4.282a.25.25 0 01-.217-.03.148.148 0 01-.066-.066.25.25 0 01-.03-.217v-4.282c0-.074.01-.147.03-.217a.148.148 0 01.066-.066.25.25 0 01.217-.03zm1.258-2.433c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;