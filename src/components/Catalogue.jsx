import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ArrowUpDown, HelpCircle, PhoneCall, Mail, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Catalogue({ onInquire }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest, popular, alpha
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.grades.some((g) => g.toLowerCase().includes(query))
      );
    }

    // Sort Products
    if (sortBy === 'alpha') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleInquiryClick = (productName) => {
    const msg = `Hello Maruti Steel India, I would like to inquire about the product: *${productName}*. Please provide pricing, dimensions, and dispatch availability. Thank you.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919512865802?text=${encoded}`, '_blank');
  };

  return (
    <section id="products-catalog" className="py-12 bg-gradient-lavender-soft/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Controls Row */}
        <div className="bg-white p-6 rounded-3xl border border-secondary shadow-premium mb-12 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search catalog, grades (e.g. 316L, 304)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-lavender-light/40 border border-secondary/60 rounded-full pl-11 pr-6 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-medium"
              />
            </div>

            {/* Controls right (Toggle filters & stats) */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              <div className="text-xs font-bold text-text-muted bg-secondary/30 px-4 py-2.5 rounded-full border border-secondary/30">
                {filteredProducts.length} items found
              </div>
              
              {/* Mobile Filter Toggle Button (Hidden on Desktop) */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-premium transition-all duration-300"
              >
                <Filter size={14} />
                <span>Filters</span>
                {showMobileFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          {/* Desktop Filter Content (Hidden on Mobile) */}
          <div className="hidden lg:block border-t border-secondary/30 pt-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              {/* Category Badges */}
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-extrabold uppercase text-text-dark tracking-wider">
                    Categories
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? 'bg-primary text-white shadow-premium'
                          : 'bg-lavender-light text-text-muted hover:bg-secondary/40 hover:text-primary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sorting */}
              <div className="space-y-2 text-left md:w-48 w-full">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-extrabold uppercase text-text-dark tracking-wider">
                    Sort By
                  </span>
                </div>
                <div className="relative flex items-center bg-lavender-light/40 border border-secondary/60 rounded-full px-4 py-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-xs font-semibold text-text-dark focus:outline-none w-full cursor-pointer appearance-none"
                  >
                    <option value="newest">Newest Stock</option>
                    <option value="popular">Popularity (Stars)</option>
                    <option value="alpha">Alphabetical (A-Z)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Accordion (Collapsible) */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden border-t border-secondary/30 pt-4 space-y-4 text-left overflow-hidden"
              >
                {/* Categories */}
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase text-text-dark tracking-wider block mb-1">
                    Select Category
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          // Auto close on select for better mobile UX
                          setShowMobileFilters(false);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-lavender-light text-text-muted hover:bg-secondary/40'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Option */}
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase text-text-dark tracking-wider block mb-1">
                    Sort Ordering
                  </span>
                  <div className="flex items-center bg-lavender-light/40 border border-secondary/60 rounded-xl px-3 py-2 w-full">
                    <select
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                        setShowMobileFilters(false);
                      }}
                      className="bg-transparent text-xs font-semibold text-text-dark focus:outline-none w-full cursor-pointer"
                    >
                      <option value="newest">Newest Stock</option>
                      <option value="popular">Popularity (Stars)</option>
                      <option value="alpha">Alphabetical (A-Z)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-secondary p-8"
          >
            <HelpCircle className="w-12 h-12 text-primary/50 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-text-dark">No Products Found</h3>
            <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
              We couldn't find any products matching your search query. Try typing another keyword or check another category.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="mailto:marutisteelindia51@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-bold bg-primary text-white px-5 py-3 rounded-full hover:bg-primary-hover transition-colors"
              >
                <Mail size={14} /> Email Us
              </a>
              <a
                href="tel:+919512865802"
                className="inline-flex items-center gap-2 text-xs font-bold border border-secondary text-primary px-5 py-3 rounded-full hover:bg-lavender-light transition-colors"
              >
                <PhoneCall size={14} /> Call Office
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="group bg-white rounded-[24px] overflow-hidden border border-secondary/50 shadow-glass transition-all duration-500 hover:shadow-premium-lg hover:border-primary/20 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image Container */}
                    <div className="relative aspect-[4/3] bg-lavender-light/30 overflow-hidden border-b border-secondary/20">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Category Label overlay */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-secondary/40 text-primary px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                        {categories.find((c) => c.id === product.category)?.name}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-text-muted mt-1 font-semibold">
                          Size: {product.sizes}
                        </p>
                      </div>

                      <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Material Grades Badges */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                          Available Grades:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.grades.map((grade) => (
                            <span
                              key={grade}
                              className="bg-lavender-light border border-secondary/30 text-text-dark px-2.5 py-1 rounded-md text-[10px] font-bold"
                            >
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA Card Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleInquiryClick(product.name)}
                      className="w-full text-center border border-emerald-500/20 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold py-3 px-4 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.451L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.428 0 9.845-4.417 9.849-9.848.002-2.63-1.018-5.1-2.87-6.953C17.18 1.95 14.707.93 12.007.93c-5.431 0-9.848 4.418-9.853 9.849-.001 1.97.513 3.891 1.492 5.592l-.999 3.647 3.734-.979zm11.167-7.25c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.224-.451-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.168-.29-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.17.193-.29.29-.483.096-.193.048-.361-.024-.507-.072-.146-.644-1.55-.882-2.124-.232-.559-.467-.483-.644-.492-.167-.008-.358-.01-.55-.01s-.502.072-.765.361c-.263.29-1.004.981-1.004 2.392 0 1.411 1.028 2.77 1.171 2.964.144.193 2.023 3.09 4.901 4.331.684.295 1.218.47 1.634.602.688.218 1.314.187 1.81.112.552-.083 1.716-.701 1.957-1.378.24-.677.24-1.258.17-1.378-.073-.12-.263-.193-.553-.339z" />
                      </svg>
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
