// src/components/NoteList.js
import React from "react";
import Note from "./Note";
import "../App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NoteList = ({ notes, onDelete }) => {
  return (
    <TransitionGroup className="note-list">
      {notes.map((note) => (
        <CSSTransition key={note.id} timeout={500} classNames="note">
          <Note key={note.id} note={note} onDelete={onDelete} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NoteList;
