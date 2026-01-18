import React from 'react';
import { useTranslations } from 'next-intl';

export default function RolesList({ roles, onOpen, activeRole, onSelect }) {
    const t = useTranslations('roles');

    return (
        <aside className="roles__sidebar">
            <h2>{t('roleManagement')}</h2>
            <div className="roles__sidebar-header">
                <button 
                    className="roles__add-btn" 
                    onClick={onOpen}
                >
                    + {t('addRole')}
                </button>
            </div>

            <ul className="roles__list">
                {roles.map(role => (
                <li
                    key={role._id}
                    className={`roles__item ${
                    activeRole?._id === role._id ? 'active' : ''
                    }`}
                    onClick={() => onSelect(role)}
                >
                    {role.name}
                </li>
                ))}
            </ul>
        </aside>
    );
}
