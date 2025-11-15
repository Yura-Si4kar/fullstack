'use client';

import store from '@/store';
import { Provider } from 'react-redux';

export function ClientProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
