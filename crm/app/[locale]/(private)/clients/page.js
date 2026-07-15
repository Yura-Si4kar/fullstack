import React from 'react';
import ClientPage from './ClientPage';
import { getClientsList } from '@/http/clients';

export default async function page() {
  const clientsList = await getClientsList();

  return <ClientPage initialClients={clientsList} />
}
