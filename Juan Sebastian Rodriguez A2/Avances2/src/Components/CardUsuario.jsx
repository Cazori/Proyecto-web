import React from 'react'

export const CardUsuario = ({nombre,profesion,ciudad}) => {
    //en este componente se muestra en tipo card el usuario para la pagina "personas"
  return (
    <div className="CardU-principal">
         {nombre}
      {profesion}
      {ciudad}
      {edad}
      {experencia}

    </div>
  )
}
