import '../Estilos/RegistroC.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import Nadvar from '../Components/Nadvar'
import { InputI } from '../Components/InputI';

function RegistroP() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const handleUsernameChange = (event) => {
      setUser(event.target.value);
  };

  const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const res = await createUser(name, email, user, pass)
          console.log(res)
          setUser('');
          setEmail('');
          setPassword('');

          console.log('Registro exitoso:', res.data);
      } catch (error) {

          console.error('Error registro:', error.response.data);
      }
  };

  return (
    <div className="App">
      

      <Nadvar/>
      <div className="ZOOM3">
      
      <h3 id='titleReg'>¡Unete gratis como proovedor!</h3>
  
      <div className="contReg">
        

      <div className="imgReg">
        <img className='imagenI' src={require ("../Images/principal.png")}  alt="imagen inicial" />
        </div> 
        <div className="in">
      <div className="principalR">

        <div className="UsuarioR">
          <h2>Usuario</h2>
          <InputI/>
          <input className='inputI' type="text" value={inputValue} onChange={handleUsernameChange} />
        </div>
        <div className="emailR">

          <h2>Email</h2>
          <InputI/>
          <input className='inputI' type="text" value={inputValue} onChange={handleEmailChange} />
        </div>
        <div className="contrasR">

          <h2>Contraseña</h2>
          <InputI/>
          <input className='inputI' type="text" value={inputValue} onChange={handlePasswordChange} />
        </div>
   
      </div>
      <BTLink2 
         
         text ="Siguiente paso"
         link="DatosR"/>
      </div>
      
          </div>
        </div>
    </div>
  );
}

export default RegistroP;
