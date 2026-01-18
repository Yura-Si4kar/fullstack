import React from 'react'
import UsersPage from './UsersPage';
import { usersList } from '@/http/users';

export default async function Page() {
  const initialUsers = await usersList();

  return <UsersPage initialUsers={initialUsers} />;
}
