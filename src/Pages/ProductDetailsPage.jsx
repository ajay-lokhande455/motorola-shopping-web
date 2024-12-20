import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../api/api';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p className="text-center text-lg mt-8">Loading...</p>;

  return (
    <div className="container bg-yellow-50 pt-24 px-6 py-12">
      <div className="flex flex-col bg-white rounded shadow-md p-8 md:flex-row items-start gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-2xl max-w-md h-auto object"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <p className="text-lg font-medium text-gray-800 mb-2">
              <span className="font-semibold">Price:</span> {product.price} /-
            </p>
            <p className="text-lg font-medium text-gray-800 mb-2">
              <span className="font-semibold">RAM:</span> {product.ram}
            </p>
            <p className="text-lg font-medium text-gray-800 mb-2">
              <span className="font-semibold">ROM:</span> {product.rom}
            </p>
            <p className="text-lg font-medium text-gray-800">
              <span className="font-semibold">Other Features:</span> {product.features || 'N/A'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => console.log('Wishlist functionality to be added')}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-300"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
