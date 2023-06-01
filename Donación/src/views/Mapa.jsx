import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Link } from 'react-router-dom';
import datos from '../data/datos'
import "./Mapa.css"

function Mapa() {
    const position = [-23.442503, -58.443832]

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
        <div>
            <h2 className="titulo">Mapa</h2>
        </div>
        <MapContainer className="coso" center={position} zoom={5} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            datos.map((local) => {return <Marker position={[local.latitud, local.longitud]}>
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

export default Mapa
