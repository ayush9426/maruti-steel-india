import { motion } from 'framer-motion';
import { Flame, FlaskConical, Pill, Utensils, Construction, Settings, Factory, Zap, Wrench, Scissors } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Flame, name: 'Oil & Gas', desc: 'High-pressure pipes and heavy-duty blind flanges for refinery manifolds.' },
    { icon: FlaskConical, name: 'Chemical Plants', desc: 'Corrosion-resistant 316L sheets and seamless tubing for acid vessels.' },
    { icon: Pill, name: 'Pharmaceutical', desc: 'Ultra-sanitary polished tri-clamp fittings and mirror-finish tubes.' },
    { icon: Utensils, name: 'Food Processing', desc: 'Hygienic food-grade stainless steel sheets and tees for piping assemblies.' },
    { icon: Construction, name: 'Construction', desc: 'Structural square and rectangular pipes for railings, pillars, and gates.' },
    { icon: Settings, name: 'Engineering', desc: 'Precision-grade fasteners, nuts, bolts, and custom machined components.' },
    { icon: Factory, name: 'Petrochemical', desc: 'Heavy forged weld neck flanges and seamless pipe networks.' },
    { icon: Zap, name: 'Power Plants', desc: 'Heat-resistant 310S boiler plates and pressure-capable elbow tubes.' },
    { icon: Wrench, name: 'Manufacturing', desc: 'Reliable stockists of metal strips, bars, and industrial accessories.' },
    { icon: Scissors, name: 'Textile', desc: 'Sturdy machinery parts, rollers, and dye-vat pipe installations.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Sectors We Support
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Industries We Serve
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Maruti Steel India provides certified structural and fluid-handling metal components to critical industrial sectors across the country.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {industries.map((ind, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="p-6 rounded-[24px] border border-secondary/50 bg-lavender-light/10 shadow-glass transition-all duration-300 hover:shadow-premium hover:border-primary/20 hover:bg-white text-center flex flex-col items-center justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-primary/5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <ind.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                
                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-sm font-extrabold text-text-dark group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] text-text-muted leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
