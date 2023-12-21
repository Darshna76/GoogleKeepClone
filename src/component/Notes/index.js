
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ColorPicker from "../ColorPicker/Index";
import { Fab } from "@mui/material";
// import ColorPicker from "./ColorPicker/Index";
import './styles.css'

function Notes(props) {


  function handleClick() {

    const isConfirmed = window.confirm("Are you sure you want to delete this note?");

    if (isConfirmed) {
      props.onDelete(props.id);
    }
  }

  const noteStyle = {
    backgroundColor: props.color || "white",
  };

  return (
    <div className="note" style={noteStyle}>
    <div className="noteData">
      <p style={{fontSize:""}}>{props.title}</p>
      <p>{props.content}</p>
      </div>
      <div className="icons">
      <Fab size = "small" onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} size="1.5x" color="black" />
      </Fab>

   
      <ColorPicker
        selectedColor={props.color || "#ffffff"}
        onSelectColor={(color) => props.onSelectColor(color)}
      />
      </div>
    </div>
  );
}

export default Notes;
