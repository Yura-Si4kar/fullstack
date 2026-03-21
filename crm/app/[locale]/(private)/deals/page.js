import React from 'react'

export default function page() {
  return (
    <section className="deals">
      <header className="deals__header">
        <div className="deals__title">
          <h1>Deals</h1>
          <p>Track and manage your sales pipeline</p>
        </div>

        <div className="deals__actions">
          <select className="deals__select">
            <option>All stages</option>
            <option>New</option>
            <option>In progress</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          <button className="deals__btn deals__btn--primary">
            + New deal
          </button>
        </div>
      </header>

      <div className="deals__board">
        {/* COLUMN */}
        <div className="deals__column">
          <h3 className="deals__column-title">
            New
            <span className="deals__count">3</span>
          </h3>

          <div className="deals__card">
            <h4>Website redesign</h4>
            <p className="deals__client">Client: John Smith</p>

            <div className="deals__meta">
              <span className="badge badge--warning">$1,200</span>
              <span className="deals__date">Today</span>
            </div>
          </div>

          <div className="deals__card">
            <h4>Landing page</h4>
            <p className="deals__client">Client: Alice Moore</p>

            <div className="deals__meta">
              <span className="badge badge--success">$800</span>
              <span className="deals__date">Yesterday</span>
            </div>
          </div>
        </div>

        {/* COLUMN */}
        <div className="deals__column">
          <h3 className="deals__column-title">
            In progress
            <span className="deals__count">2</span>
          </h3>

          <div className="deals__card">
            <h4>CRM integration</h4>
            <p className="deals__client">Client: Acme Corp</p>

            <div className="deals__meta">
              <span className="badge badge--success">$3,500</span>
              <span className="deals__date">2 days ago</span>
            </div>
          </div>
        </div>

        {/* COLUMN */}
        <div className="deals__column deals__column--won">
          <h3 className="deals__column-title">
            Won
            <span className="deals__count">1</span>
          </h3>

          <div className="deals__card">
            <h4>Mobile App</h4>
            <p className="deals__client">Client: Startup Inc</p>

            <div className="deals__meta">
              <span className="badge badge--success">$5,000</span>
              <span className="deals__date">Last week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
