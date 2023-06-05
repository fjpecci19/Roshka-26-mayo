import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Perfil.css"
import axios from 'axios'

function Perfil() {
    const [enviar, enviada] = useState(true)

    const solicitud = () => {
        enviada(!enviar)
    }

    const [user, setUser] = useState({name: "", surname: "", fecha_nacimiento: "", email: "", ult_vez_donado: "", sexo: "", nro_cedula: ""});

    function llamarALaApi(){
        axios.get("http://192.168.16.90:8000/api/user/", {
            headers: {
              'Authorization': `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`
            }
        })
        .then(result => {
            setUser(result.data)
            console.log(result.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        llamarALaApi()
    }, [])

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
      <form>
        <h2 className="titulo">Perfil<div><img onClick={solicitud} src={enviar ? "images/Correct.jpg":"images/Incorrect.jpg"}/></div></h2>
        <h2><div className="section">
        <h2></h2>
        <div className="nom"><span>Nombre:</span><span id="name">{user.name}</span></div>
        <h2></h2>
        <div className="nom"><span>Apellido:</span><span id="apellido">{user.surname}</span></div>
        <h2></h2>
        <div className="nom"><span>Fecha de nacimiento:</span><span id="fecha">{user.fecha_nacimiento}</span></div>
        <h2></h2>
        <div className="nom"><span>Email:</span><span id="email">a{user.email}</span></div>
        <h2></h2>
        <div className="nom"><span>Última donación:</span><span id="donacion">{user.ult_vez_donado}</span></div>
        <h2></h2>
        <div className="nom"><span>Sexo:</span><span id="sexo">{user.sexo}</span></div>
        <h2></h2>
        <div className="nom"><span>CI:</span><span id="ci">{user.nro_cedula}</span></div>
        <h2></h2>
        </div></h2>
        <h2><button type="button" className="buuttoon">Editar información</button></h2>
        <h2><button type="button" className="buuttoon">Cambiar Contraseña</button></h2>
        <h2><button className="buuttoon"><Link className="Linkk" to={"/Login"}>Cerrar Sesión</Link></button></h2>
      </form>
    </div>
  )
}

export default Perfil
