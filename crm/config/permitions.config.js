export const PERMISSION_GROUPS = [
  {
    key: 'users',
    labelKey: 'groups.users',
    permissions: [
      { key: 'users.view', labelKey: 'permissions.users.view' },
      { key: 'users.create', labelKey: 'permissions.users.create' },
      { key: 'users.edit', labelKey: 'permissions.users.edit' },
      { key: 'users.delete', labelKey: 'permissions.users.delete' },
    ]
  },
  {
    key: 'roles',
    labelKey: 'groups.roles',
    permissions: [
      { key: 'roles.view', labelKey: 'permissions.roles.view' },
      { key: 'roles.create', labelKey: 'permissions.roles.create' },
      { key: 'roles.edit', labelKey: 'permissions.roles.edit' },
      { key: 'roles.delete', labelKey: 'permissions.roles.delete' },
    ]
  },
  {
    key: 'dashboard',
    labelKey: 'groups.dashboard',
    permissions: [
      { key: 'dashboard.view', labelKey: 'permissions.dashboard.view' }
    ]
  }
];
