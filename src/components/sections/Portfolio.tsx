import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';

export function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
          <p className="text-center text-muted-foreground">{t('placeholder')}</p>
        </FadeIn>
      </div>
    </section>
  );
}
