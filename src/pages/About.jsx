import { motion } from 'framer-motion';
import { Warehouse, Settings, Microscope, Truck, ShieldCheck, BadgeIndianRupee, Package, Users } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Warehouse,
      title: 'Bulk Stockholding',
      desc: 'We maintain massive, ready-to-ship warehouses of standard dimensions of sheets, round/square pipes, flanges, and elbow designs. This minimizes procurement lead times for heavy industries.',
      color: 'from-blue-500/10 to-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Settings,
      title: 'Custom Metal Profiling',
      desc: 'Equipped with heavy shearing and slitting machinery, we process steel coils, cut plates, and profile rectangular or square sections to your exact dimensions and tolerances.',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-500'
    },
    {
      icon: Microscope,
      title: 'Material Testing & QA',
      desc: 'Every batch of steel is strictly inspected. We provide NDT testing, positive material identification (PMI), chemical analysis, and pressure-seal tests with standard Mill Test Certificates.',
      color: 'from-rose-500/10 to-pink-500/10',
      iconColor: 'text-rose-500'
    },
    {
      icon: Truck,
      title: 'PAN India Logistics',
      desc: 'Partnered with key freight companies, we ensure safe shipping and unloading of steel tubing, raw plates, and heavy-duty fittings straight to your project site or factory yard.',
      color: 'from-purple-500/10 to-indigo-500/10',
      iconColor: 'text-purple-500'
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: 'Certified Metallurgy Standards',
      desc: '100% compliant with ASTM, ASME, DIN, JIS, and domestic IS engineering codes, with full heat traceability.'
    },
    {
      icon: BadgeIndianRupee,
      title: 'Direct Mill-Scale Pricing',
      desc: 'Save on intermediary procurement margins. We provide competitive wholesale rates for large-scale orders.'
    },
    {
      icon: Package,
      title: 'Vibration-Proof Packing',
      desc: 'All products are safely bundled, capped with plastic end covers, and packed in wooden crates to prevent transit friction.'
    },
    {
      icon: Users,
      title: 'Dedicated Account Managers',
      desc: 'Get technical guidance from metallurgy professionals. We review drawings and provide quotes in 2-4 hours.'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 85, damping: 15 } }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-navbar-bg text-white pt-28 pb-16 border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-3xl font-extrabold font-sans tracking-tight">
            About Maruti Steel India
          </h1>
          <p className="text-secondary/80 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
            Supplying premium-grade industrial raw materials and pipe fittings since 2006. Built on quality compliance, transparent metallurgical certifications, and client-first B2B execution.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Intro text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
                Our Corporate Identity
              </h2>
              <h3 className="text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight leading-tight">
                Trusted Manufacturer & Stockist of Heavy-Duty Steel
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full mt-2" />
              
              <p className="text-base text-text-muted leading-relaxed font-normal">
                <strong>Maruti Steel India</strong> is a trusted manufacturer and stockist of premium stainless steel products, supplying high-quality industrial materials across various sectors with a strong focus on quality, precision, durability, and customer satisfaction.
              </p>
              <p className="text-base text-text-muted leading-relaxed font-normal">
                Our operations in Ahmedabad coordinate wholesale supply lines for domestic manufacturing yards, petroleum refineries, food-processing utilities, and municipal water boards. Under the direction of managing director <strong>Shravan Purohit</strong>, Maruti Steel operates with complete transparency, providing mill testing and chemical reports with every transaction.
              </p>
              
              {/* Highlights badge layout */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-secondary/30">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">✔</span>
                  <span className="text-xs font-bold text-text-dark">ISO 9001:2015 Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">✔</span>
                  <span className="text-xs font-bold text-text-dark">MTC EN 10204 3.1 Traceability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">✔</span>
                  <span className="text-xs font-bold text-text-dark">PAN India Logistics</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image Collage */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-premium-lg border-4 border-white bg-white">
                <img
                  src="/images/WhatsApp Image 2026-06-27 at 11.11.23 AM.jpeg"
                  alt="Maruti Steel Raw Inventory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navbar-bg/30 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-lavender-soft/40 border-t border-secondary/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
              What We Do
            </h2>
            <h3 className="text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight mt-2">
              Our Industrial Services
            </h3>
            <p className="text-sm text-text-muted mt-3">
              We provide raw metal support, custom metallurgy, and shipping fulfillment to B2B engineering clients.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          {/* Services Grid (Centered contents, center icons, attractive hover effects) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((svc, idx) => (
              <motion.div
                variants={cardVariants}
                key={idx}
                className="p-8 rounded-[28px] border border-secondary shadow-glass bg-white transition-all duration-300 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1.5 flex flex-col items-center justify-center text-center group"
              >
                {/* Centered Icon Container */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${svc.color} mb-5 flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                  <svc.icon className={`w-8 h-8 ${svc.iconColor}`} />
                </div>
                
                <h4 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors">
                  {svc.title}
                </h4>
                <p className="text-sm text-text-muted mt-3 leading-relaxed font-normal max-w-md">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-secondary/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
              Core Competencies
            </h2>
            <h3 className="text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight mt-2">
              Why Engineers Choose Maruti Steel
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          {/* Features Grid (Centered icons and text, attractive hover card effect) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat, idx) => (
              <motion.div
                variants={cardVariants}
                key={idx}
                className="p-6 rounded-3xl border border-secondary/60 shadow-glass bg-gradient-to-br from-white to-lavender-light/20 transition-all duration-300 hover:shadow-premium hover:border-primary/20 hover:bg-white flex flex-col items-center justify-center text-center group"
              >
                {/* Centered Circular Icon */}
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-primary/5 text-primary mb-4 transition-transform group-hover:rotate-6 duration-300">
                  <feat.icon size={22} />
                </div>
                
                <h4 className="text-sm font-extrabold text-text-dark group-hover:text-primary transition-colors">
                  {feat.title}
                </h4>
                <p className="text-xs text-text-muted mt-2 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
