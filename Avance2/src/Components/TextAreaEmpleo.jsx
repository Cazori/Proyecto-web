import React, { useState } from "react";
import '../Estilos/Personas.css';

function InputTextArea() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textAreaEmpleo">
        <p><textarea
        style={{fontSize: "20px"}}
        value={text}
        onChange={handleChange}
        placeholder="Deja tu opinión como comentario"
        cols="106"
        rows="15"
        /></p>
    </div>
  );
}
 
export default InputTextArea;