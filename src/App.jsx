import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Views
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [prefilledProduct, setPrefilledProduct] = useState('');
  const navigate = useNavigate();

  const handleInquireProduct = (productName) => {
    setPrefilledProduct(productName);
    // Programmatically navigate to the Contact/Inquiry page
    navigate('/contact');
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-between">
      {/* Route scroll reset helper */}
      <ScrollToTop />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Routed Main Page Area */}
      <div className="flex-grow">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Product Catalog Route */}
          <Route path="/products" element={<Products onInquire={handleInquireProduct} />} />

          {/* About Corporate Route */}
          <Route path="/about" element={<About />} />

          {/* Contact & RFQ Route */}
          <Route path="/contact" element={<Contact prefilledProduct={prefilledProduct} />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
