import React from 'react'

export default function page() {
  return (
    <section class="messages">
      {/* SIDEBAR */}
      <aside class="messages__sidebar">
        <div class="messages__sidebar-header">
          <h2>Messages</h2>
          <button class="messages__new">+</button>
        </div>

        <input
          type="text"
          class="messages__search"
          placeholder="Search conversations..."
        />

        <div class="messages__list">
          <div class="chat chat--active">
            <img src="avatar.jpg" alt="User" />
            <div class="chat__content">
              <h4>Acme Corp</h4>
              <p>Can you send the invoice?</p>
            </div>
            <span class="chat__time">2m</span>
          </div>

          <div class="chat chat--unread">
            <img src="avatar.jpg" alt="User" />
            <div class="chat__content">
              <h4>John Smith</h4>
              <p>Let’s schedule a call</p>
            </div>
            <span class="chat__badge">3</span>
          </div>
        </div>
      </aside>

      {/* CHAT */}
      <div class="messages__chat">
        <header class="messages__chat-header">
          <div class="chat-user">
            <img src="avatar.jpg" alt="User" />
            <div>
              <h4>Acme Corp</h4>
              <span>Online</span>
            </div>
          </div>

          <div class="chat-actions">
            <button>📞</button>
            <button>⋮</button>
          </div>
        </header>

        <div class="messages__body">
          <div class="message message--incoming">
            <p>Can you send the invoice today?</p>
            <span>10:32</span>
          </div>

          <div class="message message--outgoing">
            <p>Sure, I’ll send it in 10 minutes 👍</p>
            <span>10:33</span>
          </div>
        </div>

        <footer class="messages__input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </footer>
      </div>
    </section>
  )
}
