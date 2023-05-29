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
        Login
      </div>
      <div className="column">
        Certificados
      </div>
    </div>
    <h2>Inicio</h2>
  </div>
  )
}

export default App
