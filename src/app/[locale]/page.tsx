import { About } from '@/components/sections/About';
import { BrandsSlider } from '@/components/sections/BrandsSlider';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BrandsSlider />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
