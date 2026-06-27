import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Highlights />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}

