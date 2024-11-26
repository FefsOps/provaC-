//index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CadastrarTarefa from './components/cadastrar';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const App = () => (
  <React.StrictMode>
    <CadastrarTarefa />
  </React.StrictMode>
);

root.render(<App />);

// Para medir o desempenho do aplicativo, use reportWebVitals
reportWebVitals();
