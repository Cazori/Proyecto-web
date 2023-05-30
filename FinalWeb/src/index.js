import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home.jsx';
import Personas from './Pages/Personas.jsx';
import PerfilUsuarioX from './Pages/PerfilUsuarioX.jsx';
import EditarPerfil from './Pages/EditarPerfil.jsx';
import CalificarUsuario from './Pages/CalificarUsuario.jsx';
import ProveedorPerfil from './Pages/ProveedorPerfil.jsx';
import RegistroC from './Pages/RegistroC';
import Ingreso from './Pages/Ingreso';
import Chats from './Pages/Chats';
import DatosR from './Pages/DatosR';
import { PalabrasClave } from './Pages/PalabrasClave';
import { Route } from 'react-router-dom';
import Routes from './Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Routes/>
   
);