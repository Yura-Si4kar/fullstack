'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const SidebarItem = ({ item }) => {
  const t = useTranslations();
  const params = useParams();
  const locale = params?.locale || "en";
  
  return (
    <li className="menu-item">
      <Link className="menu-link" href={`/${locale}${item.href}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_MY_API_URL}/${item.icon}`}
          alt={t(item.altKey || item.labelKey)}  // Alt для доступності, не текст
          width={25}
          height={25}
        />
        {t(item.labelKey)}
      </Link>
    </li>
  )
}