import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre, edad) {
  let presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad}</h3>
    </div>
  );
  return presentacion;
}

function App() {

  let nombre = "Samuel Velasco";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo React :D
        </p>
        {HolaMundo(nombre, 23)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
