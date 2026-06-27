import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rakesh Mehta',
      role: 'Head of Procurement',
      company: 'Apex Chemicals Private Ltd.',
      quote: 'Maruti Steel India has been our primary vendor for SS seamless pipes and gate valves for over 5 years. Their chemical test reports are always 100% accurate, and they deliver exactly on time. High-quality materials and professional support.',
      rating: 5,
      initials: 'RM'
    },
    {
      name: 'Amit Patel',
      role: 'Project Director',
      company: 'Gujarat Infra Engineering',
      quote: 'We ordered over 10 tons of square structural pipes and blind flanges for our plant expansion project. Shravan Purohit and his team provided excellent factory rates and coordinated the entire logistics. Will continue to source from them.',
      rating: 5,
      initials: 'AP'
    },
    {
      name: 'Dr. Sandeep Shah',
      role: 'QA/QC Division Lead',
      company: 'Vanguard Pharmaceuticals',
      quote: 'Finding mirror-finish sanitary tri-clamp fittings with proper 316L material certifications is critical for our sterile labs. Maruti Steel is highly reliable, meeting our strict pharmaceutical guidelines. Excellent product finish.',
      rating: 5,
      initials: 'SS'
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Client Reviews
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Trusted By Engineering Teams
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Hear from procurement heads and project directors who source their raw steel products from Maruti Steel India.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className="p-8 rounded-3xl border border-secondary/40 shadow-glass bg-gradient-to-br from-white to-lavender-light/30 hover:border-primary/20 hover:shadow-premium transition-all duration-300 relative flex flex-col justify-between text-left group"
            >
              {/* Quote icon overlay */}
              <Quote className="absolute right-8 top-8 w-10 h-10 text-secondary/30 pointer-events-none transition-transform group-hover:scale-110" />
              
              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-sm text-text-muted italic leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info footer */}
              <div className="flex items-center gap-4 mt-8 border-t border-secondary/30 pt-6">
                {/* Avatar with gradient */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-text-dark">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-text-muted font-bold mt-0.5 leading-none">
                    {t.role}, <span className="text-primary">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
