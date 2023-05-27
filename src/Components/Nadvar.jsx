import '../Estilos/Home.css';
import { BTLink } from '../Components/BTLink';
import { Link } from "react-router-dom";


function Nadvar() {

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
                link="Chat" 
                tipo=""/>
                <BTLink 
                text ="Personas"
                link="Personas"
                tipo=""/>
              
                <BTLink 
                text ="Perfil"
                link="Miperfil"
                tipo=""/>
                
            </div>
        </div>
  );
}

export default Nadvar;
