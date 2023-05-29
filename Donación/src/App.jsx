import './App.css'
import {Link} from 'react-router-dom';


function App() {
  return(
  <div>
    <div className="container">
      <div className="column">
        <Link to={"/Mapa"}>Mapa</Link>
      </div>
      <div className="column">
        <Link to={"/Solicitudes"}>Solicitudes</Link>
      </div>
      <div className="column">
        Perfil
      </div>
      <div className="column">
        Login
      </div>
      <div className="column">
        Certificados
      </div>
    </div>
    <img src="images/Goku.jpg"/><img src="images/Goku.jpg"/>
  </div>
  )
}

export default App
