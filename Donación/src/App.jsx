import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useSelector, useDispatch } from 'react-redux';
import "leaflet/dist/leaflet.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./App.css"


function App() {
  const token = useSelector((state) => state.token);

    const verif = () => {
        if (!token){
          alert("Inicia sesión primero para acceder a tu perfil")
          navigate("/Login")
        }else{
          navigate("/Perfil")
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

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    const position = [-23.442503, -58.443832]
        const [datos, setDatos] = useState([]);

    function llamarALaApi(){
        axios.get("http://192.168.16.90:8000/api/locales/")
        .then(result => {
            setDatos(result.data.data)
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
        <div>
            <h2 className="titulo">Mapa</h2>
        </div>
        <MapContainer className="coso" center={position} zoom={5} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            datos.map((local) => {return <Marker key={local.id} position={[local.latitud, local.longitud]}>
            <Popup>
              <span className="omar">Dirección: {local.direccion}</span><br />
              <span className="omar">Local: {local.local_donacion}</span><br />
              <span className="omar">Horario: {local.hora_apertura} - {local.hora_cierre}hs.</span><br />
              <span className="omar">Coordenadas: </span> <Link to={"https://www.google.com/maps/search/?api=1&query=" + local.latitud + "%2C" + local.longitud} target="_blank"><span className="omar">{local.latitud}, {local.longitud}</span></Link>
            </Popup>
          </Marker>
          })
        }
      </MapContainer>
    </div>
  )
}

export default App
