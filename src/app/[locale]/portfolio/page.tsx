import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = { title: 'Portfolio' };

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-muted-foreground">[Placeholder]</p>
    </main>
  );
}
