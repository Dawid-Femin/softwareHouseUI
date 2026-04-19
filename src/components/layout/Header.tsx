import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Software House
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('about')}
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            {t('services')}
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            {t('portfolio')}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t('contact')}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
