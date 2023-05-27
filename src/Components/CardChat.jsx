import React from 'react'
import '../Estilos/CardChat.css';

export const CardChat = ({nombre,estado,foto}) => {
  
  estado="Activo"
  return (
    <div className="Cardchat">
          <img src={require (`../Images/${foto}`)}  alt="imagen inicial" />
        <h5>{nombre}</h5>
        <h4>{estado}</h4>
        
    </div>

  )
}
