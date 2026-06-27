import Catalogue from '../components/Catalogue';

export default function Products({ onInquire }) {
  return (
    <div className="w-full">
      {/* Products Banner */}
      <div className="bg-gradient-lavender-soft/60 pt-20 pb-8 border-b border-secondary/35 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black font-sans tracking-tight text-gradient">
            Industrial Products Catalog
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-2 font-semibold uppercase tracking-wider">
            Premium Stainless Steel Pipes, Fittings, Flanges & Materials
          </p>
        </div>
      </div>

      <Catalogue onInquire={onInquire} />
    </div>
  );
}
