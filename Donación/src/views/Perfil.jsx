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
      <div className="nom">Alan Toro</div>
      <h2><img src="images/Perfil.jpg"/></h2>
      <div className="nom">Fecha de nacimiento: 19/5/2001</div>
      <h2></h2>
      <div className="nom">Email: raul@gmail.com</div>
      <h2></h2>
      <div className="nom">Última donación: 19/5/2011</div>
      <h2></h2>
      <div className="nom">Sexo: Masculino</div>
      <h2></h2>
      <div className="nom">CI: 4314678</div>
      <h2></h2>
      <h2><div className="cuadro"><div className="inside">Editar información</div></div></h2>
      <h2><div className="cuadro"><div className="inside">Cambiar Contraseña</div></div></h2>
      <h2><div className="cuadro"><div className="inside">Cerrar Sesión</div></div></h2>
    </div>
  )
}

export default Perfil
