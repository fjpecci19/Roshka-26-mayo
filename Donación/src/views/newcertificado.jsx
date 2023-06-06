import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./newcertificado.css"
import axios from 'axios'


function NewCertificado() {

    const navigate = useNavigate()

    const certiHandle = (event) => {
        event.preventDefault()
        const datos = {
            fecha_donacion: event.target.elements.fecha.value,
            local_donacion_id: event.target.elements.local.value
        }
        
        if (!datos.fecha_donacion || !datos.local_donacion_id){
            alert("Complete los campos adecuadamente")
            return
        }

        axios.post("http://192.168.16.90:8000/api/certificados/", datos, 
        {headers: {Authorization: `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`}})
        .then(result => {
            console.log(result.data)
            alert("Certificado generado")
            navigate("/Certificados")

        }).catch(error => {
            console.log(error)
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
        <form onSubmit={certiHandle}>
            <h2 className="titulo">Generar certificado</h2>
            <div className="newcertif">
                <div className="taitol">Nuevo certificado 
                <br /><br /><div className="relleno"><span>Fecha de donación</span><span><input name="fecha" className="inpuut" type="date"/></span></div>
                <br /><br /><div className="relleno"><span>Número del local de donación</span><span><input name="local" className="inpuut" type="text" /></span></div>
            </div>
                <div><button type="submit" className="buttoon">Generar certificado</button></div>
                <div><Link to={"/Certificados"}><button className="buttoon">Cancelar</button></Link></div>
            </div>
        </form>
    </div>
  )
}

export default NewCertificado
