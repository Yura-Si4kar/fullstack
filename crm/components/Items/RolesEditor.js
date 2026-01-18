import { PERMISSION_GROUPS } from '@/config/permitions.config';
import { useTranslations } from 'next-intl';
import React from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';

export default function RoleEditor({ role, onChange }) {
  const t = useTranslations('roles');

  const togglePermission = (perm) => {
    const updated = role.permissions.includes(perm)
      ? role.permissions.filter(p => p !== perm)
      : [...role.permissions, perm];

    onChange({ ...role, permissions: updated });
  };

  return (
    <div className="roles__editor">
      <h2 className="roles__editor-title">{t('editRole')}</h2>
      <div className="roles__field">
        <label>{t('roleName')}</label>
        <MyInput type="text" value={role.name} disabled />
      </div>
      <div className="roles__permissions">
        {PERMISSION_GROUPS.map(group => (
          <div key={group.key} className="roles__permission-group">
            <h3>{t(group.labelKey)}</h3>
            {group.permissions.map(p => (
              <label key={p.key} className="roles__checkbox">
                <MyInput
                  type="checkbox"
                  checked={role.permissions.includes(p.key)}
                  onChange={() => togglePermission(p.key)} 
                />
                <span>{t(p.labelKey)}</span>
              </label>))}
          </div>))}
      </div>
      <div className="roles__actions">
        <MyButton className="roles__save-btn"> {t('buttons.save')} </MyButton>
      </div>
    </div>);
}
