import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/api';
import ProductCard from '../components/ProductCard';
import LandingPage from '../components/LandingPage';
import HappyCustomerSection from '../components/HappyCustomerSection';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchAllProducts();
      setProducts(data);
      setVisibleProducts(data.slice(0, 4)); // Show first 4 products by default
    };
    loadProducts();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(products);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleProducts(products.slice(0, 4));
    setShowAll(false);
  };

  return (
    <div className="container mx-auto px-4 pt-24  py-8">
      <LandingPage/>
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Explore Our Products</h1>
      
      <div className="grid bg-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-6">
        {!showAll ? (
          <button
            onClick={handleShowMore}
            className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200"
          >
            Show Less
          </button>
        )}
      </div>
      <HappyCustomerSection/>
    </div>
  );
};

export default HomePage;
