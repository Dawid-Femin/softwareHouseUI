'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-md hover:bg-muted transition-colors w-9 h-9"
      aria-label="Przełącz motyw"
    >
      <Sun className="absolute inset-0 m-auto h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute inset-0 m-auto h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
