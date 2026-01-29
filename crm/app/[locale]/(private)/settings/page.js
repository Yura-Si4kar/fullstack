import React from 'react'

export default function page() {
  return (
    <section className="settings">
      {/* SIDEBAR */}
      <aside className="settings__sidebar">
        <h2>System</h2>

        <nav className="settings__nav">
          <button className="settings__nav-item active">General</button>
          <button className="settings__nav-item">Users & Roles</button>
          <button className="settings__nav-item">Permissions</button>
          <button className="settings__nav-item">Security</button>
          <button className="settings__nav-item">Notifications</button>
          <button className="settings__nav-item">Integrations</button>
          <button className="settings__nav-item">Storage</button>
          <button className="settings__nav-item">Logs</button>
        </nav>
      </aside>

      {/* CONTENT */}
      <div className="settings__content">
        <header className="settings__header">
          <h1>System Settings</h1>
          <p>Manage global configuration of your system</p>
        </header>

        {/* SECTION */}
        <div className="settings__section">
          <h3>General</h3>

          <div className="settings__card">
            <label>
              Application name
              <input type="text" value="My CRM" />
            </label>

            <label>
              Default language
              <select>
                <option>English</option>
                <option>Українська</option>
              </select>
            </label>

            <label>
              Timezone
              <select>
                <option>UTC</option>
                <option>Europe/Kyiv</option>
              </select>
            </label>
          </div>
        </div>

        {/* SECTION */}
        <div className="settings__section">
          <h3>Security</h3>

          <div className="settings__card settings__card--switches">
            <div className="switch">
              <div>
                <strong>Two-factor authentication</strong>
                <span>Require 2FA for all users</span>
              </div>
              <input type="checkbox" checked />
            </div>

            <div className="switch">
              <div>
                <strong>Password expiration</strong>
                <span>Force password change every 90 days</span>
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="settings__actions">
          <button className="btn btn--ghost">Cancel</button>
          <button className="btn btn--primary">Save changes</button>
        </div>
      </div>
    </section>
  )
}
