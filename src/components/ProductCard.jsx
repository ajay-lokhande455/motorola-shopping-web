import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg p-4 shadow-lg transition-transform duration-200 transform hover:scale-100 block" // Updated hover effect
    >
      {/* Image */}
      <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Name */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>

      {/* Price */}
      <p className="text-lg font-bold text-blue-950">{product.price}/-</p>

      {/* RAM and ROM */}
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{product.ram} RAM</span>
        <span>{product.rom} ROM</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 line-clamp-3">{product.description}</p>
    </Link>
  );
};

export default ProductCard;
