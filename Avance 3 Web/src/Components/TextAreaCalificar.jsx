import React, { useState } from "react";
import '../Estilos/personas.css';

function InputTextArea() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textareaOpinion">
        <p><textarea
        style={{fontSize: "16px"}}
        value={text}
        onChange={handleChange}
        placeholder="Deja tu opinión como comentario"
        cols="80"
        rows="20"
        /></p>
    </div>
  );
}
 
export default InputTextArea;