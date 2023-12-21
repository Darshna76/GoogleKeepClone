import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Zoom } from "@mui/material";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

function InputField(props) {
  // Declare state variable for expanding input component
  const [isExpanded, setExpanded] = useState(false);

  // Declare state variable for note entered by user
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Update note to user input 
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Submit note entered by user
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  // Expand note card
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
       
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 2 : 1}
          
            style={isExpanded ?  {}: {borderTop: "2px solid black"} }
          

        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} style = {{position:"absolute",top:"7.3rem"}}>
          <FontAwesomeIcon icon={faPlus} size="2x" color="black"  />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputField;