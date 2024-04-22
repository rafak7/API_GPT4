import React, { useState } from 'react';
import { sendMessage } from '../API/openai';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInput = event => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    if (message.trim() === '') return;  // Verifica se a mensagem não está vazia
    const response = await sendMessage(message);
    const newResponses = [...responses, { query: message, response: response }];
    setResponses(newResponses);
    setMessage('');  // Limpa o campo de mensagem após enviar
  };

  return (
    <div>
      <input value={message} onChange={handleInput} placeholder="Digite sua mensagem..." />
      <button onClick={handleSend}>Enviar</button>
      {responses.map((item, index) => (
        <div key={index}>
          <p><strong>Você:</strong> {item.query}</p>
          <p><strong>ChatGPT:</strong> {item.response}</p>
        </div>
      ))}
    </div>
  );
}
