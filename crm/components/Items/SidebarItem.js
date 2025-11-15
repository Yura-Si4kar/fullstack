'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const SidebarItem = ({ item }) => {
  const t = useTranslations();
  
  return (
    <li className="menu-item">
      <a className="menu-link" href={item.href}>
        <Image
          src={`${process.env.NEXT_PUBLIC_MY_API_URL}/${item.icon}`}
          alt={t(item.altKey || item.labelKey)}  // Alt для доступності, не текст
          width={25}
          height={25}
        />
        {t(item.labelKey)}
      </a>
    </li>
  )
}