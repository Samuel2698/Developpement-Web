import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar Componentes 

import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad) {
  let presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <p>Tengo {edad}</p>
    </div>
  );
  return presentacion
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

        <section className='componentes'>
          <MiComponente/>
          <MiComponente/>
          <MiComponente/>
        </section>

      </header>
      
      
    </div>
  );
}

export default App;
