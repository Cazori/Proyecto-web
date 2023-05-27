
import '../Estilos/Ingreso.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import Nadvar from '../Components/Nadvar';
import { InputI } from '../Components/InputI';
import NadvarI from '../Components/NadvarI';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function Ingreso() {

  return (
    <div className="App">
      <NadvarI/>
      <div className="zoom2">
      
      <div className="contI">
        
      <div className="imgI">
        <img className='imagenI' src={require ("../Images/principal.png")}  alt="imagen inicial" />
        </div> 
      <div className="principal">
        
      
         
      <h1 id='welcome'>¡Te damos la bienvenida <br /> a la comunidad profesional!</h1>
              
           <div className="email">

           <h2>Email</h2>
          
          
          <InputI/>
           </div>
           <div className="contras">

          <h2>Contraseña</h2>
          <InputI/>
           </div>
              
        <BTLink2
        text ="Ingresar"
        link="https://www.youtube.com/watch?v=mCdA4bJAGGk"/>
      </div>
        
       
        </div>

     
         </div>
    </div>
  );
}

export default Ingreso;
