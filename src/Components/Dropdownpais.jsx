import React from 'react'

export const Dropdownpais = () => {
  //este componente es el que muestra la lista de los paises a seleccionar
  const paises=[]
  return (
    
    <div className="content">
        <h1>Lista de ciudades</h1>
        <ol>
        {
            paises.map(
                (pais,key)=>{
                    return <li key ={key}> 
                    {pais} </li>
                }
            )
        }
    </ol>

    
    </div>
  )
}
