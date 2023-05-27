import React from 'react'
import { useState } from 'react';
import "../Estilos/Input2.css"


export const InputR2 = () => {
  //este componente es un input que guarda en una variable lo que se escribe en los diferentes campos de texto.
  //para despues agregarla a un objeto "cliente" o "proveedor"
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <>
  
    <input className='inputR2' type="..." value={inputValue} onChange={handleInputChange} />
    
    </>
    
  
  )
}
