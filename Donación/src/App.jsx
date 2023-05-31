import './App.css'
import {Link} from 'react-router-dom';


function App() {
  return(
  <div>
    <div className="container">
      <div className="column">
        <Link to={"http://localhost:5173/"}>Inicio</Link>
      </div>
      <div className="column">
        <Link to={"/Mapa"}>Mapa</Link>
      </div>
      <div className="column">
        <Link to={"/Solicitudes"}>Solicitudes</Link>
      </div>
      <div className="column">
        <Link to={"/Perfil"}>Perfil</Link>
      </div>
      <div className="column">
        <Link to={"/Login"}>Login</Link>
      </div>
      <div className="column">
        <Link to={"/Certificados"}>Certificados</Link>
      </div>
    </div>
    <h2>¡Bienvenido a la página de donación de sangre!</h2>
    <h2><img className="imag" src="images/apple.jpg"/></h2>
  </div>
  )
}

export default App
