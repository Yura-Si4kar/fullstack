import React from 'react'

export default function page() {
  return (
    <section className="files">
      {/* HEADER */}
      <header className="files__header">
        <div>
          <h1>Files</h1>
          <p>All documents and attachments</p>
        </div>

        <div className="files__actions">
          <button className="btn btn--ghost">New folder</button>
          <button className="btn btn--primary">Upload</button>
        </div>
      </header>

      {/* TOOLBAR */}
      <div className="files__toolbar">
        <input type="text" placeholder="Search files..." />

        <div className="files__filters">
          <select>
            <option>All files</option>
            <option>Documents</option>
            <option>Images</option>
            <option>PDF</option>
          </select>

          <button className="btn btn--icon">☰</button>
          <button className="btn btn--icon">⬚</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="files__table">
        <div className="files__row files__row--head">
          <span>Name</span>
          <span>Owner</span>
          <span>Size</span>
          <span>Updated</span>
          <span></span>
        </div>

        <div className="files__row">
          <div className="file">
            <span className="file__icon">📄</span>
            <span className="file__name">Contract.pdf</span>
          </div>
          <span>John Smith</span>
          <span>320 KB</span>
          <span>2 hours ago</span>
          <button className="file__menu">⋮</button>
        </div>

        <div className="files__row">
          <div className="file">
            <span className="file__icon">🖼</span>
            <span className="file__name">Preview.png</span>
          </div>
          <span>Marketing</span>
          <span>1.2 MB</span>
          <span>Yesterday</span>
          <button className="file__menu">⋮</button>
        </div>
      </div>

      {/* DROP ZONE */}
      <div className="files__drop">
        <p>Drag & drop files here or <span>browse</span></p>
      </div>
    </section>
  )
}
