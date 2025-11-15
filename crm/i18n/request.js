// i18n/request.js
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing.js';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  // Перевіряємо чи локаль підтримується
  const locale = routing.locales.includes(requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});
