import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Software House',
    template: '%s | Software House',
  },
  description: 'Professional software house – we build web and mobile applications.',
  metadataBase: new URL(process.env.SITE_URL || 'https://example.com'),
  openGraph: {
    type: 'website',
    siteName: 'Software House',
    title: 'Software House',
    description: 'Professional software house – we build web and mobile applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software House',
    description: 'Professional software house – we build web and mobile applications.',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
