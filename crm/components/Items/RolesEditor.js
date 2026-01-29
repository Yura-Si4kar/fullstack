import { PERMISSION_GROUPS } from '@/config/permitions.config';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import MyInputCheckBox from '../UI/MyInputs/MyInputCheckBox';
import MyButton from '../UI/MyButton/MyButton';

export default function RoleEditor({ role, onChange, handleClick }) {
  const t = useTranslations('roles');
  const [readOnly, setReadOnly] = useState(true);

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
        <MyInputCheckBox
          type="text"
          value={role.name}
          readOnly={readOnly}
          onClick={() => setReadOnly(false)}
          onBlur={() => setReadOnly(true)}
          onChange={(e) =>
            onChange({ ...role, name: e.target.value })
          }
        />
      </div>
      <div className="roles__permissions">
        {PERMISSION_GROUPS.map(group => (
          <div key={group.key} className="roles__permission-group">
            <h3>{t(group.labelKey)}</h3>
            {group.permissions.map(p => (
              <label key={p.key} className="roles__checkbox">
                <MyInputCheckBox
                  type="checkbox"
                  checked={role.permissions.includes(p.key)}
                  onChange={() => togglePermission(p.key)} 
                />
                <span>{t(p.labelKey)}</span>
              </label>))}
          </div>))}
      </div>
      <div className="roles__actions">
        <MyButton className="roles__save-btn" onClick={() => handleClick(role)}> {t('buttons.save')} </MyButton>
      </div>
    </div>);
}
