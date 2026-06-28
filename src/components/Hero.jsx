import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Factory } from 'lucide-react';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-12 flex items-center bg-gradient-lavender-soft overflow-hidden"
    >
      {/* Dynamic Background Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-secondary/20 blur-[90px]"
        />
        {/* Subtle grid lines in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6260ff08_1px,transparent_1px),linear-gradient(to_bottom,#6260ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-secondary/65 px-4 py-1.5 rounded-full border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-primary">
                ISO 9001:2015 Certified
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-dark leading-[1.1] font-sans">
                Premium Stainless Steel <br className="hidden sm:inline" />
                <span className="text-gradient">Manufacturer & Stockist</span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted max-w-xl font-normal leading-relaxed">
                Maruti Steel India is a highly trusted manufacturer and stockist of premium stainless steel sheets, coils, pipes, tubes, flanges, and high-performance industrial fittings. We serve critical sectors PAN India with raw materials engineered for maximum reliability, durability, and corrosion resistance.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Explore Catalogue</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-secondary bg-white hover:bg-lavender-light text-text-dark hover:text-primary font-bold px-8 py-4 rounded-full shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Image/Mockup Column (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-square rounded-[32px] overflow-hidden shadow-premium-lg border-4 border-white/60 bg-white"
            >
              <img
                src="/images/WhatsApp Image 2026-06-27 at 11.11.23 AM (2).jpeg"
                alt="Maruti Steel Stainless Steel Tubes"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              
              {/* Floating Glassmorphic badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/40 shadow-premium flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-primary">Made in India</h4>
                  <p className="text-xs text-text-dark font-medium mt-0.5">High-quality steel products, dispatch-ready.</p>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Decorative Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-2 sm:-left-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2.5 rounded-2xl border border-secondary shadow-premium text-[10px] sm:text-xs font-bold text-text-dark hidden sm:flex items-center gap-2"
            >
              <span className="text-emerald-500 font-extrabold">✔</span> Premium Grades (304 / 316)
            </motion.div>

            {/* Orbiting Decorative Badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/2 -right-2 sm:-right-6 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2.5 rounded-2xl border border-secondary shadow-premium text-[10px] sm:text-xs font-bold text-text-dark hidden sm:flex items-center gap-2"
            >
              <span className="text-primary font-bold">★</span> 20+ Yrs Metallurgy Experience
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
