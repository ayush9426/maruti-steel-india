import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, User, Building2, Landmark, MessageSquare } from 'lucide-react';

export default function Contact({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  // Sync prefilled product from catalogue
  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        product: prefilledProduct
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    if (!formData.name || !formData.phone || !formData.product) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in required fields (Name, Phone, and Product Required).'
      });
      return;
    }

    try {
      console.log('Sending Inquiry to marutisteelindia51@gmail.com:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        product: '',
        quantity: '',
        message: ''
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to submit inquiry. Please call +91 9512865802 directly.'
      });
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.product) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in required fields (Name, Phone, and Product Required) to submit via WhatsApp.'
      });
      return;
    }

    const msg = `Hello Maruti Steel India,\n\nI would like to submit a B2B material inquiry:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company || 'N/A'}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Product:* ${formData.product}\n*Quantity:* ${formData.quantity || 'N/A'}\n*Message:* ${formData.message || 'N/A'}\n\nPlease share the quote.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919512865802?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-lavender-soft/40 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/30 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-primary tracking-widest">
            Get In Touch
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Contact & Inquiry Center
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Request an instant quote, check material stock availability, or ask for certifications. Choose to submit requirements via form or message us directly on WhatsApp.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Glassmorphic Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] border border-secondary shadow-premium bg-white/80 backdrop-blur-md flex-grow flex flex-col justify-between text-left"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-extrabold text-text-dark">Direct Contact Channels</h3>
                  <p className="text-xs text-text-muted mt-1">Connect with our support team or visit our corporate office.</p>
                </div>

                {/* Info List */}
                <div className="space-y-6">
                  {/* Contact Person */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                      <User size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider">Owner / Contact Person</h4>
                      <p className="text-sm font-extrabold text-text-dark mt-0.5">Shravan Purohit</p>
                      <p className="text-xs text-text-muted">Managing Director</p>
                    </div>
                  </div>

                  {/* WhatsApp Info */}
                  <a
                    href="https://wa.me/919512865802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105 shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider">Mobile & WhatsApp</h4>
                        <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-sm font-extrabold text-emerald-600 mt-0.5 group-hover:text-emerald-700 transition-colors">+91 9512865802</p>
                      <p className="text-xs text-text-muted">Click here to chat instantly with us</p>
                    </div>
                  </a>

                  {/* Business Email */}
                  <a
                    href="mailto:marutisteelindia51@gmail.com"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider">Business Email</h4>
                      <p className="text-sm font-extrabold text-text-dark mt-0.5 group-hover:text-primary transition-colors">marutisteelindia51@gmail.com</p>
                      <p className="text-xs text-text-muted">Send engineering drawings & RFQs</p>
                    </div>
                  </a>

                  {/* Factory Address */}
                  <a
                    href="https://maps.google.com/?q=Shed+No.+13/4,+Laxmi+Estate,+Rakhial,+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider">Factory & Warehouse</h4>
                      <p className="text-xs font-bold text-text-dark mt-0.5 group-hover:text-primary transition-colors leading-relaxed">
                        Shed No. 13/4, Laxmi Estate, Opp. Ajay Estate, Keval Kanta, Rakhial, Ahmedabad – 380023
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">Gujarat, India (Mon-Sat: 9AM-7PM)</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action Banner */}
              <div className="mt-8 pt-6 border-t border-secondary/40">
                <a
                  href="https://wa.me/919512865802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.451L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.428 0 9.845-4.417 9.849-9.848.002-2.63-1.018-5.1-2.87-6.953C17.18 1.95 14.707.93 12.007.93c-5.431 0-9.848 4.418-9.853 9.849-.001 1.97.513 3.891 1.492 5.592l-.999 3.647 3.734-.979zm11.167-7.25c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.224-.451-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.168-.29-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.17.193-.29.29-.483.096-.193.048-.361-.024-.507-.072-.146-.644-1.55-.882-2.124-.232-.559-.467-.483-.644-.492-.167-.008-.358-.01-.55-.01s-.502.072-.765.361c-.263.29-1.004.981-1.004 2.392 0 1.411 1.028 2.77 1.171 2.964.144.193 2.023 3.09 4.901 4.331.684.295 1.218.47 1.634.602.688.218 1.314.187 1.81.112.552-.083 1.716-.701 1.957-1.378.24-.677.24-1.258.17-1.378-.073-.12-.263-.193-.553-.339z" />
                  </svg>
                  <span>Chat Instantly on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sleek Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] border border-secondary shadow-premium bg-white relative text-left"
            >
              <h3 className="text-xl font-extrabold text-text-dark mb-6 flex items-center gap-2">
                <Landmark className="text-primary w-5 h-5 animate-pulse" />
                <span>Submit B2B Material Inquiry</span>
              </h3>

              {/* Success Alert */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Inquiry Logged Successfully!</p>
                      <p className="font-normal text-emerald-700 mt-0.5">We have received your requirements and will reply shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert */}
              <AnimatePresence>
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold"
                  >
                    {status.error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Contact Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Shah"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/40 w-4 h-4" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Gujarat Petrochemicals"
                        className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold pr-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. purchase@company.com"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Product */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Product Required <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g. SS 90-Degree Elbows"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 pcs / 2 Tons"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-extrabold text-text-dark tracking-wider">
                    Additional Requirements (Grades, Standards, Dimensions)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ASTM specs, material grade (e.g. 304 or 316L), schedules (SCH 10/40), and target dispatch schedules..."
                    className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold resize-none"
                  />
                </div>

                {/* Buttons Row: Dual Submission Flow (Email / WhatsApp) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  {/* Submit via Email */}
                  <button
                    onClick={handleEmailSubmit}
                    disabled={status.submitting}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold py-4 rounded-xl text-xs shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Email Inquiry</span>
                      </>
                    )}
                  </button>

                  {/* Submit via WhatsApp */}
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-xs shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.451L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.428 0 9.845-4.417 9.849-9.848.002-2.63-1.018-5.1-2.87-6.953C17.18 1.95 14.707.93 12.007.93c-5.431 0-9.848 4.418-9.853 9.849-.001 1.97.513 3.891 1.492 5.592l-.999 3.647 3.734-.979zm11.167-7.25c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.224-.451-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.168-.29-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.17.193-.29.29-.483.096-.193.048-.361-.024-.507-.072-.146-.644-1.55-.882-2.124-.232-.559-.467-.483-.644-.492-.167-.008-.358-.01-.55-.01s-.502.072-.765.361c-.263.29-1.004.981-1.004 2.392 0 1.411 1.028 2.77 1.171 2.964.144.193 2.023 3.09 4.901 4.331.684.295 1.218.47 1.634.602.688.218 1.314.187 1.81.112.552-.083 1.716-.701 1.957-1.378.24-.677.24-1.258.17-1.378-.073-.12-.263-.193-.553-.339z" />
                    </svg>
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
