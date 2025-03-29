import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Note = ({ id, title, content, deleteNote, editNote }) => {
  const handleDelete = () => {
   // console.log(id);
    deleteNote(id);
  };

  const handleEdit = () => {
    // Pass the current note data to the parent component to trigger edit mode.
    editNote({ id, title, content });
  };

  return (
    <div className="note">
      <h1 className="">{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
        <EditIcon />
      </button>
    </div>
  );
};

export default Note;
