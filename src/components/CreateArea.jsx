import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (input.title !== "" && input.content !== "") {
      props.note(input);
      setInput({ title: "", content: "" });
    } else if (input.title !== "" || input.content === "") {
      setInput((prevValue) => {
        return { ...prevValue };
      });
    }
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }


  return (
    <div>
      <form className="create-note">

      {isExpanded && <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows = {isExpanded ? 3 : 1}
          value={input.content}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
          <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
