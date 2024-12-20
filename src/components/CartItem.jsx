import React, { useState } from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  // Handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity); // Notify parent component about the update
  };

  // Calculate total for this item
  const totalAmount = (item.price * quantity).toFixed(2);

  return (
    <div className="border rounded-lg p-6 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0">
        {/* Product Info */}
        <div className="flex flex-col md:mr-6">
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-600">{item.price} USD</p>
        </div>

        {/* Quantity Input */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <label className="text-gray-600">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-gray-600">Total: {totalAmount} USD</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
        >
          Remove
        </button>

        {/* Place Order Button */}
    
      </div>
    </div>
  );
};

export default CartItem;
