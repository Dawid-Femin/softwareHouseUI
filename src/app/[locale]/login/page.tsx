'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from '@/i18n/navigation';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const t = useTranslations('auth');
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      router.push('/');
    } catch {
      setError('root', { message: t('errors.invalid') });
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center py-20 px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('login')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder={t('email')}
              className="w-full px-4 py-2 border rounded-md bg-background"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{t('errors.emailInvalid')}</p>
            )}
          </div>
          <div>
            <input
              {...register('password')}
              type="password"
              placeholder={t('password')}
              className="w-full px-4 py-2 border rounded-md bg-background"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{t('errors.passwordMin')}</p>
            )}
          </div>
          {errors.root && <p className="text-sm text-red-500 text-center">{errors.root.message}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? t('submitting') : t('submit')}
          </button>
        </form>
      </div>
    </main>
  );
}
