


// import React, { useState } from "react";
// import InputField from "./component/InputField/Index";
// import Notes from "./component/Notes/index";
// import EditIButton from "./component//EditButton/Index";
// import ColorPicker from "./component/ColorPicker/Index";

// function App() {
//   const [notes, setNotes] = useState(() => {
//     const data = JSON.parse(localStorage.getItem('notes'));
//     return data ? data : [];
//   });
//   const [selectedColor, setSelectedColor] = useState("#ffffff");


//   const saveNotesToLocalStorage = (updatedNotes) => {
//     localStorage.setItem("notes", JSON.stringify(updatedNotes));
//   };

//   const addNote = (newNote) => {
//     setNotes((prevNotes) => {
//       const updatedNotes = [...prevNotes, newNote];
//       saveNotesToLocalStorage(updatedNotes);
//       return updatedNotes;
//     });
//   };

//   const updateNote = (index, updatedTitle, updatedContent) => {
//     setNotes((prevNotes) => {
//       const updatedNotes = [...prevNotes];
//       updatedNotes[index] = { title: updatedTitle, content: updatedContent };
//       saveNotesToLocalStorage(updatedNotes);
//       return updatedNotes;
//     });
//   };

//   const deleteNote = (id) => {
//     setNotes((prevNotes) => {
//       const updatedNotes = prevNotes.filter((_, index) => index !== id);
//       saveNotesToLocalStorage(updatedNotes);
//       return updatedNotes;
//     });
//   };

//   return (
//     <div>
//       <InputField onAdd={addNote} />
//       {notes.map((noteItem, index) => (
//         <React.Fragment key={index}>
//           <Notes
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={() => deleteNote(index)}
//             color={selectedColor}
//           />
//           <EditIButton
//             title={noteItem.title}
//             content={noteItem.content}
//             onUpdate={(updatedTitle, updatedContent) =>
//               updateNote(index, updatedTitle, updatedContent)
//             }
           
//           />
//            <ColorPicker selectedColor={selectedColor}
//             onSelectColor={(color) => setSelectedColor(color)}
//           />
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default App;



// App component
import React, { useState } from "react";
import InputField from "./component/InputField/Index";
import Notes from "./component/Notes/index";
import EditIButton from "./component/EditButton/Index"; // Import your EditIButton component
import './App.css'

function App() {
  const [notes, setNotes] = useState(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    return data ? data : [];
  });

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, { ...newNote, color: "#ffffff" }];
      saveNotesToLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const updateNote = (index, updatedTitle, updatedContent, color) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = {
        title: updatedTitle,
        content: updatedContent,
        color: color,
      };
      saveNotesToLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((_, index) => index !== id);
      saveNotesToLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  return (
    <div>
      <InputField onAdd={addNote} />
      <div className="app">
      {notes.map((noteItem, index) => (
        <React.Fragment key={index} >
        
          <Notes
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            color={noteItem.color}
            onDelete={() => deleteNote(index)}
            onSelectColor={(color) =>
              updateNote(index, noteItem.title, noteItem.content, color)

            }
          />
          
          <EditIButton
            title={noteItem.title}
            content={noteItem.content}
            onUpdate={(updatedTitle, updatedContent) =>
              updateNote(index, updatedTitle, updatedContent, noteItem.color)
              
            }
           
            
           
          />
         
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}

export default App;
