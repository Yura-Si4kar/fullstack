import React from 'react'

export default function page() {
  return (
    <section className="tasks">
      <header className="tasks__header">
        <div className="tasks__title">
          <h1>Tasks</h1>
          <p>Manage your daily and team tasks</p>
        </div>

        <div className="tasks__actions">
          <select className="tasks__select">
            <option>All tasks</option>
            <option>My tasks</option>
            <option>Overdue</option>
            <option>Completed</option>
          </select>

          <button className="tasks__btn tasks__btn--primary">
            + New task
          </button>
        </div>
      </header>

      <div className="tasks__layout">
        {/* TASK LIST */}
        <div className="tasks__list">
          <div className="task">
            <div className="task__left">
              <input type="checkbox" />
              <div className="task__content">
                <h4>Create landing page</h4>
                <p>Client: Acme Corp</p>
              </div>
            </div>

            <div className="task__right">
              <span className="badge badge--warning">High</span>
              <span className="task__date">Today</span>
            </div>
          </div>

          <div className="task task--completed">
            <div className="task__left">
              <input type="checkbox" defaultChecked />
              <div className="task__content">
                <h4>Fix CRM bugs</h4>
                <p>Assigned to: You</p>
              </div>
            </div>

            <div className="task__right">
              <span className="badge badge--success">Done</span>
              <span className="task__date">Yesterday</span>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="tasks__sidebar">
          <h3>Overview</h3>

          <div className="tasks__stats">
            <div className="tasks__stat">
              <strong>12</strong>
              <span>Total</span>
            </div>
            <div className="tasks__stat">
              <strong>4</strong>
              <span>In progress</span>
            </div>
            <div className="tasks__stat">
              <strong>3</strong>
              <span>Overdue</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
