import '../Estilos/Home.css';
import '../Estilos/Personas.css';
import '../Estilos/CardOpiniones.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';

function App(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return(
    
    <div>
        <Nadvar/>
        <BTChat/>

        <div className="PersonasComunidad">
                <h2>Personas de la comunidad</h2>
        </div>

            <div className='usuariosUniWork'>
                <div className="usuarioCard">
                    <div className="perfil">
                        <div className="fotoUsuarios">
                        <img id='PerfilPersona' src={require("../Images/PerfilCliente.png")} alt=""/>
                        </div>

                        <div className="nameUser"></div>
                        <strong>Armando Perez</strong>
                        <span>Java Developer</span>
                    </div>
                    <div className="resenas">
                        <i className='fas fa-satrt'></i>
                        <i className='fas fa-satrt'></i>
                        <i className='fas fa-satrt'></i>
                        <i className='fas fa-satrt'></i>
                        <i className='fas fa-satrt'></i>
                    </div>        
                </div>
              <div className='comentarios'>
                <p>Hizo un buen trabajo, responsable</p>
              </div>
            </div>
    </div>
      
    
  );
}

export default App;