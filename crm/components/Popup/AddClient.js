'use client';
import React, { useState } from 'react';
import MyInput from '../UI/MyInputs/MyInput';
import { Box, MenuItem, TextField } from '@mui/material';
import { useTranslations } from 'use-intl';
import { STATUS_SELECT_OPTIONS } from '@/config/select.config';
import MySelect from '../UI/MySelect/MySelect';

export default function AddClient({ open, setOpen }) {
    const t = useTranslations('client');
    const [selectedStatus, setSelectedStatus] = useState('');

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
        createdBy: '',
        owner: '',
        notes: '',
        avatar: '',
    });

    const onSelect = (e) => {
        const value = e.target.value;
        setSelectedStatus(value);
    };

    const onChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <Box className={`add-client ${open ? 'open' : ''}`}>
            <div className="add-client-popup">
                <div className='add-client-popup-header'>
                    <h1>{t('modal.title')}</h1>
                    <button 
                        className="add-client-close-btn" 
                        type='button' 
                        onClick={() => setOpen(false)}
                    >
                        &times;
                    </button>
                </div>
                
                <form className="add-client-form" onSubmit={onSubmit}>
                    <MyInput type='text' value={form.name} onChange={e => onChange("name", e.target.value)} placeholder={t('modal.placeholders.name')} />
                    <MyInput type='email' value={form.email} onChange={e => onChange("email", e.target.value)} placeholder={t('modal.placeholders.email')}/>
                    <MyInput type='text' value={form.phone} onChange={e => onChange("phone", e.target.value)} placeholder={t('modal.placeholders.phone')}/>
                    <MySelect
                        options={STATUS_SELECT_OPTIONS}
                        placeholder={t('modal.placeholders.status')}
                        name="status"
                        value={selectedStatus}
                        onChange={onSelect}
                    ></MySelect>
                    {/* <MyInput type='text' value={form.createdBy} onChange={e => onChange("createdBy", e.target.value)} placeholder={t('modal.placeholders.created')}/> */}
                    <MyInput type='text' value={form.owner} onChange={e => onChange("owner", e.target.value)} placeholder={t('modal.placeholders.owner')}/>
                    
                    <div className="full-width">
                        <label style={{display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.8rem'}}>{t('modal.placeholders.label')}</label>
                        <MyInput type='file' onChange={e => onChange("avatar", e.target.files[0])}/>
                    </div>

                    <textarea 
                        value={form.notes} 
                        onChange={e => onChange("notes", e.target.value)} 
                        placeholder={t('modal.placeholders.notes')}
                    />

                    <div className="add-client-actions full-width">
                        <button type="button" className="btn-cancel" onClick={() => setOpen(false)}>
                            {t('modal.actions.cancel')}
                        </button>
                        <button type="submit" className="btn-save">
                            {t('modal.actions.save')}
                        </button>
                    </div>
                </form>
            </div>
        </Box>
    );
}