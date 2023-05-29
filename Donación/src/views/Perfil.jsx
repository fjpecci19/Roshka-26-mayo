import React from 'react'
import { Link } from 'react-router-dom'
import "./Perfil.css"

function Perfil() {
  return (
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
      <h2>Perfil</h2>
    </div>
  )
}

export default Perfil
