import React from 'react'
import { Link } from 'react-router-dom'
import "./Certificados.css"

function Certificados() {
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
      <h2>Certificados</h2>
      <div className="certif">
        <h2></h2>
        <div className="title">Certificado de donación
        <br /><br /><div className="datos">Establecimiento: FCA CAMPUS</div>
        <br /><div className="datos">Apellido:</div><div className="datos2">a</div>
        <br /><div className="datos">Nombre: Alan Toro</div>
        <br /><div className="datos">Sexo: Masculino</div>
        <br /><div className="datos">Cédula: 2372892</div>
        <br /><div className="datos">Fecha de donación: 12/4/2012</div>
        </div>
      </div>
    </div>
  )
}

export default Certificados
