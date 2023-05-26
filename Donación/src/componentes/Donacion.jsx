import React from "react";
import "./Donacion.css"

function Donacion({element}){
    return (
        <div class="container">
            <div className="card">
                Id: {element.id} <br />
                Lugar: {element.local_donacion} <br />
                Longitud: {element.longitud} <br />
                Latitud: {element.latitud} <br />
                Creado por: {element.creado_por} <br />
                Hora de apertura: {element.hora_apertura} <br />
                Hora de cierre: {element.hora_cierre}
            </div>
        </div>

    )
}

export default Donacion
