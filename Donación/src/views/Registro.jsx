import React from 'react'
import "./Registros.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Registros() {
    const [mostrar, editar] = useState(false)
    const mostrarContraseña = () => {
        editar(!mostrar)
    }

    const [show, edit] = useState(false)
    const showContraseña = () => {
        edit(!show)
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
      <h2>Registro</h2>
      <div className="campos">Nombres</div>
      <h2><input type="text" placeholder="Nombres"/></h2>
      <div className="campos">Apellidos</div>
      <h2><input type="text" placeholder="Apellidos"/></h2>
      <div className="campos">Cédula de Identidad</div>
      <h2><input type="text" placeholder="Cédula de Identidad"/></h2>
      <div className="campos">Sexo</div>
      <h2><select>
        <option>Masculino</option>
        <option>Femenino</option>
        </select>
      </h2>
      <div className="campos">Fecha de nacimiento</div>
      <h2><input type="date"/></h2>
      <div className="campos">Email</div>
      <h2><input type="email" placeholder="Email"/></h2>
      <div className="campos">Contraseña</div>
      <h2><button onClick={mostrarContraseña}>Mostrar 👀</button></h2>
      <h2><input type={mostrar ? "text" : "password"} placeholder="Contraseña"/></h2>
      <div className="campos">Confirmar Contraseña</div>
      <h2><button onClick={showContraseña}>Mostrar 👀</button></h2>
      <h2><input type={show ? "text" : "password"} placeholder="Confirmar Contraseña"/></h2>
      <div className="cuadrado">
        <div className="textooo">Registrarse</div>
      </div>
    </div>
  )
}

export default Registros
