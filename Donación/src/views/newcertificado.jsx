import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./newcertificado.css"
import axios from 'axios'

function NewCertificado() {
    const [certi, setCerti] = useState({fecha_donacion: "", local_donacion: ""})

    function llamarALaApi(){
        axios.get("http://192.168.16.90:8000/api/certificados/", {
            headers: {
              'Authorization': `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`
            }
        })
        .then(result => {
            setCerti(result.data.data)
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
        <h2 className="titulo">Generar certificado</h2>
        <div className="newcertif">
            <div className="taitol">Nuevo certificado 
            <br /><br /><div className="relleno"><span>Fecha de donación</span><span>{certi.fecha_donacion}</span></div>
            <br /><br /><div className="relleno"><span>Local de donación</span><span>{certi.local_donacion}</span></div>
        </div>
            <div><button type="submit" className="buttoon">Generar certificado</button></div>
            <div><Link to={"/Certificados"}><button className="buttoon">Cancelar</button></Link></div>
        </div>
    </form>
  </div>
  )
}

export default NewCertificado
