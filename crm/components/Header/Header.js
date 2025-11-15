'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SearchBar } from './SearchBar';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Локальний стан для поточної локалі (ініціалізуємо з URL)
  const [currentLocale, setCurrentLocale] = useState(() => {
    return pathname.split('/')[1] || 'en';
  });

  // Синхронізуємо локальний стан з URL при зміні pathname (hard refresh, back/forward)
  useEffect(() => {
    const localeFromUrl = pathname.split('/')[1] || 'en';
    setCurrentLocale(localeFromUrl);
  }, [pathname]);

  const switchLocale = (locale, e) => {
    // Миттєво оновлюємо локальний стан — стилі зміняться одразу!
    setCurrentLocale(locale);

    // Потім змінюємо URL
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <header className="header">
      <SearchBar />
      <div className="header-content">
        <div className="header-actions">
          <button className="header-action-button" type="button">
            <Image
              src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/notification.svg`}
              alt="Notifications"
              width={24}
              height={24}
              className="header-action-icon"
            />
          </button>
          <div className="language-switcher">
            <button
              className={`header-language-button ${currentLocale === 'uk' ? 'active' : ''}`}
              onClick={() => switchLocale('uk')}
            >
              uk
            </button>{' '}
            |{' '}
            <button
              className={`header-language-button ${currentLocale === 'en' ? 'active' : ''}`}
              onClick={(e) => switchLocale('en', e)}
            >
              en
            </button>
          </div>
        </div>
        <button className="header-user-button" type="button">
          <Image
            src={`${process.env.NEXT_PUBLIC_MY_API_URL}/pictures/user.jpg`}
            alt="User"
            width={32}
            height={32}
            className="header-user-avatar"
          />
          <span className="header-user-name">John Doe</span>
          <span>&#9662;</span>
        </button>
      </div>
    </header>
  );
}
