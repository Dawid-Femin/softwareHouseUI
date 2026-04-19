import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = { title: 'Contact' };

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <Contact />
    </main>
  );
}
