import React, { useState } from "react";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: noteText,
        },
      ]);
      setNoteText("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Note App</h1>
      <div className="input-container">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
