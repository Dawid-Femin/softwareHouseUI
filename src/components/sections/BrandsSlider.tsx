'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { FadeIn } from '@/components/ui/FadeIn';

export function BrandsSlider() {
  const brands = [
    { name: 'Brand 1', logo: '/logo_3.png' },
    { name: 'Brand 2', logo: '/logo_3.png' },
    { name: 'Brand 3', logo: '/logo_3.png' },
    { name: 'Brand 4', logo: '/logo_3.png' },
    { name: 'Brand 5', logo: '/logo_3.png' },
    { name: 'Brand 6', logo: '/logo_3.png' },
    { name: 'Brand 7', logo: '/logo_3.png' },
    { name: 'Brand 8', logo: '/logo_3.png' },
  ];

  return (
    <div className="relative -mt-12 z-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn>
          <div className="bg-white dark:bg-card rounded-full py-6 px-6 relative overflow-hidden">
            <Marquee speed={40} gradient gradientColor="white" gradientWidth={20}>
              {brands.map((brand) => (
                <div key={brand.name} className="mx-8 w-32 flex items-center justify-center">
                  <div className="relative w-full h-10 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
