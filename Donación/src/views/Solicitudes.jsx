import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import "./Solicitudes.css"

function Solicitudes() {
  const navigate = useNavigate()

  const verif = () => {
    if (!token){
      alert("Inicia sesión para acceder a tu perfil")
      navigate("/Login")
    }else{
      navigate("/MisSolicitudes")
    }
  }

  const verifdos = () => {
    if (!token){
      alert("Inicia sesión para acceder a tus certificados")
      navigate("/Login")
    }else{
      navigate("/Certificados")
    }
  }

  const token = useSelector((state) => state.token);

  const handleNavigate = (path) => {
    navigate(path)
  }

    const [soli, setSoli] = useState([])

    function llamarALaApi(){
        axios.get("http://192.168.16.90:8000/api/solicitudes/", {
        headers: {
            'Authorization': `Bearer 680|mrW9sCo6iLXqcEj8PNYGqB5GGaglXeAWAS4i6lzG`
        }
        }).then(result => {
            setSoli(result.data.data)
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
          <Link className="Link" onClick={() => handleNavigate("/Mapa")}>Mapa</Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Solicitudes")}>Solicitudes</Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={verif}>Perfil</Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Login")}>Login</Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={verifdos}>Certificados</Link>
        </div>
      </div>
      <h2 className="titulo">Solicitudes</h2>
      <h2><button className="buttoon"><Link className="Linkk" onClick={verif}>Nueva Solicitud</Link></button></h2>
      <div className="certif">
        <h2></h2>
        {soli.map((solicitud, index) => (
          <div key={index} className="titlee">Solicitud
            <br /><br /><div className="datos"><span>Nombre y apellido:</span><span>{solicitud.nombre_apellido_donatario}</span></div>
            <br /><div className="datos"><span>Cédula:</span><span>{solicitud.cedula_donatario}</span></div>
            <br /><div className="datos"><span>Tipo de sangre:</span><span>{solicitud.tipo_sangre}</span></div>
            <br /><div className="datos"><span>Establecimiento:</span><span>{solicitud.establecimiento}</span></div>
            <br /><div className="datos"><span>Volumen:</span><span>{solicitud.volumenes_necesarios}</span></div>
            <br /><div className="datos"><span>Fecha límite:</span><span>{solicitud.fecha_limite}</span></div>
            <br /><div className="datos"><span>Teléfono:</span><span>{solicitud.telefono_contacto}</span></div>
            <br /><div className="datos"><span>Descripción:</span><span>{solicitud.solicitud}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solicitudes
