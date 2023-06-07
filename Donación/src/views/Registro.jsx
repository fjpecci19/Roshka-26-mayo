import React from 'react'
import "./Registros.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Registros() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

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
            console.log(result.data)
            alert("Cuenta creada! Ahora registrate para acceder a tu perfil")
            navigate("/Login")
         })
    }

    return (
    <div>
      <div className="container">
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
      <form onSubmit={registroHandle}>
        <h2 className="titulo">Registro</h2><br />
        <div className="camposs">Nombres</div>
        <h2><input name="nombres" type="text"/></h2><br />
        <div className="camposs">Apellidos</div>
        <h2><input name="apellidos" type="text"/></h2><br />
        <div className="camposs">Cédula de Identidad</div>
        <h2><input name= "ci" type="text"/></h2><br />
        <div className="camposs">Sexo (M o F)</div>
        <h2><input name= "sex" type="text"/></h2><br />
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
        <div className="cuadrado">
            <button className='buttoon'><Link className="Linkk" to={"/Login"}>Volver</Link></button>
        </div>
      </form>
    </div>
  )
}

export default Registros
