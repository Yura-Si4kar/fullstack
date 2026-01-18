'use client';

import React, { useEffect, useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import MySelect from '../UI/MySelect/MySelect';
import { registerUser } from '@/store/thunks/authThunks';
import { updateUserThunk } from '@/store/thunks/usersThunks';
import { useDispatch } from 'react-redux';
import { ROLE_SELECT_OPTIONS } from '@/config/roles.config';

export default function AddUser({ open, onClose, editableUser }) {
  const t = useTranslations('users');
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: null
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editableUser) {
      setForm({
        name: editableUser.name || '',
        email: editableUser.email || '',
        password: '',
        role: ROLE_SELECT_OPTIONS.find(opt => opt.value === editableUser.role) || null,
      });
    } else {
      setForm({ name: '', email: '', password: '', role: null });
      setError('');
    }
  }, [editableUser]);

  const onChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const onCancel = () => onClose();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!editableUser) {
      if (!form.name || !form.email || !form.password || !form.role) {
        return setError(t('modal.alert'));
      }

      try {
        const data = {
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role.value,
          avatar: "picture"
        };

        const { user } = await dispatch(registerUser(data)).unwrap();
        return onClose(user);

      } catch (err) {
        console.error(err);
        return setError("Registration failed");
      }
    }

    // UPDATE USER
    try {
      const updateData = { userId: editableUser._id };

      if (form.name !== editableUser.name) updateData.name = form.name;
      if (form.email !== editableUser.email) updateData.email = form.email;
      if (form.role?.value !== editableUser.role) updateData.role = form.role.value;
      if (form.password) updateData.password = form.password;

      const updatedUser = await dispatch(updateUserThunk(updateData)).unwrap();
      onClose(updatedUser);

    } catch (err) {
      console.error(err);
      setError("Update failed");
    }
  };

  return (
    <Box className={`add-user ${open ? 'open' : ''}`}>
      <div className="add-user-popup">

        <div className="add-user-popup-header">
          <h2>{editableUser ? t('editUser') : t('addUser')}</h2>
          <MyButton className="add-user-popup-close" onClick={onCancel}>
            &times;
          </MyButton>
        </div>

        <form className="add-user-form" onSubmit={onSubmit}>
          <MyInput
            type="text"
            value={form.name}
            onChange={e => onChange("name", e.target.value)}
            placeholder={t('modal.placeholder.name')}
          />

          <MyInput
            type="email"
            value={form.email}
            onChange={e => onChange("email", e.target.value)}
            placeholder={t('modal.placeholder.email')}
          />

          <MyInput
            type="password"
            value={form.password}
            onChange={e => onChange("password", e.target.value)}
            placeholder={t('modal.placeholder.password')}
          />
          <label className='add-user-form-label'>
          <MySelect
            options={ROLE_SELECT_OPTIONS}
            value={form.role}
            onChange={val => onChange("role", val)}
            placeholder={t('modal.placeholder.role')}
          />
          </label>
          {error && <p className="error">{error}</p>}

          <div className="add-user-form-actions">
            <MyButton type="submit">{t('modal.buttons.save')}</MyButton>
            <MyButton onClick={onCancel}>{t('modal.buttons.cancel')}</MyButton>
          </div>
        </form>
      </div>
    </Box>
  );
}
