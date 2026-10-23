import logo from './logo.svg';
import './App.css';

const algo = "jsx"
function App() {
  return (
    <main>
      <h3>coisa escrita com jsx ---{">"} {algo}</h3>
      <Componente/>
      <Componente_com_prop coisa="legal"/>
      <a href=''>ta no repositório o mermaid de virtualDOM</a>
    </main>
  );
}

function Componente() {
  return (
    <div>componente muito brabo</div>
  );
}

function Componente_com_prop(prop) {
  return (
    <div className='props'>componente muito brabo com prop agora, {prop.coisa}</div>
  );
}

export default App;
