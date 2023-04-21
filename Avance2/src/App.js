import logo from './logo.svg';
import './App.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { Home } from '../Pages/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   
      <div className="contenido">
        <Home>
          <Routes>
            <Route path="/" element={<Personas/>}/>
          </Routes>
        </Home>
      </div>
    
  );
}

export default App;
