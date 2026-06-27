import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'What grades of stainless steel do you supply?',
      a: 'We supply a wide range of stainless steel grades, including Austenitic (304, 304L, 316, 316L, 321, 310, 310S), Martensitic (410, 420), Ferritic (409, 430), and Duplex steel grades (S31803, S32205) matching ASTM and ASME raw specifications.'
    },
    {
      q: 'Do you provide Mill Test Certificates (MTC)?',
      a: 'Yes, absolutely. All raw materials and finished products are shipped alongside Mill Test Certificates (MTC) conforming to EN 10204 3.1 standards. Certificates outline chemical composition analysis, heat numbers, tensile strength, elongation, and hardness test metrics.'
    },
    {
      q: 'What is Maruti Steel\'s minimum order quantity (MOQ)?',
      a: 'For standard stock items, there is no strict minimum order quantity; we accommodate minor pilot purchases. For custom metallurgy, sizing runs, or specific profiling (e.g. customized slot sizes or non-standard thicknesses), our sales engineers will discuss the manufacturing thresholds with you.'
    },
    {
      q: 'Can you manufacture products in custom sizes or dimensions?',
      a: 'Yes, we specialize in providing tailored solutions. We can manufacture and cut sheets, strips, and plates to custom dimensions. Pipes, elbows, and flanges can also be customized in terms of wall thickness, scheduling (up to SCH 160), and specialized threading.'
    },
    {
      q: 'How long does dispatch take for order delivery?',
      a: 'Products in stock are typically packed and dispatched within 24 to 48 hours of order confirmation. For custom fabrications or bulk mill shipments, delivery times range from 7 to 21 business days, depending on manufacturing schedules and volume.'
    },
    {
      q: 'What types of pipe elbow designs do you stock?',
      a: 'We maintain a heavy stock of various pipe elbow designs including 90-Degree Elbows (to change flow directions at a right angle), 45-Degree Elbows (for gradual flow modification), Long Radius (LR) Elbows (where center-to-end equals 1.5D for reduced friction), and Short Radius (SR) Elbows (where center-to-end is 1.0D, perfect for space-constrained piping layouts). These are available in butt-weld, socket-weld, and threaded ends.'
    },
    {
      q: 'Do you deliver products outside of Gujarat?',
      a: 'Yes, we provide PAN India delivery. We have established relationships with leading transport agencies and freight forwarders, allowing us to deliver packages safely and efficiently to Maharashtra, Tamil Nadu, Karnataka, Rajasthan, Uttar Pradesh, and all other Indian states.'
    },
    {
      q: 'Are your products compliant with ASME and ASTM standards?',
      a: 'Yes, our products conform to top international standards including ASTM A312 (seamless and welded pipes), ASTM A403 (wrought fittings), ASTM A182 (forged flanges and valves), and ASTM A240 (sheets and plates).'
    },
    {
      q: 'Do you support third-party inspections (TPI)?',
      a: 'We fully welcome and support third-party inspections. You are welcome to nominate your inspection agency (such as SGS, TUV, DNV, Lloyd\'s Register, or Bureau Veritas) to verify chemical compositions and mechanical testing before dispatch.'
    },
    {
      q: 'How can I request a formal price quotation?',
      a: 'You can submit an inquiry directly through our website\'s Contact Form below, email us at marutisteelindia51@gmail.com, or call owner Shravan Purohit at +91 9512865802. We typically issue formal PDF quotes with pricing validity within 2 to 4 business hours.'
    },
    {
      q: 'What are Maruti Steel\'s standard payment terms for B2B accounts?',
      a: 'For new clients, we usually operate on a pro-forma advance basis or a partial advance deposit with the balance payable against goods dispatch. For established corporate buyers and repeat accounts, credit terms can be configured upon credit verification.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-lavender-soft/40 border-y border-secondary/20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Common Questions
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* FAQs Accordion Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-glass transition-all duration-300 hover:border-primary/20 hover:shadow-premium"
              >
                {/* Header button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-extrabold text-sm sm:text-base text-text-dark focus:outline-none select-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full bg-secondary/40 text-primary flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Content block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-text-muted leading-relaxed font-normal border-t border-lavender-light bg-lavender-light/15">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
