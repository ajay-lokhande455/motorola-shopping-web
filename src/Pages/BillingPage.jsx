import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 pt-24 py-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Billing Details</h1>

      {/* Billing Form */}
      <form className="space-y-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <textarea
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 w-full"
        >
          Complete Billing
        </button>
      </form>

      {/* Order Placed Popup */}
      {isOrderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;
