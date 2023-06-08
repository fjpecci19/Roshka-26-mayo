import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Contraseña.css"

function Contraseña() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

  return (
    <div>
        <div className="container">
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("http://localhost:5173")}>Inicio</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Mapa")}>Mapa</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Solicitudes")}>Solicitudes</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Perfil")}>Perfil</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Login")}>Login</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Certificados")}>Certificados</Link>
            </div>
        </div>
        <h2 className="titulo">Enviaremos un correo para reestablecer tu contraseña</h2>
        <h2><input type="email" placeholder="Ingresa tu e-mail"/></h2>
        <h2><button className="buuttoon" type="submit">Enviar</button></h2>
        <h2><button className="buuttoon" type="submit"><Link className="Linkk" to={"/Login"}>Volver</Link></button></h2>
    </div>
  )
}

export default Contraseña
