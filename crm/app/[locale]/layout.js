import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing.js';
import LocaleSwitcher from '../../components/LocaleSwitcher.js';
import { getMessages } from 'next-intl/server';
import '@/sass/style.scss';
import { ClientProvider } from '@/components/Layout/ClientProvider.js';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleRootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <ClientProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LocaleSwitcher />
            {children}
          </NextIntlClientProvider>
        </ClientProvider>
      </body>
    </html>
  );
}