
import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function App() {

  return (
    <div className="App">
      <div className="ContenedorBtn">
      <h1 id='Uniwork'>
          Uniwork
        </h1>
        <BTLink 
        text ="Empleos"
        link="https://www.google.com" 
        tipo=""/>
         <BTLink 
        text ="Personas"
        link="https://www.google.com"
        tipo=""/>
         <BTLink 
        text ="Proveedor"
        link="https://www.google.com"
        tipo=""/>
         <BTLink 
        text ="Cliente"
        link="https://www.google.com"
        tipo=""/>
        
      </div>
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
