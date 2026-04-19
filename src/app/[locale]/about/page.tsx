import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-muted-foreground">[Placeholder]</p>
    </main>
  );
}
