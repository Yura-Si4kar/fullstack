import React from 'react'

export default function page() {
  return (
    <section className="clients">
      <header className="clients__header">
        <div className="clients__title">
          <h1>Clients</h1>
          <p>Manage your clients and their activity</p>
        </div>

        <div className="clients__actions">
          <input
            type="text"
            className="clients__search"
            placeholder="Search clients..."
          />
          <button className="clients__btn clients__btn--primary">
            + Add client
          </button>
        </div>
      </header>

      <div className="clients__table-wrapper">
        <table className="clients__table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Last active</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="clients__user">
                <div className="clients__avatar">JS</div>
                <span>John Smith</span>
              </td>
              <td>john@example.com</td>
              <td>
                <span className="badge badge--success">Active</span>
              </td>
              <td>Client</td>
              <td>2 hours ago</td>
              <td className="clients__menu">•••</td>
            </tr>

            <tr>
              <td className="clients__user">
                <div className="clients__avatar">AM</div>
                <span>Alice Moore</span>
              </td>
              <td>alice@example.com</td>
              <td>
                <span className="badge badge--warning">Pending</span>
              </td>
              <td>Client</td>
              <td>Yesterday</td>
              <td className="clients__menu">•••</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
