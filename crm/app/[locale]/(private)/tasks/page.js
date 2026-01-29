import React from 'react'

export default function page() {
  return (
    <section class="tasks">
      <header class="tasks__header">
        <div class="tasks__title">
          <h1>Tasks</h1>
          <p>Manage your daily and team tasks</p>
        </div>

        <div class="tasks__actions">
          <select class="tasks__select">
            <option>All tasks</option>
            <option>My tasks</option>
            <option>Overdue</option>
            <option>Completed</option>
          </select>

          <button class="tasks__btn tasks__btn--primary">
            + New task
          </button>
        </div>
      </header>

      <div class="tasks__layout">
        {/* TASK LIST */}
        <div class="tasks__list">
          <div class="task">
            <div class="task__left">
              <input type="checkbox" />
              <div class="task__content">
                <h4>Create landing page</h4>
                <p>Client: Acme Corp</p>
              </div>
            </div>

            <div class="task__right">
              <span class="badge badge--warning">High</span>
              <span class="task__date">Today</span>
            </div>
          </div>

          <div class="task task--completed">
            <div class="task__left">
              <input type="checkbox" checked />
              <div class="task__content">
                <h4>Fix CRM bugs</h4>
                <p>Assigned to: You</p>
              </div>
            </div>

            <div class="task__right">
              <span class="badge badge--success">Done</span>
              <span class="task__date">Yesterday</span>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside class="tasks__sidebar">
          <h3>Overview</h3>

          <div class="tasks__stats">
            <div class="tasks__stat">
              <strong>12</strong>
              <span>Total</span>
            </div>
            <div class="tasks__stat">
              <strong>4</strong>
              <span>In progress</span>
            </div>
            <div class="tasks__stat">
              <strong>3</strong>
              <span>Overdue</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
