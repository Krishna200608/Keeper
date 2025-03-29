import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ addNote, updateNote, noteToEdit, cancelEdit }) => {
  const [input, setInput] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  // When a note is selected for editing, pre-fill the form.
  useEffect(() => {
    if (noteToEdit) {
      setInput({ title: noteToEdit.title, content: noteToEdit.content });
      setIsExpanded(true);
    }
  }, [noteToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.content.trim()) {
      if (noteToEdit) {
        // In edit mode, update the note.
        updateNote(noteToEdit.id, input);
        // Exit edit mode.
        if (cancelEdit) cancelEdit();
      } else {
        // In add mode, create a new note.
        addNote(input);
      }
      setInput({ title: "", content: "" });
    }
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
          onChange={handleChange}
          onClick={() => setIsExpanded(true)}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
