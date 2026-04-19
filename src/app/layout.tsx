import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Software House',
  description: 'Professional software development services',
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
      </body>
    </html>
  );
}
