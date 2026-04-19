import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/FadeIn';
import { Link } from '@/i18n/navigation';

export function Offer() {
  const t = useTranslations('offer');

  const services = [
    { key: 'service1', icon: '/icon-1.png' },
    { key: 'service2', icon: '/icon-2.png' },
    { key: 'service3', icon: '/icon-3.png' },
  ] as const;

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <div className="flex-1">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{t('title')}</h2>
            </div>
            <div className="md:w-72 border-l pl-6">
              <p className="text-muted-foreground italic">{t('subtitle')}</p>
            </div>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ key, icon }, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src={icon}
                      alt={t(`${key}.title`)}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t(`${key}.description`)}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors"
                  >
                    {t('readMore')} →
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
