import React from 'react';

const ProfileC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            <section className="bg-gray-100 py-12 px-4 relative overflow-hidden banner-background">
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500 opacity-70"></div>
                <div className="container mx-auto relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold mb-2">Account Dashboard</h1>
                    <p className="text-lg">Home / Account Dashboard</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Navigation</h3>
                        <nav className="dashboard-nav space-y-2">
                            <a href="#" className="active">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                Dashboard
                            </a>
                            <a href="#">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                                Order History
                            </a>
                            <a href="#">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                Shopping Cart
                            </a>
                            <a href="#">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Settings
                            </a>
                            <a href="#" className="text-red-500 hover:bg-red-50 hover:text-red-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Log-out
                            </a>
                        </nav>
                    </aside>

                    <div className="w-full lg:w-3/4 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <img src="https://placehold.co/80x80/D1FAE5/10B981?text=User" alt="User Avatar" className="w-20 h-20 rounded-full mr-4 border-2 border-green-500" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">Max Krüger</h3>
                                            <p className="text-gray-600">Customer</p>
                                        </div>
                                </div>
                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 w-full">
                                    Edit Profile
                                </button>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">BILLING ADDRESS</h3>
                                <p className="text-gray-700 font-semibold">Max Krüger</p>
                                <p className="text-gray-600">Reichenbachstraße 180469</p>
                                <p className="text-gray-600">München</p>
                                <p className="text-gray-600 mb-4">max.kruger@gmail.com</p>
                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 w-full">
                                    Edit Address
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Recent Order History</h3>
                                <a href="#" className="text-green-600 hover:underline font-medium text-sm">View All</a>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">View Details</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#703</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">24 May, 2025</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€ 25.00 (1 Product)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-semibold">on the way</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-green-600 hover:text-green-900">View Details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#130</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">22 Oct, 2024</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€ 250.00 (4 Products)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Completed</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-green-600 hover:text-green-900">View Details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#531</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1 Feb, 2025</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€ 35.00 (1 Product)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Completed</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-green-600 hover:text-green-900">View Details</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#536</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">21 Sep, 2024</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">€ 578.00 (13 Products)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Completed</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-green-600 hover:text-green-900">View Details</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <h3 className="text-xl font-bold text-gray-800 md:w-1/3">Subscribe our Newsletter</h3>
                    <div className="flex w-full md:w-1/2">
                        <input type="email" placeholder="Your email address" className="newsletter-input rounded-r-none border-r-0" />
                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-r-md transition-colors duration-200">
                                Subscribe
                            </button>
                    </div>
                    <div className="flex space-x-4 md:w-1/6 justify-center md:justify-end">
                        <a href="#" className="text-gray-600 hover:text-green-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg></a>
                        <a href="#" className="text-gray-600 hover:text-green-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.297 10.377L3.064 3H1l8.156 11.758L1 21h2.573l6.57-9.404L19.436 21H23l-8.625-11.758L23 3h-2.573L13.82 13.404L4.564 3H1.936l7.361 7.377zM17.436 19L6.5 5h-1L17.436 19z" /></svg></a>
                        <a href="#" className="text-gray-600 hover:text-green-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.328 6.475a.997.997 0 00-.707-.294h-4.996a.997.997 0 00-.707.294 1.001 1.001 0 00-.293.707v4.996c0 .26.105.51.293.707a.997.997 0 00.707.294h4.996a.997.997 0 00.707-.294 1.001 1.001 0 00.293-.707v-4.996a1.001 1.001 0 00-.293-.707zm-5.707.707h4.282c.074 0 .147.01.217.03.072.02.138.05.198.09a.148.148 0 01.066.066.25.25 0 01.03.217v4.282c0 .074-.01.147-.03.217a.148.148 0 01-.066.066.25.25 0 01-.217.03h-4.282a.25.25 0 01-.217-.03.148.148 0 01-.066-.066.25.25 0 01-.03-.217v-4.282c0-.074.01-.147.03-.217a.148.148 0 01.066-.066.25.25 0 01.217-.03zm1.258-2.433c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" clipRule="evenodd" /></svg></a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProfileC;