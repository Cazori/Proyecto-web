import React from 'react'
import Nadvar from '../Components/Nadvar'
import { InputR2 } from '../Components/InputR2'
import { BTLink2 } from '../Components/BTLink2'
import "../Estilos/PalabrasClave.css"

export const PalabrasClave = () => {
  return (
    <div className="Pclave">
        <Nadvar/>
        <div className="zoom4">
        <h3 id='tituloPC'>
            Añadir Palabras Clave-Ciudades-Paises <br/> en la BD de Uniwork 
            
        </h3>
       <div className="contPC">
        <div className="PC">

        <h6>Palabras Clave</h6>
        <InputR2/>
        </div>
        <div className="ciudades">

        <h6>Ciudades</h6>
        <InputR2/>
        </div>
        <div className="Paises">

        <h6>Paises</h6>
        <InputR2/>
        </div>
        
       </div>
       <div className="BotonPC">

       <BTLink2
        text ="Actualizar"
        link="https://www.google.com"/>
        </div>
        </div>
    </div>
  )
}
