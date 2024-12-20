import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative bg-gray-900 mb-9">
      {/* Background Image */}
      <img 
        src="https://www.wireless.walmart.ca/wp-content/uploads/2024/03/2024-walmart-CA-moto-landing-page-mobile.png" 
        alt="Landing Banner" 
        className="w-full h-auto object-cover"
      />

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Your Perfect Mobile Awaits!</h1>
        <p className="text-xl md:text-2xl mb-6">Get the best deals on the latest mobile phones. Limited time offer!</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-slate-300 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
