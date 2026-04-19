'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'en' ? 'pl' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-sm font-medium px-2 py-1 rounded-md hover:bg-muted transition-colors"
      aria-label="Switch language"
    >
      {routing.locales.find((l) => l !== locale)?.toUpperCase()}
    </button>
  );
}
