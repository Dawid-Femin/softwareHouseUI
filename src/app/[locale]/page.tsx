import { setRequestLocale } from 'next-intl/server';
import { BrandsSlider } from '@/components/sections/BrandsSlider';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Offer } from '@/components/sections/Offer';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <Hero />
      <BrandsSlider />
      <Offer />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
