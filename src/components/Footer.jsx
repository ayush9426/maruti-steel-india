import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navbar-bg border-t border-white/10 relative z-10 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">

          {/* Column 1: Company Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img
                  src="/images/logo_transparent.png"
                  alt="MSI Gold Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-base tracking-tight text-white leading-none">MARUTI STEEL</span>
                <span className="text-[9px] uppercase font-bold text-primary-light tracking-widest leading-none mt-1">India</span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-normal">
              A premier manufacturer, stockist, and distributor of stainless steel sheets, plates, round/square pipes, welded tubing, industrial flanges, and fasteners. Proudly serving industrial infrastructure across India.
            </p>

            <div className="flex gap-3">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919512865802"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-colors shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              {/* Call Link */}
              <a
                href="tel:+919512865802"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-light hover:bg-primary-light/20 hover:border-primary-light/40 transition-colors shadow-sm"
                title="Call Office"
              >
                <Phone size={16} />
              </a>
              {/* Mail Link */}
              <a
                href="mailto:marutisteelindia51@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-light hover:bg-primary-light/20 hover:border-primary-light/40 transition-colors shadow-sm"
                title="Email Sales"
              >
                <Mail size={16} />
              </a>
            </div>


          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/60">
              <li>
                <Link to="/" className="hover:text-primary-light transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-light transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider">
              Contact Office
            </h4>

            <div className="space-y-3 text-xs font-semibold text-white/60">
              <div className="flex gap-2">
                <MapPin size={16} className="text-primary-light flex-shrink-0 mt-0.5" />
                <span>
                  Shed No. 13/4, Laxmi Estate, Opp. Ajay Estate, Keval Kanta, Rakhial, Ahmedabad – 380023
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-primary-light flex-shrink-0" />
                <a href="tel:+919512865802" className="hover:text-primary-light transition-colors">
                  +91 9512865802
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <Mail size={16} className="text-primary-light flex-shrink-0" />
                <a href="mailto:marutisteelindia51@gmail.com" className="hover:text-primary-light transition-colors">
                  marutisteelindia51@gmail.com
                </a>
              </div>

              <div className="flex gap-2 items-start border-t border-white/10 pt-2 mt-2">
                <Clock size={16} className="text-primary-light flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-[10px] text-white/50 font-normal mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/50">
          <div>
            © {currentYear} Maruti Steel India. All Rights Reserved.
          </div>
          <div className="flex gap-2 items-center text-[10px] uppercase font-bold text-white/40">

            <span className="w-1.5 h-1.5 rounded-full bg-primary-light/45" />
            <span>Industrial Metal Solutions</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-hover text-white p-3.5 rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-white/20"
          title="Back to Top"
        >
          <ArrowUp size={20} className="animate-bounce" />
        </button>
      )}
    </footer>
  );
}
