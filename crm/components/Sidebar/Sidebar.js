'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SidebarItem } from '../Items/SidebarItem';
import menuItems from '@/navigation';
import DarkModeBtn from '../UI/DarkModeBtn/DarkModeBtn';
import { logout } from '@/http/auth';
import { useParams, useRouter } from 'next/navigation';

export default function Sidebar() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale || 'en';

  const onClick = async () => {
    try {
      await logout();
      router.push(`/${locale}/login`);
    } catch (error) {
      console.error('Logout error:', error);
      router.push(`/${locale}/login`);
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-top">
          <a href="/" className="sidebar-logo-link" aria-label={t('sidebar.logoAlt')}>
            <Image
              src={`${process.env.NEXT_PUBLIC_MY_API_URL}/logo.svg`}
              className="sidebar-logo"
              alt={t('sidebar.logoAlt')}
              width={72}
              height={40}
              priority
            />
          </a>
          <DarkModeBtn />
        </div>
        <ul className="menu" role="navigation">
          {menuItems.map((item, index) => <SidebarItem key={index} item={item} />)}
        </ul>
      </div>
      <div className="sidebar-footer">
        <Image
          src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/illustration.svg`}
          className="sidebar-footer-illustration"
          alt="Illustration"
          width={140}
          height={124}
        />
        <div>
          <button type="button" className="sidebar-footer-button" onClick={() => { /* логіка підтримки */ }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/support.svg`}
              alt="Support"
              width={25}
              height={25}
            />
            {t('sidebar.buttons.support')}
          </button>
          <button type="button" className="sidebar-footer-button" onClick={() => onClick()}>
            <Image
              src={`${process.env.NEXT_PUBLIC_MY_API_URL}/svg/logout.svg`}
              alt="Logout"
              width={25}
              height={25}
            />
            {t('sidebar.buttons.logout')}
          </button>
        </div>
      </div>
    </aside>
  );
}