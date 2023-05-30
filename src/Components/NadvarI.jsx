import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';
import { Link } from "react-router-dom";


function NadvarI() {

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
               
               
                
            </div>
        </div>
  );
}

export default NadvarI;
