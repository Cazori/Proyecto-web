import React from 'react'
import Nadvar from '../Components/Nadvar'
import { CalificacionUser } from '../Components/CalificacionUser'
import { CardChat } from '../Components/CardChat'

export const PersonasCU = () => {
  return (
    <div className="personas">
        <Nadvar/>
        <div className="contPersonas">
           
             <CalificacionUser
        nombre="Maria Correa"
        foto="ejemplo2.jpeg"
        />
            
        </div>
        
    </div>
  )
}
