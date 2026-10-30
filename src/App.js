import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

const algo = "jsx"
let counter = 0;
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
      <Inputstate/>
      <Forms/>
      <ContaMudanca/>
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

function Inputstate() {
  const [state, setState] = useState("nada");

  return (
    <div>
      <h2>usando state: {state}</h2>
      <input type='text' onChange={(e) => {
        counter += 1;
        setState(e.target.value);
        }}/>
    </div>
  );
}
//formulario?
function Forms() {
  function enviar(e) {
    e.preventDefault();
    alert("Formulário enviado!");
  }

  return (
    <form onSubmit={enviar}>
      <p>envia forms</p>
      <button type="submit">Enviar</button>
    </form>
  ); 
}
function ContaMudanca() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setCounter(() => count);
  }, [count]); 

  return (
    <div>
      <h2>usando effect: {counter}</h2>
      <input type='text' onChange={(e) => {
        setCount(count + 1);
        }}/>
    </div>
  );
}

export default App;
