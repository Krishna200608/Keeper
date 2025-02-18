import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note"
import notes from "./assets/notesdata";
import CreateArea from "./components/CreateArea";

function App() {

  const [caughtNote, setCaughtNote] = useState([])

  function catchNote(newNote){
    setCaughtNote((prevNotes)=>{
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setCaughtNote((prevNotes)=>{
      return prevNotes.filter((value, idx)=>{
          return idx !== id;
        });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea note = {catchNote} />
      
      {/* {notes.map(note => (
        <Note 
          key = {note.key}
          title = {note.title}
          content = {note.content}
        />
      ))} */}

      {caughtNote.map((note, idx) => (
        <Note
          key = {idx}
          id = {idx}
          title = {note.title}
          content = {note.content}

          deleteNote = {deleteNote}
           />
      ))}
      <Footer />
    </div>
  )
}

export default App;
