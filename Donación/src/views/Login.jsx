import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import axios from 'axios'

function Login() {
    const [mostrar, editar] = useState(false)

    const mostrarContraseña = () => {
        editar(!mostrar)
    }

    const submitHandle = (event) => {
        event.preventDefault()
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        axios.post("http://192.168.16.90:8000/api/login/", {"email": email, "password": password})
        .then(result => {
            alert("Sesión iniciada")
            window.location.href = "/Perfil"
        })
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
      <form onSubmit={submitHandle}>
        <h2>Donación Sangre Paraguay</h2>
        <h2>Iniciar Sesión</h2>
        <h2><img src="images/cora.jpg"/></h2>
        <div className="campos">Email</div>
        <h2><input type="Email" name="email" placeholder="Email"/></h2>
        <h2></h2>
        <div className="campos">Contraseña</div>
        <h2><button type='button' onClick={mostrarContraseña}>Mostrar 👀</button></h2>
        <h2><input name="password" type={mostrar ? "text" : "password"} placeholder="Contraseña"/></h2>
        <div className="cuadrado">
            <button className="textouno" type="submit">Iniciar Sesión</button><br />
            <div className="texto"><Link to={"/Registros"}>Registrarse</Link></div><br/>
            <div className="texto"><Link to={"/ReestablecerContraseña"}>¿Olvidaste tu Contraseña?</Link></div>
        </div>
      </form>
      </div>
  )
}

export default Login
