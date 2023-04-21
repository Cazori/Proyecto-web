import React from 'react'
import { useState } from 'react';

import '../Estilos/InputsInformacionPerfiles.css';

export const InputEmpleo = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <>
  
        <input className='input1' type="..." placeholder="Buscas a  una persona que sea..." size="20" value={inputValue} onChange={handleInputChange}/>
    
    </>
    
  
  )
}

export default InputEmpleo;