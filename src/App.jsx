import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import BillingPage from './pages/BillingPage';  // Import the BillingPage component
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Tailwind CSS

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/billing" element={<BillingPage />} /> {/* Add BillingPage route */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
