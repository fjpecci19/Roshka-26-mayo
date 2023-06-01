import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Perfil.css"

function Perfil() {
    const [enviar, enviada] = useState(true)

    const solicitud = () => {
        enviada(!enviar)
    }

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
      <h2>Perfil<div className="amigo" ><img onClick={solicitud} src={enviar ? "images/perfil.jpg" : "images/sent.jpg"}/></div></h2>
      <h2><div className="section">
      <h2></h2>
      <div className="nom"><span>Nombre:</span><span>Alan Toro</span></div>
      <h2></h2>
      <div className="nom"><span>Fecha de nacimiento:</span><span>22/10/1999</span></div>
      <h2></h2>
      <div className="nom"><span>Email:</span><span>alan@gmail.com</span></div>
      <h2></h2>
      <div className="nom"><span>Última donación:</span><span>11/22/2022</span></div>
      <h2></h2>
      <div className="nom"><span>Sexo:</span><span>Masculino</span></div>
      <h2></h2>
      <div className="nom"><span>CI:</span><span>4556730</span></div>
      </div></h2>
      <h2><div className="cuadro"><div className="inside">Editar información</div></div></h2>
      <h2><div className="cuadro"><div className="inside">Cambiar Contraseña</div></div></h2>
      <h2><div className="cuadro"><div className="inside">Cerrar Sesión</div></div></h2>
    </div>
  )
}

export default Perfil
