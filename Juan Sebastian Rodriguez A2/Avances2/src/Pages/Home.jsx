
import '../Estilos/Principal.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import Nadvar from '../Components/Nadvar';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function Home() {

  return (
    <div className="App">
      <Nadvar/>
      <div className="cont1">

      <div className="img">
        <img className='imagenH' src={require ("../Img/principal.png")}  alt="imagen inicial" />
        </div> 
      <div className="principal1">
        

         
      <h3 id='titleHome'>¡Te damos la bienvenida <br /> a la comunidad profesional!</h3>
        <div className="contBotoneHome">
          
      <h2 id='unete'>Unete como:</h2>
      <BTLink 
        text ="Proveedor"
        link="https://www.google.com"/>
        <BTLink2
        text ="Cliente"
        link="https://www.google.com"/>
      </div>
        </div>
        
       
        </div>

     
         
    </div>
  );
}

export default Home;
