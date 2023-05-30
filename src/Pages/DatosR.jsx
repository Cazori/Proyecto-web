
import '../Estilos/DatosR.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import { InputR2 } from '../Components/InputR2';
import Nadvar from '../Components/Nadvar';


//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function DatosR() {

  return (
    <div className="App">
      <Nadvar/>
          <div className="zoom">
      <h3 id='s1'>¡Un paso mas para ser parte de esta comunidad!</h3>
      <div className="contD">

      <div className="inputs2">
      
          <div className="grupo1">
          <h2>Nombre</h2>
          <InputR2/>
          <h2>Edad</h2>
          <InputR2/>
          <h2>Pais</h2>
          <InputR2/>
          </div>
          <div className="grupo2">
          <h2>Apellido</h2>
          <InputR2/>
          <h2>Celular</h2>
          <InputR2/>
          <h2>Ciudad</h2>
          <InputR2/>
          </div>
          
        </div> 
        
        <div className="linea">

        </div>
        
      <div className="principal">
        

         
     
      <h2>Profesion</h2>
          
          <InputR/>
          <h2>Estudios en:</h2>
          <InputR/>
          <h2>Cargo mas reciente</h2>
          <InputR/>
          
         
   
      </div>
      
         
        
       
        </div>

        <div className="BOTON">

<BTLink2 
   
   text ="Unirse"
   link="/EditarPerfil"/>
</div>
</div>
    </div>
  );
}

export default DatosR;
