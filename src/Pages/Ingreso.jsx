
import '../Estilos/Ingreso.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import Nadvar from '../Components/Nadvar';
import { InputI } from '../Components/InputI';
import NadvarI from '../Components/NadvarI';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

function Ingreso () {
  const [pass, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUsuario(user, pass)
      console.log(res.token)
      setUser('');
      setPassword('');
      
      console.log('Login exitoso:', res.data);
      toast.info('Registro exitoso, disfruta')
      localStorage.setItem("token", JSON.stringify(res.token))
      navigate('/Login');

    } catch (error) {
      console.error('Error al login:', error.response.data);
      toast.error('Error al registrarse: ' + error.response.data.msg);
    
    }
  };

  return (
    <div className="App">
      <NadvarI/>
      <div className="zoom2">
      
      <div className="contI">
        
      <div className="imgI">
        <img className='imagenI' src={require ("../Images/principal.png")}  alt="imagen inicial" />
        </div> 
      <div className="principal">
        
      <h1 id='welcome'>¡Te damos la bienvenida <br /> a la comunidad profesional!</h1>
              
           <div className="email">

           <h2>Email</h2>
          
          <InputI/>
           </div>
           <div className="contras">

          <h2>Contraseña</h2>
          <InputI/>
           </div>
              
        <BTLink2
        text ="Ingresar"
        link=""/>
      </div>
        
        </div>
         </div>
    </div>
  );
}

export default Ingreso;
