
import '../Estilos/Ingreso.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import { InputR } from '../Components/InputR';
import Nadvar from '../Components/Nadvar';
import { InputI } from '../Components/InputI';
import NadvarI from '../Components/NadvarI';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css


const Ingreso = () => {

  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );
  const [userData, setUserData] = useState({
    usuario: "", 
    password: "",
  });
  
  const database = [
    {
      username: "user",
      password: "pass"
    },
  ];
  
  const errors = {
    uname: "Usuario invalido",
    pass: "Password invalida"
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });

      } else {
        setIsSubmitted(true);
        navigate('/');
        
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
    console.log("Registrado")
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    
    <div className="App">
      <form className='Form' onSubmit={handleSubmit}>
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
           {renderErrorMessage("uname")}
          <h2>Contraseña</h2>
          <InputI/>
           </div>
              
        <BTLink2
        text ="Ingresar"
        link="https://www.youtube.com/watch?v=mCdA4bJAGGk"/>
      </div>
        
       
        </div>

     
         </div>
         </form>
    </div>
  );
}

export default Ingreso;
