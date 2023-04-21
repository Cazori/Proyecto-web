import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';


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
        </div>
  );
}

export default App;
