'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const t = useTranslations('contact');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: implement form submission
    console.log(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register('name')}
              placeholder={t('name')}
              className="w-full px-4 py-2 border rounded-md bg-background"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{t('errors.nameMin')}</p>}
          </div>
          <div>
            <input
              {...register('email')}
              placeholder={t('email')}
              className="w-full px-4 py-2 border rounded-md bg-background"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{t('errors.emailInvalid')}</p>
            )}
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder={t('message')}
              rows={5}
              className="w-full px-4 py-2 border rounded-md bg-background resize-none"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{t('errors.messageMin')}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? t('submitting') : t('submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
