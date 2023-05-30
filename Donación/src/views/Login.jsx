import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
    const [mostrar, editar] = useState(false)

    const mostrarContraseña = () => {
        editar(!mostrar)
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
      <h2>Donación Sangre Paraguay</h2>
      <h2><img src="images/cora.jpg"/></h2>
      <div className="campos">Email</div>
      <h2><input type="Email" placeholder="Email"/></h2>
      <h2></h2>
      <div className="campos">Contraseña</div>
      <h2><button onClick={mostrarContraseña}>Mostrar 👀</button></h2>
      <h2><input type={mostrar ? "text" : "password"} placeholder="Contraseña"/></h2>
      <div className="cuadrado">
        <div className="textouno" type="submit">Iniciar Sesión</div><br />
        <div className="texto"><Link to={"/Registros"}>Registrarse</Link></div><br/>
        <div className="texto"><Link to={"/ReestablecerContraseña"}>¿Olvidaste tu Contraseña?</Link></div>
      </div>
      </div>
  )
}

export default Login
