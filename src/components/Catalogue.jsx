import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, HelpCircle, PhoneCall, Mail, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products
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
          p.grades.some((g) => g.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const handleInquiryClick = (productName) => {
    const msg = `Hello Maruti Steel India, I would like to inquire about the product: *${productName}*. Please provide pricing, dimensions, and dispatch availability. Thank you.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919512865802?text=${encoded}`, '_blank');
  };

  return (
    <section id="products-catalog" className="py-8 bg-gradient-lavender-soft/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Controls Row */}
        <div className="bg-white p-6 rounded-3xl border border-secondary shadow-premium mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input & Mobile Filter Toggle (Inline) */}
            <div className="flex flex-row gap-3 items-center w-full lg:max-w-xs xl:max-w-sm">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search catalog, grades (e.g. 316L, 304)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-lavender-light/40 border border-secondary/60 rounded-full pl-11 pr-6 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-medium"
                />
              </div>

              {/* Mobile Filter Toggle Button (Inline, hidden on desktop) */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-4 py-2.5 rounded-full text-xs shadow-premium transition-all duration-300 h-[38px] shrink-0"
              >
                <Filter size={14} />
                <span></span>
                {showMobileFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

            {/* Desktop Filter Content (Hidden on Mobile) */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 shrink-0">
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
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${selectedCategory === cat.id
                          ? 'bg-primary text-white shadow-premium'
                          : 'bg-lavender-light text-text-muted hover:bg-secondary/40 hover:text-primary'
                        }`}
                    >
                      {cat.name}
                    </button>
                  ))}
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
                className="lg:hidden border-t border-secondary/30 mt-4 pt-4 space-y-4 text-left overflow-hidden"
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
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat.id
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-lavender-light text-text-muted hover:bg-secondary/40'
                          }`}
                      >
                        {cat.name}
                      </button>
                    ))}
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
                    <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-secondary/25 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
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
                      className="w-full text-center border border-primary/20 hover:border-primary bg-lavender-light/30 hover:bg-primary text-primary hover:text-white font-bold py-3 px-4 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer"
                    >
                      <span>Inquire Now</span>
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
