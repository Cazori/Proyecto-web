import '../Estilos/Home.css';
import '../Estilos/Personas.css';

import React from 'react';

import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoProveedor  from '../Components/FotoProveedor';
import  BtnFoto  from '../Components/BtnFoto';
import  BTGuardar  from '../Components/BTGuardar';

import  Region  from '../ComponentsDataProveedor/Region';
import  Edad  from '../ComponentsDataProveedor/Edad';
import  Empresa  from '../ComponentsDataProveedor/Empresa';
import  CargoReciente  from '../ComponentsDataProveedor/CargoReciente';
import  Cargo  from '../ComponentsDataProveedor/Cargo';
import  Descripcion  from '../ComponentsDataProveedor/Descripcion';

export const EditPerfilProvee = () => {

  return(
    
      <div>
        <Nadvar/>
        <BTChat/>
        <Region/>
        <Edad/>
        <Empresa/>
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
        <FotoProveedor/>


      </div>
    
  );
}

export default EditPerfilProvee;