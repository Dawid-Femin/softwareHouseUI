import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('subtitle')}</p>
        </FadeIn>
      </div>
    </section>
  );
}
