// import React from 'react';

// function ColorPicker({ selectedColor, onSelectColor }) {
//   const colors = ["#ffffff", "#ffcccb", "#ffecb3", "#c7fcec", "#cfd8dc"]; // Add more colors as needed

//   return (
//     <div>
//       <h3>Color Picker</h3>
//       <div style={{ display: 'flex' }}>
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: color,
//               width: '30px',
//               height: '30px',
//               margin: '0 5px',
//               cursor: 'pointer',
//               border: color === selectedColor ? '2px solid #333' : 'none',
//             }}
//             onClick={() => onSelectColor(color)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ColorPicker;


// ColorPicker component
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { Fab } from "@mui/material";
function ColorPicker({ selectedColor, onSelectColor }) {
  const colors = ["#ffffff", "#ffcccb", "#ffecb3", "#c7fcec", "#cfd8dc"];
  const [isPicker,setIsPicker] = useState();


function pickColor() {
  setIsPicker(!isPicker)  
}

  return (
    <div>
      <Fab  size = "small" onClick={pickColor}>
      <FontAwesomeIcon icon={faPalette} size="1.5x" color="black"
      /></Fab>
      { isPicker &&
      <div style={{ display: "flex", margin:"1rem", position:"absolute",top:"13rem"}}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              // margin: "0 5px",
              cursor: "pointer",
              border: color === selectedColor ? "2px solid #333" : "none",
            }}
            onClick={() => onSelectColor(color)}
          ></div>
        ))}
      </div>
      }
    </div>
  );
}

export default ColorPicker;

