import React, { useState } from 'react'

export const SearchInp = () => {
    //este componente es el que se encarga de guardar lo que se registra en el input de busqueda
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <input type="" className="Input"
    placeholder='Busca lo que necesitas' 
    value={inputValue} 
    onChange={handleInputChange}/>
    
  )
}
