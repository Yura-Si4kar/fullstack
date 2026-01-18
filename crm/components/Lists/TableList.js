'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import TableItem from '../Items/TableItem';
import { selectUsersList } from '@/store/selectors/selectors';

export default function TableList({ onEdit }) {
    const users = useSelector(selectUsersList);

    return users.map(user => (
        <TableItem key={user._id} user={user} onEdit={onEdit} />
    ));
}
