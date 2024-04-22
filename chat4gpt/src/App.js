import React from 'react';
import Chat from './components/Chat';
import './App.css'; // Assumindo que você tem um arquivo CSS para estilos globais

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Você pode colocar um cabeçalho aqui, se desejar */}
        <h1>Chat Inteligente</h1>
      </header>
      <main>
        {/* Aqui é onde o componente Chat é renderizado */}
        <Chat />
      </main>
      <footer>
        {/* Informações de rodapé, se necessário */}
      </footer>
    </div>
  );
}

export default App;
