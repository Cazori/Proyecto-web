import React from 'react'

export const Perfil = ({nombre,profesion,ciudad,edad,experencia,tipoP,url}) => {
    //este es el componente que mostrará los datos del perfil de los usuarios
    const esCliente= valor =>{
      return valor == "cliente";
    }

  return (
     
    <div className={` principal ${esCliente(tipoP)? "cliente":"proveedor"} `} >
      {nombre}
      {profesion}
      {ciudad}
      {edad}
      {experencia}
      <img src={url} alt="foto del usuario registrado" />


    </div>
  )
}
