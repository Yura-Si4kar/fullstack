import React from 'react'

export default function Support() {
  return (
    // OVERLAY
    <div className="support-modal__overlay">
        <div className="support-modal">
            
            {/* HEADER */}
            <header className="support-modal__header">
            <div>
                <h3>Support request</h3>
                <span>#SUP-2391 · Open</span>
            </div>

            <button className="support-modal__close">✕</button>
            </header>

            {/* USER INFO */}
            <div className="support-modal__user">
            <img src="/avatar.png" alt="User avatar" />
            <div>
                <strong>John Doe</strong>
                <span>john.doe@email.com</span>
            </div>
            <span className="support-modal__priority high">High</span>
            </div>

            {/* MESSAGES */}
            <div className="support-modal__messages">
            <div className="message message--user">
                <p>I can’t upload files, getting error 403.</p>
                <span>10:21</span>
            </div>

            <div className="message message--support">
                <p>Thanks for reporting, we’re checking this.</p>
                <span>10:24</span>
            </div>
            </div>

            {/* REPLY */}
            <div className="support-modal__reply">
            <textarea placeholder="Write a reply..."></textarea>

            <div className="support-modal__actions">
                <button className="btn btn--ghost">Close ticket</button>
                <button className="btn btn--primary">Send reply</button>
            </div>
            </div>

        </div>
    </div>
  )
}
