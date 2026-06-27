import ContactComponent from '../components/Contact';

export default function Contact({ prefilledProduct }) {
  return (
    <div className="w-full">
      {/* Contact Banner */}
      <div className="bg-navbar-bg text-white pt-28 pb-12 border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-3xl font-extrabold font-sans tracking-tight">
            Contact Maruti Steel
          </h1>
          <p className="text-secondary/80 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
            Reach out directly to MD Shravan Purohit or submit your structural layout drawings for immediate quotation review.
          </p>
        </div>
      </div>

      <ContactComponent prefilledProduct={prefilledProduct} />
    </div>
  );
}
