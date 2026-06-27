import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}

