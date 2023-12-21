// import React, { useState } from 'react'
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import InputField from '../InputField/Index';
// import './styles.css'

// function EditIButton(props) {
//     const [isEdit,setIsEdit] = useState(false)

//     function handleEdit() {

//         setIsEdit(true)
        
//       }

//       function Update() {
        
//       }

//   return (
//     <>
//    <div>
//      <button onClick={handleEdit}>
//       <FontAwesomeIcon icon={faEdit} size="2x" color="green" />
//       </button>
//       </div>
//       <div>
//       { 
//       isEdit &&
//        <form className='edit' action="" autoComplete="off">
//        <h1>Update Data</h1>
//         <input type="text" value={props.title} />
//         <input type="text" value={props.content} />
//         <button onClick={Update}>Update</button>
//        </form>
//       }
//       </div>
//       </>
//   )
// }

// export default EditIButton

import React, { useState } from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { Fab } from '@mui/material';


function EditIButton(props) {
  const [isEdit, setIsEdit] = useState();
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [updatedContent, setUpdatedContent] = useState(props.content);

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function handleTitleChange(event) {
    setUpdatedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setUpdatedContent(event.target.value);
  }

  function handleUpdate(e) {
    e.preventDefault(); 
    props.onUpdate(updatedTitle, updatedContent);
    setIsEdit(!isEdit);
  }

  return (
    <>
      
        <Fab   size="small" onClick={handleEdit} className='editIcon'>
          <FontAwesomeIcon icon={faEdit} size="1.5x" color="black" />
        </Fab>
    
      <div>
        {isEdit && (
          <form className='edit'>
            <h1>Update Data</h1>
            <input
              type="text"
              value={updatedTitle}
              onChange={handleTitleChange}
            />
            <input
              type="text"
              value={updatedContent}
              onChange={handleContentChange}
            />
            <button  onClick={(e)=>handleUpdate(e)}>Update</button>
          </form>
        )}
      </div>
    </>
  );
}

export default EditIButton;
