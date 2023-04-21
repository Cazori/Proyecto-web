import React from 'react'

export const InfoJob = ({title,schedule,days,location,payment,state,description,urlImg}) => {
    //este componente muestra la informacion completa del trabajo ofrecido por un proveedor
  return (
    <div className="contentP">
          <h1>{title}</h1>
          <div className="seccion1">
          <h2>{schedule}</h2>
          <h2>{days}</h2>
          <h2>{location}</h2>
          <h2>{payment}</h2>
          <h2>{state}</h2>
          <img src={urlImg} alt="Foto del proveedor" />
          </div>
          <button> Solicitar </button>
          <div className="content-info">
                   {description}
          </div>

        
    </div>
  )
}
