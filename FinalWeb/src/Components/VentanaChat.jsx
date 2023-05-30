import React, { useState } from 'react';
import '../Estilos/VentanaChat.css';

export const  VentanaChat = () =>{
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatMessages([...chatMessages, message]);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatMessages.map((chatMessage, index) => (
          <div key={index} className="chat-message">
            <div className="message-content">{chatMessage}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={message}
          onChange={handleInput}
          placeholder="Escribe tu mensaje aquí..."
        />
         

        <button type="submit"></button>
        
        
      </form>
    </div>
  );
}

