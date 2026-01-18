import React from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function HomePage({ params }) {
  const { locale } = await params;

  // Встановлюємо локаль для запиту — важливо для статичного рендерингу
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
