import React from 'react'
import { useState } from 'react';

import '../Estilos/Personas.css';

export const InputR = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <>
  
        <input className='input6' type="..." placeholder="" size="20" value={inputValue} onChange={handleInputChange}/>
    
    </>
    
  
  )
}

export default InputR;