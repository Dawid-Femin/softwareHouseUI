import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">{t('body')}</p>
        </FadeIn>
      </div>
    </section>
  );
}
