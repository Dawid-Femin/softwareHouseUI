'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold">Software House</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
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
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
