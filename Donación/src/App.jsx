import datos from './data/datos'
import './App.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showSubCasilla, setSubCasilla] = useState(true)

    const toggle = () => {
        setSubCasilla(!showSubCasilla)
    }

  const position = [-23.442503, -58.443832]
        
  return(
  <div>
    <div className="container">
      <div className="column">
        Mapa
      </div>
      <div className="column">
        Solicitudes
      </div>
      <div className="column">
        Perfil
      </div>
      <div className="column">
        Login
      </div>
      <div className="column">
        Certificados
      </div>
    </div>
      <MapContainer className="coso" center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          datos.map((local) => {
            return <Marker position={[local.latitud, local.longitud]}>
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
      <span onClick={toggle} className="centro-pagina">{showSubCasilla ? "🡹" : "🡻"}</span>
      <span className="texttto">{showSubCasilla ? "" : "Hola"}</span>
  </div>
  )
}

export default App
