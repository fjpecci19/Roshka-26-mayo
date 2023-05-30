import React from 'react'
import { Link } from 'react-router-dom'

function Contraseña() {
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
      <h2>Enviaremos un correo para reestablecer tu contraseña</h2>
      <h2><input type="email" placeholder="Ingresa tu e-mail"/></h2>
      <h2><button type="submit">Enviar</button></h2>
    </div>
  )
}

export default Contraseña
