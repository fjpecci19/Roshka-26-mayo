import React from 'react'
import { Link } from 'react-router-dom'
import "./newcertificado.css"

function NewCertificado() {
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
    <h2>Generar certificado</h2>
    <div className="newcertif">
        <div className="taitol">Nuevo certificado 
        <br /><br /><div className="relleno"><span>Fecha de donación</span><span><input className="inpuut" type="date"/></span></div>
        <br /><br /><div className="relleno"><span>Centro</span><span><select className="selectt">
            <option>Asunción</option>
            <option>Caaguazú</option>
            <option>Ciudad del este</option>
            </select></span></div>
        </div>
        <div><button className="buttoon">Generar certificado</button></div>
        <div><Link to={"/Certificados"}><button className="buttoon">Cancelar</button></Link></div>
    </div>
  </div>
  )
}

export default NewCertificado
