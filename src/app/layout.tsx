import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Software House',
    template: '%s | Software House',
  },
  description: 'Profesjonalny software house – tworzymy aplikacje webowe i mobilne.',
  metadataBase: new URL(process.env.SITE_URL || 'https://example.com'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Software House',
    title: 'Software House',
    description: 'Profesjonalny software house – tworzymy aplikacje webowe i mobilne.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software House',
    description: 'Profesjonalny software house – tworzymy aplikacje webowe i mobilne.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
