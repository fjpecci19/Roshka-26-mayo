import React from 'react'
import { Link } from 'react-router-dom'
import "./Solicitudes.css"

function Solicitudes() {
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
      <h2>Solicitudes</h2>
      <div className="campos">Nombre y apellido</div>
      <h2><input className="input" type="text" placeholder="Nombre y apellido"/></h2>
      <div className="campos">Cédula</div>
      <h2><input className="input" type="text" placeholder="Cédula"/></h2>
      <div className="campos">Nombre</div>
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
      </h2>
      <div className="campos">Establecimiento</div>
      <h2>
        <select>
          <option>FCA CAMPUS</option>
          <option>El Cantaro</option>
          <option>SODEP</option>
          <option>Roshka</option>
        </select>
      </h2>
      <div className="campos">Volumen</div>
      <h2><input type="text" placeholder="Volumen"/></h2>
      <div className="campos">Fecha límite</div>
      <h2><input type="date"/></h2>
      <div className="campos">Teléfono</div>
      <h2><input type="text" placeholder="Teléfono"/></h2>
      <div className="campos">Descripción</div>
      <h2><input className="des" type="text" placeholder="Descripción"/></h2>
      <br /><h2><button className="buuttoon">Enviar</button></h2>
    </div>
  )
}

export default Solicitudes
