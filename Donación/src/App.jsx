import datos from './data/datos'
import './App.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function App() {
  

  const position = [-23.442503, -58.443832]
        
  return(
  <MapContainer className="coso" center={position} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      datos.map((local, index) => {
        return <Marker key={index} position={[local.latitud, local.longitud]}>
        <Popup>
          Local: {local.local_donacion} <br />
          Dirección: {local.direccion} <br />
          Hora de apertura: {local.hora_apertura} <br /> 
          Hora de cierre: {local.hora_cierre}
        </Popup>
      </Marker>
      })
    }
  </MapContainer>
  )
}

export default App
