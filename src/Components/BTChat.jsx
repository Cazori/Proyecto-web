import '../Estilos/Home.css';
import { Link } from "react-router-dom";

function App({link}) {

    return (
      <div className="App">
            <Link to={link}>
            <button className="BTChat" href="#"> Chat
    
        
    </button> 
    </Link>
            
        </div>
  );
}

export default App;