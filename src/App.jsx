import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Page Views
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      // Prevent body scrolling during the premium intro
      document.body.style.overflow = 'hidden';
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = '';
      }, 2800); // Cinematic duration: 2.8 seconds
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isLoading]);


  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-between">
      {/* Website Entry Preloader Animation */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

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
          <Route path="/products" element={<Products />} />

          {/* About Corporate Route */}
          <Route path="/about" element={<About />} />

          {/* Contact & RFQ Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
