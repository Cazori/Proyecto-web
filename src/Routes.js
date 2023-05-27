import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import RegistroC from "./Pages/RegistroC";
import RegistroP from './Pages/RegistroP';
import Chats from './Pages/Chats';
import Ingreso from './Pages/Ingreso';
import Personas from './Pages/Personas';
import { Miperfil } from './Pages/Miperfil';
import DatosR from './Pages/DatosR';
import ProoverdorPerfil from './Pages/ProveedorPerfil';
import { PalabrasClave } from './Pages/PalabrasClave';
import EditarPerfil from './Pages/EditarPerfil';

const Ruta= createBrowserRouter([
  {
  path:"/",
  element: <Home/>
  },
  {
    path:"RegistroC",
    element: <RegistroC/>
  },{
    path:"RegistroP",
    element: <RegistroP/>
  },{
    path:"Chat",
    element: <Chats/>
  },{
    path:"Ingreso",
    element: <Ingreso/>
  },{
    path:"Personas",
    element: <Personas/>
  },{
    path:"Miperfil",
    element: <Miperfil/>
  },{
    path:"RegistroP/DatosR",
    element: <DatosR/>
  },{
    path:"RegistroC/DatosR",
    element: <DatosR/>
  },{
  path:"ProveedorPerfil",
  element: <ProoverdorPerfil/>
  },{
    path:"PalabrasClave",
    element: <PalabrasClave/>
  },{
    path:"EditarPerfil",
  element: <EditarPerfil/>
},
])
function Routes() {
  return (
    <>
    <RouterProvider router={Ruta}/>
    </>
  );
}

export default Routes;
