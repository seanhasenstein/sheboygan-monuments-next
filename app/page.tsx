import Hero from '@/components/Hero';
import Celebrate from '@/components/Celebrate';
import StoreInfoCard from '@/components/StoreInfoCard';
import Testimonials from '@/components/Testimonials';

export default async function Home() {
  return (
    <>
      <Hero />
      <Celebrate />
      <StoreInfoCard />
      <Testimonials />
    </>
  );
}
