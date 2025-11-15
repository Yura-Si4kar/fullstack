import React from 'react';
import { usersList } from '@/http/auth';
import AuthPage from './AuthPage';

export default async function Page(props) {
  const { locale } = await props.params;

  const users = await usersList();

  return <AuthPage locale={locale} initialUsers={users} />;
}
