import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing.js';
import LocaleSwitcher from '../../components/LocaleSwitcher.js';
import { getMessages } from 'next-intl/server';
import '@/sass/style.scss';
import { ClientProvider } from '@/components/providers/ClientProvider.js';
import { cookies } from 'next/headers.js';
import { ModalProvider } from '@/components/providers/ModalProvider.js';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleRootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  // --- server-side read cookie ---
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value; // 'dark' | 'light' | undefined

  // decide html class (default to 'light' if no cookie)
  const htmlClass = themeCookie === 'dark' ? 'dark' : '';

  return (
    <html lang={locale} className={htmlClass}>
      <body>
        <ClientProvider>
          <ModalProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {routing.locales.includes('/login') ? <LocaleSwitcher /> : null}
              {children}
            </NextIntlClientProvider>
          </ModalProvider>
        </ClientProvider>
      </body>
    </html>
  );
}