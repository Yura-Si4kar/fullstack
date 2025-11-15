import { NextResponse } from 'next/server';
import { routing } from './i18n/routing.js';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  // Пропускаємо системні/статичні маршрути
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Визначаємо локаль у шляху
  const parts = pathname.split('/');
  const localeInPath = routing.locales.includes(parts[1]) ? parts[1] : null;
  const locale = localeInPath || routing.defaultLocale;

  const pathWithoutLocale = localeInPath ? `/${parts.slice(2).join('/')}` : pathname;

  // Публічні шляхи
  const publicPaths = ['/login'];

  // Якщо відвідують публічну сторінку і є токен — редірект в приватну
  if (publicPaths.includes(pathWithoutLocale)) {
    if (token) {
      return NextResponse.redirect(new URL(`/${locale}`, req.url));
    }
    return NextResponse.next();
  }

  // Приватні сторінки — якщо немає токена, редірект на логін
  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  // Додаємо локаль, якщо її немає у шляху
  if (!localeInPath) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|_static|.*\\..*).*)'
};