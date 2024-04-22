import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// StrictMode é uma ferramenta para destacar problemas potenciais na aplicação.
// Não afeta a build de produção e pode ser útil durante o desenvolvimento.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
