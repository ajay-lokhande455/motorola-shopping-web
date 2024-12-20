import React from 'react';

const HappyCustomerSection = () => {
  const customers = [
    {
      name: "John Doe",
      feedback: "I absolutely love this product! It exceeded all my expectations, and the service was exceptional.",
      image: "https://randomuser.me/api/portraits/men/10.jpg", // Replace with a real image URL
    },
    {
      name: "Jane Smith",
      feedback: "This is by far the best purchase I’ve made this year. Fast delivery, great quality, and amazing customer support!",
      image: "https://randomuser.me/api/portraits/women/20.jpg", // Replace with a real image URL
    },
    {
      name: "Alex Johnson",
      feedback: "Fantastic experience! The product is exactly what I was looking for. Highly recommend it to everyone!",
      image: "https://randomuser.me/api/portraits/men/15.jpg", // Replace with a real image URL
    },
  ];

  return (
    <div className="bg-gray-100 mt-9 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Happy Customers</h2>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
              <p className="text-gray-600 italic">"{customer.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomerSection;
