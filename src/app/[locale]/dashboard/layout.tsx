'use client';

import { Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import { Link, useRouter } from '@/i18n/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { accessToken, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('dashboard');

  useEffect(() => {
    if (!isLoading && !accessToken) {
      router.replace('/login');
    }
  }, [isLoading, accessToken, router]);

  if (isLoading || !accessToken) return null;

  return (
    <div className="flex flex-1">
      <aside className="w-56 border-r min-h-full p-4 flex flex-col gap-1">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {t('menu')}
        </p>
        <Link
          href="/dashboard/users"
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted ${pathname.includes('/dashboard/users') ? 'bg-muted font-medium' : ''}`}
        >
          <Users className="w-4 h-4" />
          {t('users')}
        </Link>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
