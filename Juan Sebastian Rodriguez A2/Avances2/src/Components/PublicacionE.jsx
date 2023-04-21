import React from 'react'

export const PublicacionE = ({title,schedule,days,location}) => {
    //este componente esla primera vista de cada publicacion de empleo que contiene:
    //titulo,horas diarias,dias a la semana y locacion;
  return (
    <div className="contenedorP">
          <h1>{title}</h1>
          <div className="seccion1">
          <h2>{schedule}</h2>
          <h2>{days}</h2>
          <h2>{location}</h2>
          </div>

        
    </div>
  )
}
