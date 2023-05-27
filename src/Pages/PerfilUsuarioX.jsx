import '../Estilos/Home.css';
import '../Estilos/personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  PerfilDeXPersona  from '../Components/PerfilDeXPersona';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';

function personas(){
  return(
    
      <div>
        <Nadvar/>
        <BTChat/>
        <PerfilDeXPersona/>
        <FotoUsuarioPublic/>

        <div className='GloboImage'>
          <img id='GloboImage' src={require("../Images/Globo.png")} alt=""/>
        </div>

        <button className='BottonCalificaciones' href="#"> Calificaciones</button>

        <button className='BottonOpinarUsuario' href="#"> Opina sobre este usuario</button>

        <div class='rectanguloContenedor'>
          <FotoUsuarioPublic/>
        </div>

      </div>
    
  );
}

export default personas;