import '../Estilos/Home.css';
import '../Estilos/Personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import { useNavigate } from 'react-router-dom';
import  PerfilDeXPersona  from '../Components/PerfilDeXPersona';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';
import InputTextArea from '../Components/TextAreaCalificar';

const App = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CalificarPersona');

    };

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
   

      </div>
    
  );
}


export default App;