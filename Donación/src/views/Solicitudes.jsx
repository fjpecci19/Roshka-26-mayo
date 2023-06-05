import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Solicitudes.css"
import axios from 'axios'

function Solicitudes() {
  const navigate = useNavigate()

  function handleClick(){
    navigate("/MisSolicitudes")
  }
  
  const solicitudHandle = (event) => {
    event.preventDefault()
    const nombre = event.target.elements.name.value
    const cedula = event.target.elements.ci.value
    const sangre = event.target.elements.tipo.value
    const local = event.target.elements.local.value
    const volumen = event.target.elements.vol.value
    const fecha = event.target.elements.fecha.value
    const telefono = event.target.elements.tel.value
    const descripcion = event.target.elements.des.value

    axios.post("http://192.168.16.90:8000/api/solicitudes/", {"nombre_apellido_donatario": nombre, "cedula_donatario": cedula,
     "tipo_sangre": sangre, "establecimiento": local, "volumenes_necesarios": volumen, "fecha_limite": fecha,
     "telefono_contacto": telefono, "solicitud": descripcion},
     {headers: {'Authorization': `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`}})
     .then(result => {
      console.log(result.data)
      alert("Solicitud enviada")
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
      <form onSubmit={solicitudHandle}>
        <h2 className="titulo">Solicitudes</h2>
        <h2 className="titulo"><Link className="linkeo" onClick={handleClick}>Mis solicitudes</Link></h2><br />
        <div className="camposs" >Nombre y apellido</div>
        <h2><input className="input" name="name" type="text"/></h2><br />
        <div className="camposs">Cédula</div>
        <h2><input className="input" name="ci" type="text"/></h2><br />
        <div className="camposs">Tipo de sangre</div>
        <h2><input className="input" name="tipo" type="text"/></h2><br />
        <div className="camposs">Establecimiento</div>
        <h2><input className="input" name="local" type="text"/></h2><br />
        <div className="camposs">Volumen</div>
        <h2><input type="text" name="vol"/></h2><br />
        <div className="camposs">Fecha límite</div>
        <h2><input type="date" name="fecha"/></h2><br />
        <div className="camposs">Teléfono</div>
        <h2><input type="text" name="tel"/></h2><br />
        <div className="camposs">Descripción</div>
        <h2><input className="des" type="text" name="des"/></h2><br />
        <br /><h2><button type="submit" className="buuttoon">Enviar</button></h2>
      </form>
    </div>
  )
}

export default Solicitudes
