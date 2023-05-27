import React from 'react'
import "../Estilos/BTLink.css"
import { Link } from "react-router-dom";



//Este componente es un boton para pasar de una seccion de la pagina a otra en 
//lo trabajaremos en 2 componente por algunas facilidades esteticas

export const BTLink = ({link, text,tipo}) => {
    


  const extenso= valor =>{
    return valor !== "";
  } //este metodo es para saber si debe ser un boton alargado o pequeño
 

  return (
    <Link to={link}>
    
    <button className={`Boton ${extenso(tipo)? "amplio":null} `} >
      {text}

    </button>
  </Link>
    
    
     
   
  )
}
