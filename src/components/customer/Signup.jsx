import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import RouteBanner from '../common/RouteBanner';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  return (
<div>

   <RouteBanner title="Create Account"/>
 

      <div className="min-h-[40rem] flex items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 px-10 rounded-lg shadow-md w-full max-w-[30rem]">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="mb-4 relative">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
          </button>
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            placeholder="Confirm your password"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
          </button>
        </div>
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="acceptTerms" className="ml-2 block text-gray-700">
            Accept all terms & Conditions
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full text-white font-semibold py-2 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 mb-4 text-xl"
          style={{ backgroundColor: '#00b207' }}
        >
          Create Account
        </button>
        
        <p className="text-center text-gray-600">
          Already have account?{' '}
          <a href="#" className="font-bold text-black hover:text-gray-800">
            Login
          </a>
        </p>
      </form>
    </div>
</div>
  );
};

export default SignUp;