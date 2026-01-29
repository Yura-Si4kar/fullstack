'use client';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useTranslations } from 'use-intl';
import MyInput from '../UI/MyInputs/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import { useDispatch } from 'react-redux';
import { addRoleThunk } from '@/store/thunks/rolesThunks';

export default function AddRole({ open, onClose }) {
    const dispatch = useDispatch();
    const [roleName, setRoleName] = useState('');
    const t = useTranslations('roles');

    const onSubmit = (e) => {
        e.preventDefault();

        const roleData = {
            _id: Date.now().toString(),
            name: roleName,
            permissions: [],
            description: ''
        }
        
        dispatch(addRoleThunk({ name: roleData.name }));
        setRoleName('');
        onClose(roleData);
    }

    return (
        <Box className={`add-role ${open ? 'open' : ''}`}>
            <div className="add-role-popup">
                <div className="add-role-popup-header">
                    <h2>{t('modal.addTitle')}</h2>
                    <MyButton className="add-role-popup-close" onClick={onClose}>
                        &times;
                    </MyButton>
                </div>
                <form className="add-role-popup-form">
                    <MyInput
                        placeholder={t('modal.placeholder.roleName')}
                        value={roleName}
                        onChange={(e) => setRoleName(e.target.value)}
                    />
                </form>
                <div className="add-role-popup-actions">
                    <MyButton className="btn btn-secondary" onClick={onClose}>
                        {t('modal.buttons.cancel')}
                    </MyButton>
                    <MyButton className="btn btn-primary" onClick={onSubmit}>
                        {t('modal.buttons.save')}
                    </MyButton>
                </div>
            </div>
        </Box>
    )
}
