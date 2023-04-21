import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';


function Nadvar() {

    return (
      <div className="App">
            <div className="ContenedorBtn">
                <h20 id='Uniwork'>
                    Uniwork
                </h20>
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

export default Nadvar;
