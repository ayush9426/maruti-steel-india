import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, FileText } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navbar-bg/95 backdrop-blur-md shadow-premium border-b border-primary/10 py-3'
            : 'bg-navbar-bg py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                <img
                  src="/images/maruti steel. logo jpg.jpg"
                  alt="MSI Gold Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-base tracking-tight text-white leading-none">
                  MARUTI STEEL
                </span>
                <span className="text-[9px] uppercase font-bold text-primary-light tracking-widest leading-none mt-1">
                  India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide py-1.5 relative transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Call to Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919512865802"
                className="flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors text-sm px-3 py-2"
              >
                <PhoneCall size={15} className="text-primary-light" />
                <span>+91 9512865802</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-premium transition-all duration-300 hover:shadow-premium-lg"
              >
                <FileText size={14} />
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:+919512865802"
                className="p-2 text-white/85 hover:bg-white/5 rounded-full transition-colors"
                title="Call Maruti Steel"
              >
                <PhoneCall size={18} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            {/* Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-xs bg-navbar-bg z-50 shadow-premium-lg p-6 flex flex-col justify-between md:hidden border-l border-white/5"
            >
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center shadow-md">
                      <img
                        src="/images/maruti steel. logo jpg.jpg"
                        alt="MSI Gold Logo"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <span className="font-sans font-bold text-sm text-white">MARUTI STEEL</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/80 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4 text-left">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-bold py-1.5 border-b border-white/5 transition-colors ${
                          isActive ? 'text-primary-light' : 'text-white/70 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href="tel:+919512865802"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-2.5 rounded-full hover:bg-white/5 transition-colors text-xs w-full"
                >
                  <PhoneCall size={14} />
                  <span>Call: +91 9512865802</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-2.5 rounded-full shadow-premium text-xs w-full hover:bg-primary-hover transition-colors"
                >
                  <FileText size={14} />
                  <span>Request Quote</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
