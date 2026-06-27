import { motion } from 'framer-motion';
import { ShieldCheck, BadgeDollarSign, Warehouse, Zap, Handshake, MapPin, ClipboardList, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: ShieldCheck,
      title: 'High Quality Products',
      desc: 'All products are manufactured with top-grade raw steel, ensuring zero defects and superior durability.',
      color: 'text-primary'
    },
    {
      icon: BadgeDollarSign,
      title: 'Competitive Pricing',
      desc: 'Our direct-to-customer business model ensures that you receive high-quality materials at factory rates.',
      color: 'text-emerald-500'
    },
    {
      icon: Warehouse,
      title: 'Large Inventory',
      desc: 'We maintain massive ready-to-dispatch stock of standard pipes, sheets, and fittings to eliminate delays.',
      color: 'text-amber-500'
    },
    {
      icon: Zap,
      title: 'Fast Dispatch',
      desc: 'With organized logistics, orders are verified and dispatched within 24-48 hours of confirmation.',
      color: 'text-purple-500'
    },
    {
      icon: Handshake,
      title: 'Trusted Supplier',
      desc: 'Over the years, we have built relationships based on transparency, reliability, and certified metal grades.',
      color: 'text-rose-500'
    },
    {
      icon: MapPin,
      title: 'PAN India Delivery',
      desc: 'We ship to all states across India, coordinating with leading freight carriers for safe transport.',
      color: 'text-cyan-500'
    },
    {
      icon: ClipboardList,
      title: 'Industrial Standards',
      desc: 'Our products are in compliance with ASME, ASTM, DIN, EN, and national ISO standards.',
      color: 'text-indigo-500'
    },
    {
      icon: PhoneCall,
      title: 'Excellent Support',
      desc: 'Our support desk is active 24/7 to resolve shipping, chemical certification, or order modification queries.',
      color: 'text-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-lavender-soft/40 border-t border-secondary/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Why Partner With Us
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Our Competitive Advantages
          </p>
          <p className="mt-4 text-sm text-text-muted">
            See how Maruti Steel India adds value to your B2B sourcing pipeline. We combine raw material quality with excellent logistical delivery.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              className="p-6 rounded-[24px] border border-secondary shadow-glass bg-white hover:border-primary/25 transition-all duration-300 hover:shadow-premium group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center border border-primary/5 transition-transform group-hover:scale-110 duration-300">
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>

                {/* Title & Desc */}
                <div className="space-y-2 text-left">
                  <h3 className="text-base font-extrabold text-text-dark group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-normal">
                    {card.desc}
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
