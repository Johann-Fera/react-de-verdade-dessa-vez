import logo from './logo.svg';
import './App.css';

const algo = "jsx"
function App() {
  return (
    <main>
      <h3>coisa escrita com jsx ---{">"} {algo}</h3>
      <Componente/>
      <Componente_com_prop coisa="(isso é um prop)"/>
      <a href='https://github.com/Johann-Fera/react-de-verdade-dessa-vez' target="_blank">ta no repositório o mermaid de virtualDOM</a>
      <ul>
        {coisas.map((algum) => (
        <li key={algum}>{algum}</li>
        ))}
      </ul>
      <Mensagem_restrita permissao="tem"/>
      <Mensagem_restrita/>
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

let coisas = ["coisos", "coisinha", "coisado", "lista e key"]

function Mensagem_restrita({permissao}) {
  if (permissao == "tem") {
    return (
      <p>posso ver a mensagem? sim :D , passei da condicional</p>
    );
  } else return (
    <p>posso ver a mensagem? não D: , não passei da condicional</p>
  );
}

export default App;
