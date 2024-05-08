import Animation from '@/components/Animation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <section className="bg-p200 min-h-screen select-none flex flex-col justify-center overflow-hidden">
      <Animation />
      <Footer />
    </section>
  );
}
