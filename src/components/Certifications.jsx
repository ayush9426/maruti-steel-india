import { motion } from 'framer-motion';
import { ShieldCheck, Award, Microscope, FileCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015 Standards',
      authority: 'QAS International',
      desc: 'Certified Quality Management System covering all stages of steel fabrication and material sourcing.'
    },
    {
      icon: FileCheck,
      title: 'EN 10204 3.1 Certs',
      authority: 'Mill Test Certificate (MTC)',
      desc: 'Complete metallurgical and chemical composition reports provided with every single dispatch batch.'
    },
    {
      icon: Microscope,
      title: 'Destructive & NDT Tested',
      authority: 'NABL Approved Labs',
      desc: 'Materials undergo Hydrostatic, PMI, Ultrasonic, and Radiography testing to verify structural strength.'
    },
    {
      icon: Award,
      title: 'B2B Client Approved',
      authority: 'PAN India Vendor List',
      desc: 'Officially registered and approved vendor for multiple state corporations and public sector undertakings.'
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
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-gradient-lavender-soft/40 border-y border-secondary/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Quality Assurance
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Our Certifications & Standards
          </p>
          <p className="mt-4 text-sm text-text-muted">
            We operate in compliance with major domestic and international engineering standards to deliver high-quality steel.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="relative p-8 rounded-3xl border border-secondary shadow-glass bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-premium flex flex-col justify-between items-start text-left overflow-hidden group"
            >
              {/* Background badge icon */}
              <cert.icon className="absolute -right-4 -bottom-4 w-28 h-28 text-secondary/15 pointer-events-none transition-transform group-hover:scale-110 duration-500" />
              
              <div className="space-y-4 relative z-10">
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center border border-primary/5 text-primary">
                  <cert.icon size={20} />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-base font-extrabold text-text-dark group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <span className="inline-block bg-lavender-light border border-secondary/40 text-primary text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mt-1.5 uppercase">
                    {cert.authority}
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed mt-3 font-normal">
                    {cert.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Standards Logos list */}
        <div className="mt-16 border-t border-secondary/40 pt-10 text-center space-y-4">
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
            Materials Manufactured According to Standard Guidelines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm font-extrabold text-text-dark/40">
            <span className="hover:text-primary transition-colors">ASTM / ASME</span>
            <span className="hover:text-primary transition-colors">ANSI / API</span>
            <span className="hover:text-primary transition-colors">DIN / EN</span>
            <span className="hover:text-primary transition-colors">JIS / BS</span>
            <span className="hover:text-primary transition-colors">IS Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
