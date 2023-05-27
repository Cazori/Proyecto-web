import '../Estilos/Home.css';
import '../Estilos/personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';

import  PerfilDeXPersona  from '../Components/PerfilDeXPersona';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';
import InputTextArea from '../Components/TextAreaCalificar';

function App(){
  return(
    
      <div>
        <Nadvar/>
        <BTChat/>

        <div className=''>
            <InputTextArea/>
        </div>

        <div className='UbacacionFotoNombre'>
            <div className='UbiNombre'>
                <PerfilDeXPersona/>
            </div>
            <FotoUsuarioPublic/>
        </div>

        <button className='BottonPublicarCalificacion' href="#"> Publicar calificación</button>

        <div class='rectContenedorComentario'>
          
            <div className="Claseprubea">
            <form action="#" method="post">
                <label class="textRegistro" for="nombre">Nombre: </label>
                <input class="inputIzquierda" type="text" name="nombre" placeholder="Juan" size="30"/>
            </form>
            </div>

        </div>        

      </div>
    
  );
}


export default App;