'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '@/components/providers/AuthProvider';
import { authApi, usersApi } from '@/lib/auth';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['admin', 'client']),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export default function UsersPage() {
  const t = useTranslations('dashboard');
  const tAuth = useTranslations('auth');
  const { accessToken } = useAuth();
  const queryClient = useQueryClient();
  const [formError, setFormError] = useState('');

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => usersApi.getAll(accessToken!),
    enabled: !!accessToken,
  });

  const { mutate: createUser, isPending } = useMutation({
    mutationFn: (data: CreateUserData) =>
      authApi.register(data.email, data.password, data.role, accessToken!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      reset();
      setFormError('');
    },
    onError: (e: Error) => setFormError(e.message),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { role: 'client' },
  });

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <h1 className="text-2xl font-bold">{t('users')}</h1>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium">{t('email')}</th>
              <th className="text-left px-4 py-3 font-medium">{t('role')}</th>
              <th className="text-left px-4 py-3 font-medium">{t('createdAt')}</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-muted-foreground">
                  {t('loading')}
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-muted-foreground">
                  {t('noUsers')}
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Create user form */}
      <div className="border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">{t('createUser')}</h2>
        <form
          onSubmit={handleSubmit((d) => createUser(d))}
          className="flex flex-col gap-3 max-w-sm"
        >
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder={tAuth('email')}
              className="w-full px-4 py-2 border rounded-md bg-background text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{tAuth('errors.emailInvalid')}</p>
            )}
          </div>
          <div>
            <input
              {...register('password')}
              type="password"
              placeholder={tAuth('password')}
              className="w-full px-4 py-2 border rounded-md bg-background text-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{tAuth('errors.passwordMin')}</p>
            )}
          </div>
          <select
            {...register('role')}
            className="w-full px-4 py-2 border rounded-md bg-background text-sm"
          >
            <option value="client">{t('roleClient')}</option>
            <option value="admin">{t('roleAdmin')}</option>
          </select>
          {formError && <p className="text-xs text-red-500">{formError}</p>}
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 disabled:opacity-50"
          >
            {isPending ? t('creating') : t('createUser')}
          </button>
        </form>
      </div>
    </div>
  );
}
