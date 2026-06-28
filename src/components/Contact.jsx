import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, Building2, Landmark, User, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
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

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.product) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in required fields (Name, Phone, and Product Required).'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const subject = `B2B Material Inquiry - ${formData.name}`;
      const body = `Dear Maruti Steel India team,

I would like to request a quotation for the following requirements:

- Contact Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- Phone Number: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Product Required: ${formData.product}

Additional Details / Message: 
${formData.message || 'None'}

Please reply with the pricing and availability at your earliest convenience.

Best regards,
${formData.name}`;

      const mailtoUrl = `mailto:marutisteelindia51@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open user mail client
      window.location.href = mailtoUrl;

      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        product: '',
        message: ''
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      console.error('Email action error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to open email client. Please email marutisteelindia51@gmail.com directly.'
      });
    }
  };

  return (
    <section id="contact" className="py-8 bg-gradient-lavender-soft/40 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/30 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-6">

          <p className="mt-2 text-3xl font-extrabold text-text-dark font-sans sm:text-4xl tracking-tight">
            Contact & Inquiry Center
          </p>

          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Direct Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] border border-secondary shadow-premium bg-white flex-grow flex flex-col justify-center text-left space-y-8"
            >
              <div>
                <h3 className="text-lg font-extrabold text-text-dark">Direct Contact</h3>
                <p className="text-xs text-text-muted mt-1">Connect or visit our corporate office.</p>
              </div>

              {/* Info List */}
              <div className="space-y-4">
                {/* Contact Person */}
                <div className="flex items-center gap-4 group p-4 rounded-2xl bg-lavender-light/35 border border-secondary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                    <User size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider leading-none">Owner</h4>
                    <p className="text-sm font-extrabold text-text-dark mt-1.5">Shravan Purohit</p>
                    <p className="text-xs text-text-muted mt-0.5">Managing Director</p>
                  </div>
                </div>

                {/* Phone Detail */}
                <a
                  href="tel:+919512865802"
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl bg-lavender-light/35 border border-secondary/40 hover:bg-white hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider leading-none">Mobile Number</h4>
                    <p className="text-sm font-extrabold text-text-dark mt-1.5 group-hover:text-primary transition-colors">+91 9512865802</p>
                  </div>
                </a>

                {/* Business Email */}
                <a
                  href="mailto:marutisteelindia51@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl bg-lavender-light/35 border border-secondary/40 hover:bg-white hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider leading-none">Business Email</h4>
                    <p className="text-sm font-extrabold text-text-dark mt-1.5 group-hover:text-primary transition-colors">marutisteelindia51@gmail.com</p>
                    <p className="text-xs text-text-muted mt-0.5">Send engineering drawings & RFQs</p>
                  </div>
                </a>

                {/* Factory Address */}
                <a
                  href="https://maps.google.com/?q=Shed+No.+13/4,+Laxmi+Estate,+Rakhial,+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer p-4 rounded-2xl bg-lavender-light/35 border border-secondary/40 hover:bg-white hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shrink-0 mt-0.5">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-extrabold text-text-muted tracking-wider leading-none">Factory & Warehouse</h4>
                    <p className="text-xs font-bold text-text-dark mt-1.5 group-hover:text-primary transition-colors leading-relaxed">
                      Shed No. 13/4, Laxmi Estate, Opp. Ajay Estate, Keval Kanta, Rakhial, Ahmedabad – 380023
                    </p>
                    <p className="text-[10px] text-text-muted mt-1">Gujarat, India</p>
                  </div>
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
                <span>Submit Inquiry</span>
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
                      <p className="font-bold">Inquiry Form Handled!</p>
                      <p className="font-normal text-emerald-700 mt-0.5">Your email composer has been opened. Please hit send to submit to marutisteelindia51@gmail.com.</p>
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
              <form onSubmit={handleEmailSubmit} className="space-y-5">
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
                      placeholder="Your Name"
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
                      placeholder="Valid 10 Digit Mobile Number"
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
                      placeholder="youremail@gmail.com"
                      className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold"
                    />
                  </div>
                </div>

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
                    placeholder="Material grade (e.g. 304 or 316L), schedules (SCH 10/40), and target dispatch schedules..."
                    className="w-full bg-lavender-light/30 border border-secondary/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-dark font-semibold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold py-4 rounded-xl text-xs shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Opening Mail Client...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
