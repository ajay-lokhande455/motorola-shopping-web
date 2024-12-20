import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty. Add some items to your cart!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}

            {/* Proceed to Billing Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/billing')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
