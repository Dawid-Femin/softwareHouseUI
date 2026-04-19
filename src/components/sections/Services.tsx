import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';

export function Services() {
  const t = useTranslations('services');

  const serviceKeys = ['web', 'mobile', 'consulting'] as const;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceKeys.map((key, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t(`items.${key}`)}</h3>
                <p className="text-muted-foreground">{t('placeholder')}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
