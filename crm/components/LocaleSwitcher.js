'use client';

import { usePathname, useRouter } from 'next/navigation';
import { routing } from '../i18n/routing.js';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1]; // витягуємо локаль з URL

  const handleChange = (e) => {
    const newLocale = e.target.value;
    if (newLocale !== currentLocale) {
      // заміна локалі у URL
      const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
      router.push(newPath);
    }
  };

  return (
    <select value={currentLocale} onChange={handleChange}>
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
