import React, { useState, useEffect } from "react";
import "./Notes.css";

const Notes = () => {
  const [note, setNote] = useState(localStorage.getItem("superapp-note") || "");

  useEffect(() => {
    localStorage.setItem("superapp-note", note);
  }, [note]);

  return (
    <div className="notes-card">
      <h2>All notes</h2>

      <textarea
        className="notes-input"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />
    </div>
  );
};

export default Notes;