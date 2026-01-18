'use client';

import React, { useEffect, useState, useCallback } from 'react';
import MyButton from '@/components/UI/MyButton/MyButton';
import { useTranslations } from 'next-intl';
import TableList from '@/components/Lists/TableList';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersList } from '@/store/slices/usersSlice';
import AddUser from '@/components/Popup/AddUser';
import { selectUsersList } from '@/store/selectors/selectors';

export default function UsersPage({ initialUsers }) {
  const t = useTranslations('users');
  const dispatch = useDispatch();
  const usersList = useSelector(selectUsersList);

  const [isOpen, setIsOpen] = useState(false);
  const [editableUser, setEditableUser] = useState(null);

  const openAddUser = () => {
    setEditableUser(null);
    setIsOpen(true);
  };

  const openEditUser = useCallback((user) => {
    setEditableUser(user);
    setIsOpen(true);
  }, []);

  const updateUsersList = (updatedUser) => {
    if (!updatedUser?._id) return;

    const newList = usersList.some(u => u._id === updatedUser._id)
      ? usersList.map(u => (u._id === updatedUser._id ? updatedUser : u))
      : [...usersList, updatedUser];

    dispatch(setUsersList(newList));
  };

  useEffect(() => {
    if (usersList.length === 0 && initialUsers?.length) {
      dispatch(setUsersList(initialUsers));
    }
  }, [dispatch, initialUsers, usersList.length]);

  return (
    <section className="users">
      <div className="users__header">
        <h1 className="users__title">{t('userManagement')}</h1>
        <MyButton className="users__add-button" onClick={openAddUser}>
          {t('addUser')}
        </MyButton>
      </div>

      <table className="users__table">
        <thead className="users__table-header">
          <tr className="users__table-row">
            <th>{t('name')}</th>
            <th>{t('email')}</th>
            <th>{t('role')}</th>
            <th>{t('status')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody className="users__table-body">
          <TableList onEdit={openEditUser} />
        </tbody>
      </table>

      <AddUser
        open={isOpen}
        onClose={(user) => {
          setIsOpen(false);
          if (user) updateUsersList(user);
        }}
        editableUser={editableUser}
      />
    </section>
  );
}
