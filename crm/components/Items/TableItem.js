import React, { useState, useCallback } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import UsersActions from '../Popup/UsersActions';
import { deleteUser } from '@/store/thunks/usersThunks';
import { useDispatch } from 'react-redux';

export default function TableItem({ user, onEdit }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleMenu = () => setOpen(prev => !prev);

    const onUserDelete = useCallback(async () => {
        try {
            await dispatch(deleteUser(user._id)).unwrap();
            setOpen(false);
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    }, [dispatch, user._id]);

    const handleEdit = () => {
        onEdit(user);
        setOpen(false);
    };

    return (
        <tr className="users__table-row">
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.online ? <span>🟢 Online</span> : <span>🔴 Offline</span>}</td>

            <td style={{ position: "relative" }}>
                <MyButton className="users__edit-button" onClick={toggleMenu}>
                    ✏️
                </MyButton>

                {open && (
                    <UsersActions 
                        onDelete={onUserDelete}
                        onEdit={handleEdit}
                    />
                )}
            </td>
        </tr>
    );
}
