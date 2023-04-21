import React from 'react'
import { useState } from 'react';

import '../Estilos/InputsInformacionPerfiles.css';

export const InputR = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <>
  
        <input className='input2' type="..." placeholder="Horas diarias" size="20" value={inputValue} onChange={handleInputChange}/>  
    
    </>
    
  
  )
}

export default InputR;