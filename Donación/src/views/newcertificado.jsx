import React from 'react'
import { Link } from 'react-router-dom'
import "./newcertificado.css"

function NewCertificado() {
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
    <h2 className="titulo">Generar certificado</h2>
    <div className="newcertif">
        <div className="taitol">Nuevo certificado 
        <br /><br /><div className="relleno"><span>Fecha de donación</span><span><input className="inpuut" type="date"/></span></div>
        <br /><br /><div className="relleno"><span>Local de donación</span><span><input className="inpuut" type="text" /></span></div>
    </div>
        <div><button className="buttoon">Generar certificado</button></div>
        <div><Link to={"/Certificados"}><button className="buttoon">Cancelar</button></Link></div>
    </div>
  </div>
  )
}

export default NewCertificado
