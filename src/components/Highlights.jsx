import { motion } from 'framer-motion';
import { Award, Users, Boxes, CheckCircle2, Truck, BadgePercent } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Award,
      value: '20+',
      label: 'Years Experience',
      desc: 'Two decades of metallurgy expertise and market leadership.',
      color: 'from-blue-500/10 to-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      desc: 'Trusted by major engineering, chemical, and pharmaceutical groups.',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-500'
    },
    {
      icon: Boxes,
      value: '1000+',
      label: 'Products in Catalog',
      desc: 'Extensive inventory matching standard dimensions and grades.',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-500'
    },
    {
      icon: CheckCircle2,
      value: '100%',
      label: 'Premium Quality',
      desc: 'Third-party testing & chemical composition analysis reports.',
      color: 'from-rose-500/10 to-pink-500/10',
      iconColor: 'text-rose-500'
    },
    {
      icon: Truck,
      value: 'Fast',
      label: 'Worldwide Dispatch',
      desc: 'Optimized logistic routes for PAN India rapid transportation.',
      color: 'from-purple-500/10 to-indigo-500/10',
      iconColor: 'text-purple-500'
    },
    {
      icon: BadgePercent,
      value: 'Direct',
      label: 'Factory Pricing',
      desc: 'Highly competitive pricing structure with zero mediator markup.',
      color: 'from-cyan-500/10 to-sky-500/10',
      iconColor: 'text-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-16 bg-white border-y border-secondary/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Maruti Steel Highlights
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Industrial Excellence In Numbers
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="p-8 rounded-3xl border border-secondary/40 shadow-glass bg-gradient-to-br from-white to-lavender-light/30 transition-all duration-300 hover:shadow-premium group hover:border-primary/20 flex flex-col items-start text-left"
            >
              {/* Icon container */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>

              {/* Text info */}
              <h3 className="text-4xl font-extrabold text-text-dark tracking-tight leading-none mb-1">
                {item.value}
              </h3>
              <p className="text-base font-bold text-primary mb-3">
                {item.label}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
