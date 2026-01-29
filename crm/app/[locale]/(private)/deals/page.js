import React from 'react'

export default function page() {
  return (
    <section class="deals">
      <header class="deals__header">
        <div class="deals__title">
          <h1>Deals</h1>
          <p>Track and manage your sales pipeline</p>
        </div>

        <div class="deals__actions">
          <select class="deals__select">
            <option>All stages</option>
            <option>New</option>
            <option>In progress</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          <button class="deals__btn deals__btn--primary">
            + New deal
          </button>
        </div>
      </header>

      <div class="deals__board">
        {/* COLUMN */}
        <div class="deals__column">
          <h3 class="deals__column-title">
            New
            <span class="deals__count">3</span>
          </h3>

          <div class="deals__card">
            <h4>Website redesign</h4>
            <p class="deals__client">Client: John Smith</p>

            <div class="deals__meta">
              <span class="badge badge--warning">$1,200</span>
              <span class="deals__date">Today</span>
            </div>
          </div>

          <div class="deals__card">
            <h4>Landing page</h4>
            <p class="deals__client">Client: Alice Moore</p>

            <div class="deals__meta">
              <span class="badge badge--success">$800</span>
              <span class="deals__date">Yesterday</span>
            </div>
          </div>
        </div>

        {/* COLUMN */}
        <div class="deals__column">
          <h3 class="deals__column-title">
            In progress
            <span class="deals__count">2</span>
          </h3>

          <div class="deals__card">
            <h4>CRM integration</h4>
            <p class="deals__client">Client: Acme Corp</p>

            <div class="deals__meta">
              <span class="badge badge--success">$3,500</span>
              <span class="deals__date">2 days ago</span>
            </div>
          </div>
        </div>

        {/* COLUMN */}
        <div class="deals__column deals__column--won">
          <h3 class="deals__column-title">
            Won
            <span class="deals__count">1</span>
          </h3>

          <div class="deals__card">
            <h4>Mobile App</h4>
            <p class="deals__client">Client: Startup Inc</p>

            <div class="deals__meta">
              <span class="badge badge--success">$5,000</span>
              <span class="deals__date">Last week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
