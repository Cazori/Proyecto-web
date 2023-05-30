
import '../Estilos/Chats.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import Nadvar from '../Components/Nadvar';
import { CardChat } from '../Components/CardChat';
import {VentanaChat} from '../Components/VentanaChat';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function 
Chats() {

  return (
    <div className="Chats">
      <Nadvar/>
      <div className="GenContainer">
        <div className="carchatcontainer">
        <CardChat
        nombre="Julian Ortiz"
        foto="ejemplo1.jpg"
        /> 
        <CardChat
        nombre="Maria Correa"
        foto="ejemplo2.jpeg"
        /> 
        </div>
        <div className="chatbox">
        <VentanaChat/>
        </div>
      </div>
      
      
     
         
    </div>
  );
}

export default Chats;
