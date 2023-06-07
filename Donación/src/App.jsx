import './App.css'
import {Link, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  return(
  <div>
    <div className="container">
      <div className="column">
        <Link className="Link" onClick={() => handleNavigate("/Mapa")}>Mapa</Link>
      </div>
      <div className="column">
        <Link className="Link" onClick={() => handleNavigate("/Solicitudes")}>Solicitudes</Link>
      </div>
      <div className="column">
        <Link className="Link" onClick={() => handleNavigate("/Perfil")}>Perfil</Link>
      </div>
      <div className="column">
        <Link className="Link" onClick={() => handleNavigate("/Login")}>Login</Link>
      </div>
      <div className="column">
        <Link className="Link" onClick={() => handleNavigate("/Certificados")}>Certificados</Link>
      </div>
    </div>
  </div>
  )
}

export default App
