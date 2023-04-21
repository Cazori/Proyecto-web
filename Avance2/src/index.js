import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './index.css';
import Home from './Pages/Home.jsx';
import Personas from './Pages/Personas.jsx'; //Cards Personas
import PerfilUsuarioX from './Pages/PerfilUsuarioX.jsx';
import EditarPerfil from './Pages/EditarPerfil.jsx'; //Cambiar Descrip por TextArea
import CalificarUsuario from './Pages/CalificarUsuario.jsx';


import ProveedorPerfil from './Pages/ProveedorPerfil.jsx';
import EditarPerfilProveedor from './Pages/EditarPerfilProveedor.jsx';
import CrearEmpleo from './Pages/CrearEmpleo.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
       <BrowserRouter>
          <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/Usuarios' element={<Personas/>}/>
          <Route path='/Usuario' element={<PerfilUsuarioX/>}/>
          <Route path='/EditarPerfilUsuario' element={<EditarPerfil/>}/>
          <Route path='/CalificarPersona' element={<CalificarUsuario/>}/>

          <Route path='/PerfilProveedor' element={<ProveedorPerfil/>}/>
          <Route path='/EditarPerfilProveedor' element={<EditarPerfilProveedor/>}/>
          <Route path='/CrearProveedor' element={<CrearEmpleo/>}/>
          </Routes>
     </BrowserRouter>
   </React.StrictMode>

);