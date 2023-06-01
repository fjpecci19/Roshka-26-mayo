import React from 'react'
import { Link } from 'react-router-dom'
import "./Solicitudes.css"

function Solicitudes() {
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
      <h2 className="titulo">Solicitudes</h2><br />
      <div className="camposs">Nombre y apellido</div>
      <h2><input className="input" type="text"/></h2><br />
      <div className="camposs">Cédula</div>
      <h2><input className="input" type="text"/></h2><br />
      <div className="camposs">Tipo de sangre</div>
      <h2>
        <select>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
      </h2><br />
      <div className="camposs">Establecimiento</div>
      <h2>
        <select>
          <option>FCA CAMPUS</option>
          <option>El Cantaro</option>
          <option>SODEP</option>
          <option>Roshka</option>
        </select>
      </h2><br />
      <div className="camposs">Volumen</div>
      <h2><input type="text"/></h2><br />
      <div className="camposs">Fecha límite</div>
      <h2><input type="date"/></h2><br />
      <div className="camposs">Teléfono</div>
      <h2><input type="text"/></h2><br />
      <div className="camposs">Descripción</div>
      <h2><input className="des" type="text"/></h2><br />
      <br /><h2><button type="submit" className="buuttoon">Enviar</button></h2>
    </div>
  )
}

export default Solicitudes
