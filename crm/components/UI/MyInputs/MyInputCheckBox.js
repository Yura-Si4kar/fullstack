'use client';
import React from 'react';

export default function MyInput({
  type = 'text',
  value,
  checked,
  onChange,
  ...rest
}) {
  if (type === 'checkbox') {
    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...rest}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

