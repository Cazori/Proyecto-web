import '../Estilos/Home.css';
import '../Estilos/personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';
import  FotoUsuarioPublic  from '../Components/FotoUsuarioPublic';
import  BtnFoto  from '../Components/BtnFoto';
import  BTGuardar  from '../Components/BTGuardar';

function EditarPerfil(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [user, setUser] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)
  
  const uploadImage = async (e)=>{
    const files = inputRef.current.files;
    console.log(files)
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "profile");
    setloading(true);

    const file = await res.json();
    setPhoto(file.secure_url)
    setloading(false)

    return file.secure_url
  }

  const [photo2, setPhoto2] = useState('')
  const getDataDB = async ()=>{
    const {uid} = await extractUser(getToken());
    const res = await getProfileId(uid)
    console.log(res)
    setPhoto2(res.photo)
  }

  useEffect(()=>{
    getDataDB()
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resCloud = await uploadImage();
    try {
      const {uid} = await extractUser(getToken());
      console.log(uid)
      console.log(name)
      console.log(desc)
      console.log(user)
      console.log(resCloud)
      const res = await editUser(uid, name, desc, user, resCloud);
      toast.info('Update')
      console.log('Registro', res.data);
    } catch (error) {
      console.error('Error Update:', error.response.data);
      toast.error('Error Update: ' + error.response.data.errors.msg);
    }
  };

  return(
    
      <div>
        <Nadvar/>
        <BTChat/>

        <div className="PerfilDeXPersona">
                <h2>Edita tú perfil</h2>
        </div>

        <div className="TrabajoPersona">
                <h3>Remote Web Developer - React Jobs</h3>
        </div>

        <div className='PersonaComputer'>
          <img id='PersonaComputer' src={require("../Images/HomePersonPerfile.jpg")} alt=""/>
        </div>

        
        <BtnFoto/>
        <BTGuardar/>
        <FotoUsuarioPublic/>

        {/* <div>
            <form action="#" method="post">
                <label class="Texto" for="nombre">Nombre: </label>
                <input class="inputIzquierda" type="text" name="nombre" placeholder="Juan" size="30"/>
            </form>
        </div> */}

      </div>
    
  );
}

export default EditarPerfil;