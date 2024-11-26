//App.tsx

import { useEffect } from 'react';
import CadastrarTarefa from './components/cadastrar';
import { server } from './mocks/server';

const iniciarServidor = () => {
  if (process.env.NODE_ENV === 'development') {
    server.start();
  }
};

const App = () => {
  useEffect(() => {
    iniciarServidor();
  }, []);

  return (
    <div className="App">
      <CadastrarTarefa />
    </div>
  );
};

export default App;
