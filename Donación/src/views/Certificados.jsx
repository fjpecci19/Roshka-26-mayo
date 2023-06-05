import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Certificados.css"

function Certificados() {
  const [certi, setCerti] = useState([])

  function llamarALaApi(){
    axios.get("http://192.168.16.90:8000/api/certificados/", {
      headers: {
        'Authorization': `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`
      }
      }).then(result => {
          setCerti(result.data.data)
          console.log(result.data.data)
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
      <h2 className="titulo">Certificados</h2>
      <h2><button className="buttoon"><Link className="Linkk" to={"/NewCertificado"}>Generar nuevo certificado</Link></button></h2>
      <div className="certif">
        <h2></h2>
        {certi.map((certificado, index) => (
          <div key={index} className="title">Certificado de donación
            <br /><br /><div className="datos"><span>Establecimiento:</span><span>{certificado.local_donacion}</span></div>
            <br /><div className="datos"><span>Apellido:</span><span>{certificado.user.surname}</span></div>
            <br /><div className="datos"><span>Nombre:</span><span>{certificado.user.name}</span></div>
            <br /><div className="datos"><span>Sexo:</span><span>{certificado.user.sexo}</span></div>
            <br /><div className="datos"><span>Cédula de identidad:</span><span>{certificado.user.nro_cedula}</span></div>
            <br /><div className="datos"><span>Última donación:</span><span>{certificado.user.ult_vez_donado}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificados
