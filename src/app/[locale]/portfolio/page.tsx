import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Portfolio' };

export default function PortfolioPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-muted-foreground">[Placeholder]</p>
    </main>
  );
}
