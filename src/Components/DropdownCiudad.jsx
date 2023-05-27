import React from 'react'

export const DropdownCiudad = () => {
    const Ciudades=[]
    //este componente es el que muestra la lista de los paises a seleccionar
  return (
    <div className="content">
        <h1>Lista de ciudades</h1>
        <ol>
        {
            Ciudades.map(
                (Ciudad,key)=>{
                    return <li key ={key}> 
                    {Ciudad} </li>
                }
            )
        }
    </ol>

    
    </div>
  )
}
