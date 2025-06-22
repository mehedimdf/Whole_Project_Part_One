import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import manwithbuket from "../../../assets/Shop/manwithbuket.png"
import fandv from "../../../assets/Shop/fruitsandvegi.png"
import { Link } from 'react-router-dom'


const Specialdeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 18,
    seconds: 46
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    return time.toString().padStart(2, '0')
  }

  return (
    <div className="w-full container mx-auto px-4 py-12">
      <div className=" rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          {/* Left Image - Fruits and Vegetables */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start p-8">
            <img 
              src={fandv} 
              alt="Fresh Fruits and Vegetables" 
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-1 text-center px-8 py-12">
            <div className="mb-4">
              <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">
                Best Deals
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Special Products
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Deal of the Month
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm min-w-[60px]">
                  <div className="text-2xl font-bold text-green-600">
                    {formatTime(timeLeft.days)}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2 uppercase">Days</div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm min-w-[60px]">
                  <div className="text-2xl font-bold text-green-600">
                    {formatTime(timeLeft.hours)}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2 uppercase">Hours</div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm min-w-[60px]">
                  <div className="text-2xl font-bold text-green-600">
                    {formatTime(timeLeft.minutes)}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2 uppercase">Mins</div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm min-w-[60px]">
                  <div className="text-2xl font-bold text-green-600">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2 uppercase">Secs</div>
              </div>
            </div>

            {/* Shop Now Button */}
              <Link to="/category?rating=1.0">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto">
              Shop now
              <FaArrowRight className="w-4 h-4" />
            </button>
              </Link>
          </div>

          {/* Right Image - Man with Basket */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end p-0">
            <img 
              src={manwithbuket} 
              alt="Man with basket of vegetables" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialdeal