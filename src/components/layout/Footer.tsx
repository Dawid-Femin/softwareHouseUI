import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Software House. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
