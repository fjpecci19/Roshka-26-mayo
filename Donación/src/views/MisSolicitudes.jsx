import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Solicitudes.css"
import axios from 'axios'

function MisSolicitudes() {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  const solicitudHandle = (event) => {
    event.preventDefault()
    const data = {
      solicitud: event.target.elements.des.value,
      fecha_limite: event.target.elements.fecha.value,
      volumenes_necesarios: event.target.elements.vol.value,
      nombre_apellido_donatario: event.target.elements.name.value,
      cedula_donatario: event.target.elements.ci.value,
      telefono_contacto: event.target.elements.tel.value,
      tipo_sangre: event.target.elements.tipo.value,
      establecimiento: event.target.elements.local.value
  }
    if (data.solicitud == "" || data.fecha_limite == "" || data.volumenes_necesarios == "" || data.nombre_apellido_donatario == ""
    || data.cedula_donatario == "" || data.telefono_contacto == "" || data.tipo_sangre == "" || data.establecimiento == ""){
      alert("Completa los campos correctamente")
      return
    }

    axios.post("http://192.168.16.90:8000/api/solicitudes/", data,
     {headers: {Authorization: `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`}})
     .then(result => {
      console.log(result.data)
      alert("Solicitud enviada")
      navigate("/Solicitudes")
     }).catch(error => {
      alert("Ingrese un número para el tipo de sangre")
     })
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
      <form onSubmit={solicitudHandle}>
        <h2 className="titulo">Solicitudes</h2>
        <h2 className="titulo"><Link className="linkeo" onClick={() => handleNavigate("/Solicitudes")}>Todas las solicitudes</Link></h2><br />
        <div className="camposs" >Nombre y apellido</div>
        <h2><input className="input" name="name" type="text"/></h2><br />
        <div className="camposs">Cédula</div>
        <h2><input className="input" name="ci" type="text"/></h2><br />
        <div className="camposs">Tipo de sangre</div>
        <div className="camposs">(1: A+, 2: A-, 3: B+, 4: B-, 5: AB+, 6: AB-, 7: O+, 8: O-)</div>
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

export default MisSolicitudes
