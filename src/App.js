import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const algo = "jsx"
let counter = 0;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First_half/>} />
        <Route path="/2" element={<Second_half/>} />
      </Routes>
      <div className='Link'>
        <Link to="/">primeiros 6 conceitos</Link>
        <Link to="/2">5 últimos conceitos</Link>
      </div>  
    </BrowserRouter>
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
//de alguma forma ele está sendo chamado duas vezes
function Uso_API() {
  const [txt, setTxt] = useState("nada");
  
  
  useEffect(() => {
    async function carregar() {
    const resposta = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const dados = await resposta.json();
    setTxt(dados.joke);
    }
    carregar();
  }, []);

  return (
    <div>
      <h5>usando api: {txt}</h5>
    </div>
  );
}

function First_half() {

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

function Second_half() {

  return(
    <main>
      <Inputstate/>
      <Forms/>
      <ContaMudanca/>
      <Uso_API/>
    </main>
  )
  
}

export default App;
