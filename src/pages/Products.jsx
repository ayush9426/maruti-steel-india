import Catalogue from '../components/Catalogue';

export default function Products({ onInquire }) {
  return (
    <div className="w-full">
      {/* Products Banner */}
      <div className="bg-navbar-bg text-white pt-28 pb-12 border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-3xl font-extrabold font-sans tracking-tight">
            Industrial Products Catalog
          </h1>
          <p className="text-secondary/80 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
            Discover Maruti Steel India's extensive inventory of ISO-certified stainless steel pipes, sheets, flanges, fasteners, and heavy-duty fittings. Specify custom sizing or grades in your quotation request.
          </p>
        </div>
      </div>

      <Catalogue onInquire={onInquire} />
    </div>
  );
}
