
import '../Estilos/RegistroC.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import Nadvar from '../Components/Nadvar'
import { InputI } from '../Components/InputI';


//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function RegistroP() {

  return (
    <div className="App">
      

      <Nadvar/>
      <div className="ZOOM3">
      
      <h3 id='titleReg'>¡Unete gratis como proovedor!</h3>
  
      <div className="contReg">
        

      <div className="imgReg">
        <img className='imagenI' src={require ("../Images/principal.png")}  alt="imagen inicial" />
        </div> 
        <div className="in">
      <div className="principalR">
        

         
     
      
          <div className="UsuarioR">
            <h2>Usuario</h2>

          <InputI/>
          </div>
          <div className="emailR">

          <h2>Email</h2>
          <InputI/>
          </div>
          <div className="contrasR">

          <h2>Contraseña</h2>
          <InputI/>
          </div>
          
         
   
      </div>
      <BTLink2 
         
         text ="Siguiente paso"
         link="DatosR"/>
      </div>
        
       
        </div>

     
        </div>
    </div>
  );
}

export default RegistroP;
