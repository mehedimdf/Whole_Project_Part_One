import React from 'react'
import { Truck, Headphones, Shield, RotateCcw } from 'lucide-react'

const OurService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Free Shipping */}
        <div className="bg-green-500 text-white p-6 rounded-lg flex flex-col items-start">
          <div className="bg-white bg-opacity-20 p-3 rounded-full mb-4">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
          <p className="text-sm opacity-90">Free shipping with discount</p>
        </div>
        

        {/* Great Support 24/7 */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-start shadow-sm">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <Headphones className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Great Support 24/7</h3>
          <p className="text-sm text-gray-600">Instant access to Contact</p>
        </div>

        {/* 100% Secure Payment */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-start shadow-sm">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">100% Secure Payment</h3>
          <p className="text-sm text-gray-600">We ensure your money is safe</p>
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-start shadow-sm">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <RotateCcw className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Money-Back Guarantee</h3>
          <p className="text-sm text-gray-600">30 Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  )
}

export default OurService