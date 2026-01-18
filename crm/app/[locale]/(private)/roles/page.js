import { getRolesList } from '@/http/roles';
import React from 'react';
import RolesPage from './RolesPage';


export default async function page() {
  const {roles} = await getRolesList();

  return (
    <RolesPage initialRoles={roles} />
  )
}
