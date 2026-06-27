import ContactComponent from '../components/Contact';

export default function Contact({ prefilledProduct }) {
  return (
    <div className="w-full pt-20 pb-4">
      <ContactComponent prefilledProduct={prefilledProduct} />
    </div>
  );
}
