'use client';

import { Grid } from '@mui/material';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import { selectIsAuth, selectIsLoading } from '@/store/selectors/selectors';
import Loading from '@/components/Loading';
import { useSelector } from 'react-redux';

export default function PrivateLayout({ children }) {
  const auth = useSelector(selectIsAuth);
  const loading = useSelector(selectIsLoading);

  if (loading) return <Loading />;

  return (
    <Grid container spacing={0}>
      <Grid item xs={3} style={{ borderRight: '1px solid #333', height: '100vh' }}>
        <Sidebar />
      </Grid>

      <Grid item xs={9} style={{ height: '100vh', overflowY: 'auto', padding: '20px' }}>
        <Header />
        {children}
      </Grid>
    </Grid>
  );
}