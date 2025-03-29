import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { NotesContext } from "../context/NotesContext";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const { backendUrl, fetchedNotes } = useContext(NotesContext);

  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);

  // Add a new note.
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete a note.
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
    // If the deleted note was in edit mode, cancel edit.
    if (noteToEdit && noteToEdit.id === id) {
      setNoteToEdit(null);
    }
  };

  // Initiate edit mode by setting the note to be edited.
  const editNote = (note) => {
    setNoteToEdit(note);
  };

  // Update the note and exit edit mode.
  const updateNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
    setNoteToEdit(null);
  };

  // Cancel the edit mode.
  const cancelEdit = () => {
    setNoteToEdit(null);
  };

  const saveNotes = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/notes/replace-notes`,
        { notes }
      );

      if (response.data.success) {
        toast.success("Notes saved successfully.");
      } else {
        toast.error("Failed to save notes.");
      }
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("An error occurred while saving notes.");
    }
  };

  return (
    <div>
      <Header />
      <div className="createArea-div">
        <CreateArea
          addNote={addNote}
          updateNote={updateNote}
          noteToEdit={noteToEdit}
          cancelEdit={cancelEdit}
        />
        <div className="custom-button-div">
          <button onClick={saveNotes} className="custom-button">
            Save Notes
          </button>
        </div>
      </div>
      {notes &&
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))}

      <Footer />
    </div>
  );
};

export default Home;
