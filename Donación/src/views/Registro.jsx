import React from 'react'
import "./Registros.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Registros() {
    const [mostrar, editar] = useState(false)
    const mostrarContraseña = () => {
        editar(!mostrar)
    }

    const [show, edit] = useState(false)
    const showContraseña = () => {
        edit(!show)
    }

    const registroHandle = (event) => {
        event.preventDefault()
        const nombres = event.target.elements.nombres.value
        const apellidos = event.target.elements.apellidos.value
        const ci = event.target.elements.ci.value
        const sex = event.target.elements.sex.value
        const fechanac = event.target.elements.fechanac.value
        const email = event.target.elements.email.value
        const contra = event.target.elements.contra.value
        const confirm = event.target.elements.confirm.value
        if (contra != confirm){
            alert("Las contraseñas no coinciden")
            return 
        }
        axios.post("http://192.168.16.90:8000/api/registro/", {"name": nombres, "surname": apellidos, "nro_cedula": ci, "sexo": sex,
         "fecha_nacimiento": fechanac, "email": email, "password": contra})
         .then(result => {
            alert("Cuenta creada!")
            console.log(result.data)
            window.location.reload()
         })
    }

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
      <form onSubmit={registroHandle}>
        <h2 className="titulo">Registro</h2><br />
        <div className="camposs">Nombres</div>
        <h2><input name="nombres" type="text"/></h2><br />
        <div className="camposs">Apellidos</div>
        <h2><input name="apellidos" type="text"/></h2><br />
        <div className="camposs">Cédula de Identidad</div>
        <h2><input name= "ci" type="text"/></h2><br />
        <div className="camposs">Sexo</div>
        <h2><select name="sex">
            <option>Masculino</option>
            <option>Femenino</option>
            </select>
        </h2><br />
        <div className="camposs">Fecha de nacimiento</div>
        <h2><input name="fechanac" type="date"/></h2><br />
        <div className="camposs">Email</div>
        <h2><input name="email" type="email"/></h2><br />
        <div className="camposs" id="cont">Contraseña</div>
        <h2><input name="contra" type={mostrar ? "text" : "password"}/></h2>
        <h2><button type="button" onClick={mostrarContraseña}>Mostrar 👀</button></h2><br />
        <div className="camposs" id="conf">Confirmar Contraseña</div>
        <h2><input name= "confirm" type={show ? "text" : "password"}/></h2>
        <h2><button type="button" onClick={showContraseña}>Mostrar 👀</button></h2><br />
        <div className="cuadrado">
            <button className="buttoon">Registrarse</button>
        </div>
      </form>
    </div>
  )
}

export default Registros
