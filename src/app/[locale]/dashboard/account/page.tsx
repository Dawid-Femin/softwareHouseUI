'use client';

import { useTranslations } from 'next-intl';
import { useAuth } from '@/components/providers/AuthProvider';

export default function AccountPage() {
  const t = useTranslations('dashboard');
  const { user } = useAuth();

  if (!user) return null;

  const rows = [
    { label: t('email'), value: user.email },
    { label: t('role'), value: user.role === 'admin' ? t('roleAdmin') : t('roleClient') },
  ];

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-6">{t('account')}</h1>
      <div className="border rounded-lg overflow-hidden">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center px-4 py-3 border-b last:border-b-0">
            <span className="w-40 text-sm text-muted-foreground">{label}</span>
            <span className="text-sm font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
