import React from 'react';
import AuthPage from './AuthPage';
import { usersList } from '@/http/users';

export default async function Page(props) {
  const { locale } = await props.params;

  const users = await usersList();

  return <AuthPage locale={locale} initialUsers={users} />;
}
