import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import NewInMarket from '@/components/NewInMarket';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Hero />
        <FeaturedCollection />
        <NewInMarket />
      </main>
    </>
  );
}
