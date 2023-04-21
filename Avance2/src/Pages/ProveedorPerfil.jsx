import '../Estilos/Home.css';
import '../Estilos/Personas.css';
import '../Estilos/Proveedor.css'
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoProveedor  from '../Components/FotoProveedor';

function personas(){
  return(
    
      <div>
        <Nadvar/>
        <BTChat/>    
        
        <div className='GloboImage'>
          <img id='GloboImage' src={require("../Images/Globo.png")} alt=""/>
        </div>

        <button className='BottonCrearEmpleo' href="#"> Crear oferta de trabajo</button>

        <div class='rectanguloContenedor23'>
          <FotoProveedor/>
        </div>
        
        <div className='Persona901'>
          <h3>Javier Ortiz</h3>
        </div>
        
        <div className='Region'>
          <h4>Cali-Colombia</h4>
        </div>

        <div className='Edad'>
          <h4>Edad: 30 años</h4>
        </div>

        <div className='EstudiosPersona'>
          <h4>Empresa:</h4>
        </div>

        <div className='CargoRecientePersona'>
          <h4>Cargo actual: </h4>
        </div>

        <div className='DescripcionPerfil'>
          <h4>Descripción: ---- </h4>
        </div>

      </div>
    
  );
}

export default personas;