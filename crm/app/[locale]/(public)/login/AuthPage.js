'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import MyInput from '@/components/UI/MyInput/MyInput';
import MyButton from '@/components/UI/MyButton/MyButton';
import { Typography, Box, Container, TextField, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/store/thunks/authThunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '@/store/selectors/selectors';
import { setUsersList } from '@/store/slices/usersSlice';

export default function AuthPage({ locale, initialUsers }) {
  const auth = useSelector(selectIsAuth);
  const t = useTranslations('auth');
  const router = useRouter();
  const dispatch = useDispatch();
  const [users, setUsers] = useState(initialUsers);
  const [password, setPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (initialUsers.length) {
      dispatch(setUsersList(initialUsers)); // <-- гідратація
    }
  }, [initialUsers, dispatch]);

  useEffect(() => {
    if (auth) {
      router.replace(`/${locale}`);
    }
  }, [auth, locale, router]);

  const onSelect = (e) => {
    const value = e.target.value;
    setSelectedUser(value);

    const [name] = value.split(' (');
    const foundUser = users.find(u => u.name === name.trim());
    setUser(foundUser || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.email || !password) {
      setError(t('errors.password'));
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({ email: user.email, password }));
      
      if (loginUser.fulfilled.match(resultAction)) {
        router.replace(`/${locale}`);
      } else {
        setError(t('errors.authorization'));
      }
    } catch (error) {
      console.error(t('errors.login'), error);
    }
  };

  return (
    <Container className="auth-container">
      <Box className="auth-card">
        <Typography variant="h4" className="auth-title">
          {t('login')}
        </Typography>

        <form className="auth-form">
          <TextField
            select
            fullWidth
            className="auth-input"
            label={t('placeholder.label')}
            value={selectedUser}
            onChange={onSelect}
            variant="outlined"
            InputProps={{ style: { color: 'black' } }}
          >
            {users.map((user) => {
              const label = `${user.name} (${user.role})`;
              return (
                <MenuItem key={user._id} value={label}>
                  {label}
                </MenuItem>
              );
            })}
          </TextField>

          <MyInput
            className="auth-input"
            placeholder={t('placeholder.password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          {error && (
            <Typography className="auth-alert" variant="paragraph">
              {error}
            </Typography>
          )}

          <MyButton
            variant="contained"
            color="success"
            type="submit"
            className="auth-submit"
            onClick={handleSubmit}
          >
            {t('button.login')}
          </MyButton>
        </form>
      </Box>
    </Container>
  );
}
