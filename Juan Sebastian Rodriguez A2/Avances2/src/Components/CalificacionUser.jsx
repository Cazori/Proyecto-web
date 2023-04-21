import React from 'react'
import '../Estilos/CalificacionUser.css';

export const CalificacionUser = ({nombre,calificacion,foto,descripcion}) => {
  
  calificacion="2"
  descripcion="ta pendejo, no lo recomiendo"
  return (
    <div className="ContenedorCUser">
          <img src={require (`../Img/${foto}`)}  alt="imagen inicial" />
          <div className="contU">
        <h5 id='NU'>{nombre}</h5>
        <h5 id ="DU">{descripcion}</h5>

          </div>
        <h4 id='CU'>{calificacion}</h4>
        
    </div>

  )
}
