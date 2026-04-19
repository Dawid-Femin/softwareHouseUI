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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
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
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-full scale-90" />
              <Image
                src="/pngegg.png"
                alt="Hero"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
