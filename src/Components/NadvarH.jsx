import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';
import { Link } from "react-router-dom";


function NadvarH() {

    return (
      <div className="App">
            <div className="ContenedorBtn">
            <Link to ={"/"}>
                <h80 id='Uniwork'>
                    Uniwork
                </h80>
                </Link>
                <BTLink 
                text ="Empleos"
                link="/RegistroC" 
                tipo=""/>
                <BTLink 
                text ="Personas"
                link="/Personas"
                tipo=""/>
               
                <BTLink 
                text ="Ingresa"
                link="/Ingreso"
                tipo=""/>
                
            </div>
        </div>
  );
}

export default NadvarH;
