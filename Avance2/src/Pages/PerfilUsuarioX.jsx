import '../Estilos/Home.css';
import '../Estilos/Personas.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  PerfilDeXPersona  from '../Components/PerfilDeXPersona';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';

const personas = () =>{

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CalificacionesUsuario');
  };

  return(
    
      <div>
        <Nadvar/>
        <BTChat/>
        <PerfilDeXPersona/>
        <FotoUsuarioPublic/>

        <div className='GloboImage'>
          <img id='GloboImage' src={require("../Images/Globo.png")} alt=""/>
        </div>
        
        
          <button onClick={handleClick} className='BottonCalificaciones' href="#"> Calificaciones</button> 
          

        <button onClick={handleClick} className='BottonOpinarUsuario' href="#"> Opina sobre este usuario</button>

        <div class='rectanguloContenedor23'>
          <FotoUsuarioPublic/>
        </div>

        <div className='Persona901'>
          <h3>Javier Ortiz</h3>
        </div>

        <div className='ProfesionPersona'>
          <h4>Java Developer</h4>
        </div>

        <div className='Region'>
          <h4>Cali-Colombia</h4>
        </div>

        <div className='Edad'>
          <h4>Edad: 30 años</h4>
        </div>

        <div className='EstudiosPersona'>
          <h4>Estudios en la Universidad Autonoma</h4>
        </div>

        <div className='CargoRecientePersona'>
          <h4>Cargo más reciente: </h4>
        </div>

        <div className='DescripcionPerfil'>
          <h4>Descripción: ---- </h4>
        </div>

      </div>
    
  )
}

export default personas