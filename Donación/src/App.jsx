import datos from './data/datos'
import './App.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  const position = [-23.442503, -58.443832]
        
  return(
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
          <span className="omar">Hora de apertura: {local.hora_apertura} hs.</span><br />
          <span className="omar">Hora de cierre: {local.hora_cierre}hs.</span><br />
          <span className="omar">Coordenadas: </span> <Link to="https://www.google.com/maps/@-25.1941667,-25.1967416,17z?entry=ttu"><span className="omar">{local.latitud}, {local.longitud}</span></Link>
        </Popup>
      </Marker>
      })
    }
  </MapContainer>
  )
}

export default App
