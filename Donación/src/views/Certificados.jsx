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
      <h2>Certificados <Link to={"/NewCertificado"}>+</Link></h2>
      <div className="certif">
        <h2></h2>
        <div className="title">Certificado de donación
        <br /><br /><div className="datos"><span>Establecimiento:</span><span>FCA CAMPUS</span></div>
        <br /><div className="datos"><span>Apellido:</span><span>Toro</span></div>
        <br /><div className="datos"><span>Nombre:</span><span>Alan</span></div>
        <br /><div className="datos"><span>Sexo:</span><span>Masculino</span></div>
        <br /><div className="datos"><span>Cédula de identidad:</span><span>4563214</span></div>
        <br /><div className="datos"><span>Última donación:</span><span>16/4/2021</span></div>
        </div>
      </div>
    </div>
  )
}

export default Certificados
