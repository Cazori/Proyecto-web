import { useEffect } from 'react'
import React, { useState } from 'react'
import '../Estilos/Chats.css';
import { BTLink } from '../Components/BTLink';
import { BTLink2 } from '../Components/BTLink2';
import Nadvar from '../Components/Nadvar';
import { CardChat } from '../Components/CardChat';
import { io } from 'socket.io-client'
import {VentanaChat} from '../Components/VentanaChat';

//esta es la pagina principal, es decir la primera que mostrará al ingresar 
//actualmente tiene estilos css

const socket = io('http://localhost:4000');

const Chats = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [newMensaje, setNewMensaje] = useState('');
  const [mensaje, setMensaje] = useState([]);
  
  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) =>{
      console.log(data)
      setMensaje(mensaje => [...mensaje, data])
    })

    return ( )=>{
      socket.off('connect');
      socket.off('chat_message')
    }
  });

  const enviarMensaje =() =>{
    socket.emit('chat_message', {
      nuevomensaje: newMensaje,
      usuario: socket.id,
    })
  }

  const socketID = socket.id

  return (
    <div className="Chats">
      <Nadvar/>
      <div className="GenContainer">
        <div className="carchatcontainer">
        <CardChat
          nombre="Julian Ortiz"
          foto="ejemplo1.jpg"
        /> 
        <CardChat
          nombre="Maria Correa"
          foto="ejemplo2.jpeg"
        /> 
        </div>
        <div className="chatbox">
          <VentanaChat/>
        </div>
      </div>
          {mensaje.map(Mensaje=>{
            return  socketID === Mensaje.id ? 
              (<li className='liMensaje'>{Mensaje.usuario}: {Mensaje.nuevomensaje}</li>) 
              :(<li className='LiMensajeClient'>{Mensaje.usuario}: {Mensaje.nuevomensaje}</li>)
          })}

        <button onClick={enviarMensaje}>Enviar</button>

        <input type='Text' onChange={e=> setNewMensaje(e.target.value)}></input>
    </div>
  );
}

export default Chats;
