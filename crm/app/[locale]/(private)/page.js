import React from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export default async function HomePage({ params }) {
  const { locale } = await params;

  // Встановлюємо локаль для запиту — важливо для статичного рендерингу
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
  <section className="dashboard">
    {/* HEADER */}
    <header className="dashboard__header">
      <div>
        <h1>Dashboard</h1>
        <p>Overview of system activity</p>
      </div>

      <div className="dashboard__actions">
        <button className="btn btn--ghost">Export</button>
        <button className="btn btn--primary">Create</button>
      </div>
    </header>

    {/* STATS */}
    <div className="dashboard__stats">
      <div className="stat-card">
        <span>Total Users</span>
        <strong>1,248</strong>
        <em className="up">+12%</em>
      </div>

      <div className="stat-card">
        <span>Active Deals</span>
        <strong>86</strong>
        <em className="up">+5%</em>
      </div>

      <div className="stat-card">
        <span>Open Tasks</span>
        <strong>132</strong>
        <em className="down">−3%</em>
      </div>

      <div className="stat-card">
        <span>Support Tickets</span>
        <strong>9</strong>
        <em className="warn">High</em>
      </div>
    </div>

    {/* MAIN GRID */}
    <div className="dashboard__grid">
      
      {/* ACTIVITY */}
      <div className="dashboard-card activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>
            <span>User John created deal</span>
            <time>2 min ago</time>
          </li>
          <li>
            <span>Task “Design review” completed</span>
            <time>15 min ago</time>
          </li>
          <li>
            <span>Support ticket closed</span>
            <time>1 hour ago</time>
          </li>
        </ul>
      </div>

      {/* TASKS */}
      <div className="dashboard-card tasks">
        <h3>Today’s Tasks</h3>

        <div className="task">
          <input type="checkbox" />
          <span>Call new client</span>
        </div>

        <div className="task">
          <input type="checkbox" />
          <span>Prepare invoice</span>
        </div>

        <div className="task">
          <input type="checkbox" />
          <span>Review support logs</span>
        </div>
      </div>

      {/* SUPPORT */}
      <div className="dashboard-card support">
        <h3>Support</h3>
        <p>3 tickets require attention</p>

        <button className="btn btn--primary btn--full">
          Open Support
        </button>
      </div>

    </div>
  </section>
  );
}
