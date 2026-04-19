'use client';

import { Check, Zap } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';
import { Link } from '@/i18n/navigation';

export function Hero() {
  const t = useTranslations('hero');

  const benefits = [t('benefit1'), t('benefit2'), t('benefit3'), t('benefit4')];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white mx-4 rounded-[2.5rem]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm">{t('badge')}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('title')}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
              >
                {t('cta')}
                <span>→</span>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 scale-90 animate-float-slow">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <path
                    fill="#60a5fa"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,15.6,81.4,31.2,73.1,45.2C64.8,59.2,53.8,71.6,40.3,78.8C26.8,86,10.8,88,-5.6,87.1C-22,86.2,-44,82.4,-59.2,73.2C-74.4,64,-82.8,49.4,-86.8,33.6C-90.8,17.8,-90.4,0.8,-86.5,-14.8C-82.6,-30.4,-75.2,-44.6,-64.8,-55.2C-54.4,-65.8,-41,-72.8,-27.1,-80.3C-13.2,-87.8,1.2,-95.8,16.5,-95.2C31.8,-94.6,30.6,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Floating icons */}
              <div className="absolute -left-4 top-12 w-28 h-28 animate-float-icon-1">
                <Image src="/rocket.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute -right-4 top-8 w-28 h-28 animate-float-icon-2">
                <Image src="/msg.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute -left-4 bottom-16 w-20 h-20 animate-float-icon-3">
                <Image src="/right-shape.png" alt="" fill className="object-contain" />
              </div>

              <Image
                src="/laptop.png"
                alt="Hero"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain relative z-10 animate-float-image scale-x-[-1]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
