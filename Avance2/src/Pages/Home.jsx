import React from 'react'
import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import  Nadvar  from '../Components/Nadvar';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

const App = () =>{

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (

    <div className="App">

      <Nadvar/>

      <div className="principal">

      <h1>!Te damos la bienvenida <br /> a la comunidad profesional</h1>

      <h2>Unete como:</h2>
      <BTLink 
        text ="Proveedor"
        link="https://www.google.com"/>
        <BTLink2
        text ="Cliente"
        link="https://www.google.com"/>
        
        
  
      </div>

     
         
    </div>
  );
}

export default App;
