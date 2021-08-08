import './App.css';
import Cadastro from './Componentes/Paginas/cadastro';
import Login from './Componentes/Paginas/login';
import Routes from './rotas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Cadastro />
        <Login />
      </Routes>
    </div>
  );
}

export default App;
