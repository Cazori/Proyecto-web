import '../Estilos/Home.css';
import '../Estilos/personas.css';
import '../Estilos/Proveedor.css'
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoProveedor  from '../Components/FotoProveedor';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';

function ProoverdorPerfil(){
  return(
    
      <div>
        <Nadvar/>
        <BTChat/>    
        
        <div className='GloboImage'>
          <img id='GloboImage' src={require("../Images/Globo.png")} alt=""/>
        </div>

        <button className='BottonCrearEmpleo' href="#"> Crear Empleo</button>

        <div class='rectanguloContenedor'>
          <FotoProveedor/>
        </div>

      </div>
    
  );
}

export default ProoverdorPerfil;