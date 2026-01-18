import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import { useTranslations } from 'next-intl';

export default function UsersActions({ onDelete, onEdit }) {
    const t = useTranslations('users');

    return (
        <div className="users-actions">
            <MyButton className="users-actions-edit" onClick={onEdit}>
                {t('users-actions.edit')}
            </MyButton>
            <MyButton className="users-actions-delete" onClick={onDelete}>
                {t('users-actions.delete')}
            </MyButton>
        </div>
    );
}
