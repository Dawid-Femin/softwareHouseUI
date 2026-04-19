import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Software House
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="hover:text-primary">
            O nas
          </Link>
          <Link href="#services" className="hover:text-primary">
            Usługi
          </Link>
          <Link href="#portfolio" className="hover:text-primary">
            Portfolio
          </Link>
          <Link href="#contact" className="hover:text-primary">
            Kontakt
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
