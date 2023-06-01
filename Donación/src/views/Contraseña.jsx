import React from 'react'
import { Link } from 'react-router-dom'
import "./Contraseña.css"

function Contraseña() {
  return (
    <div>
      <div className="container">
          <div className="column">
              <Link className="Link" to={"http://localhost:5173/"}>Inicio</Link>
          </div>
          <div className="column">
              <Link className="Link" to={"/Mapa"}>Mapa</Link>
          </div>
          <div className="column">
              <Link className="Link" to={"/Solicitudes"}>Solicitudes</Link>
          </div>
          <div className="column">
              <Link className="Link" to={"/Perfil"}>Perfil</Link> 
          </div>
          <div className="column">
              <Link className="Link" to={"/Login"}>Login</Link> 
          </div>
          <div className="column">
              <Link className="Link" to={"/Certificados"}>Certificados</Link>
          </div>
      </div>
      <h2>Enviaremos un correo para reestablecer tu contraseña</h2>
      <h2><input type="email" placeholder="Ingresa tu e-mail"/></h2>
      <h2><button className="buttonn" type="submit">Enviar</button></h2>
    </div>
  )
}

export default Contraseña
