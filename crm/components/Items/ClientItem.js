'use client';

import React, { useState } from 'react'
import UsersActions from '../Popup/UsersActions'
import MyButton from '../UI/MyButton/MyButton'
import { getInitials } from '@/utils/getInitials';

export default function ClientItem({ item }) {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev);

    const onClientDelete = () => {
        console.log("Delete user:", item._id);
        setOpen(false);
    }

    const handleEdit = () => {
        console.log("Edit user:", item._id);
        setOpen(false);
    };

    return (
        <tr>
            <td className="clients__user">
                <div className="clients__avatar">{getInitials(item.name)}</div>
                <span>{item.name}</span>
            </td>
                <td>{item.email}</td>
            <td>
                <span className="badge badge--success">{item.status}</span>
            </td>
            <td>{item.owner}</td>
            <td>{item.activity}</td>
            <td className="clients__menu" style={{ position: "relative" }}>
                <MyButton className="users__edit-button" onClick={toggleMenu}>
                    •••
                </MyButton>

                {open && (
                    <UsersActions 
                        onDelete={onClientDelete}
                        onEdit={handleEdit}
                    />
                )}
            </td>
        </tr>
    )
}
