'use client';

import { Grid } from '@mui/material';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import { selectIsLoading, selectUser } from '@/store/selectors/selectors';
import Loading from '@/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { heartbeat } from '@/http/users';
import { fetchMe } from '@/store/thunks/authThunks';

export default function PrivateLayout({ children }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  console.log("User in layout:", user);

  // 🔥 1. Отримуємо юзера при завантаженні
  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  // 🔥 2. Запускаємо heartbeat коли юзер вже отриманий
  // useEffect(() => {
  //   if (!user?._id) return;

  //   heartbeat(user._id);

  //   const interval = setInterval(() => heartbeat(user._id), 60000);

  //   return () => clearInterval(interval);
  // }, [user?._id]);

  return (
    <>
      {loading && <Loading />}
      <Grid container spacing={0}>
        <Grid item xs={3} style={{ borderRight: '1px solid #333', height: '100vh' }}>
          <Sidebar />
        </Grid>

        <Grid item xs={9} style={{ height: '100vh', overflowY: 'auto', padding: '20px' }}>
          <Header />
          {children}
        </Grid>
      </Grid>
    </>
  );
}
