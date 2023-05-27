import '../Estilos/Home.css';
import '../Estilos/personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';
import  BtnFoto  from '../Components/BtnFoto';
import  BTGuardar  from '../Components/BTGuardar';

function EditarPerfil(){
  return(
    
      <div>
        <Nadvar/>
        <BTChat/>

        <div className="PerfilDeXPersona">
                <h2>Edita tú perfil</h2>
        </div>

        <div className="TrabajoPersona">
                <h3>Remote Web Developer - React Jobs</h3>
        </div>

        <div className='PersonaComputer'>
          <img id='PersonaComputer' src={require("../Images/HomePersonPerfile.jpg")} alt=""/>
        </div>

        
        <BtnFoto/>
        <BTGuardar/>
        <FotoUsuarioPublic/>

        {/* <div>
            <form action="#" method="post">
                <label class="Texto" for="nombre">Nombre: </label>
                <input class="inputIzquierda" type="text" name="nombre" placeholder="Juan" size="30"/>
            </form>
        </div> */}

      </div>
    
  );
}

export default EditarPerfil;