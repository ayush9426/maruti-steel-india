import { motion } from 'framer-motion';
import { ShieldCheck, LayoutGrid, Truck, Users2, IndianRupee, HeartHandshake, Briefcase, ClipboardCheck } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Premium Quality Materials',
      desc: 'All materials undergo rigorous chemical and mechanical tests.'
    },
    {
      icon: LayoutGrid,
      title: 'Wide Product Range',
      desc: '35+ product categories with multiple grades and sizing options.'
    },
    {
      icon: Truck,
      title: 'Reliable Supply Chain',
      desc: 'Partnered with top logistics providers for uninterrupted B2B delivery.'
    },
    {
      icon: Users2,
      title: 'Experienced Team',
      desc: 'Metallurgy experts and sales engineers ready to guide your purchase.'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      desc: 'Direct factory pricing models with optimal volume discounts.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Satisfaction',
      desc: '99% client retention rate built over two decades of honesty.'
    },
    {
      icon: Briefcase,
      title: 'Industrial Expertise',
      desc: 'Decades of supplying to refineries, paper mills, and builders.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance',
      desc: 'Strict quality control check at every manufacturing stage.'
    }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="about" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
              Who We Are
            </h2>
            <h3 className="text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight leading-tight">
              A Trusted Partner In Industrial Metallurgy
            </h3>
            <div className="w-16 h-1 bg-primary rounded-full mt-2" />
            
            <p className="text-base text-text-muted leading-relaxed font-normal">
              <strong>Maruti Steel India</strong> is a highly trusted manufacturer and stockist of premium stainless steel products, supplying high-quality industrial materials across various sectors with a strong focus on quality, precision, durability, and customer satisfaction.
            </p>
            <p className="text-base text-text-muted leading-relaxed font-normal">
              We specialize in custom orders matching exact thickness, length, and steel chemistry. From construction projects in Gujarat to oil refineries in Maharashtra, our products are engineered to excel in critical high-stress environments.
            </p>

            {/* Minor Stats Panel */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-secondary/40">
              <div>
                <h4 className="text-3xl font-extrabold text-primary">Gujarat</h4>
                <p className="text-xs font-bold text-text-muted uppercase mt-1">Headquartered in Rakhial, Ahmedabad</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-primary">100%</h4>
                <p className="text-xs font-bold text-text-muted uppercase mt-1">Authentic Test Certifications</p>
              </div>
            </div>
          </div>

          {/* Right Features Grid Column */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  className="p-6 rounded-2xl border border-secondary/40 bg-lavender-light/10 shadow-glass transition-all duration-300 hover:shadow-premium hover:border-primary/15 hover:bg-white flex gap-4 text-left group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center border border-primary/5 transition-colors group-hover:bg-primary group-hover:text-white duration-300 text-primary">
                    <feature.icon size={20} className="transition-transform group-hover:rotate-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed mt-1 font-normal">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
