import '../Estilos/Home.css';
import '../Estilos/Personas.css';

import React from 'react';
import { useState } from 'react';

import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';
import  BtnFoto  from '../Components/BtnFoto';
import  BTGuardar  from '../Components/BTGuardar';

import  Region  from '../ComponentsDataUser/Region';
import  Edad  from '../ComponentsDataUser/Edad';
import  Estudios  from '../ComponentsDataUser/Estudios';
import  CargoReciente  from '../ComponentsDataUser/CargoReciente';
import  Cargo  from '../ComponentsDataUser/Cargo';
import  Descripcion  from '../ComponentsDataUser/Descripcion';

export const InputR = () => {

  return(
    
      <div>
        <Nadvar/>
        <BTChat/>
        <Region/>
        <Edad/>
        <Estudios/>
        <CargoReciente/>
        <Cargo/>
        <Descripcion/>

        <div className="PerfilDeXPersona">
                <h2>Edita tú perfil</h2>
        </div>

        <div className='PersonaComputer'>
          <img id='PersonaComputer' src={require("../Images/HomePersonPerfile.jpg")} alt=""/>
        </div>
        
        <BtnFoto/>
        <BTGuardar/>
        <FotoUsuarioPublic/>
        
      </div>
    
  );
}

export default InputR;