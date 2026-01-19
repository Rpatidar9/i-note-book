import React from "react";

function NoteItem({ note }) {
  return (
    <div className="card p-3 h-100">
      <div className="d-flex justify-content-between align-items-start">
        <span className="fw-semibold">{note.title}</span>
        <div>
          <i className="bi bi-trash mx-1 cursor-pointer"></i>
          <i className="bi bi-pencil-square mx-1 cursor-pointer"></i>
        </div>
      </div>

      <p className="text-muted mt-2 mb-0">
        {note.description}
      </p>
    </div>
  );
}

export default NoteItem;
