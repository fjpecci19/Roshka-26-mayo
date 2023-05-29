import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mapa from './views/Mapa.jsx'
import Solicitudes from './views/Solicitudes.jsx'
import Perfil from './views/Perfil.jsx'
import Login from './views/Login.jsx'
import Certificados from './views/Certificados.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "Mapa",
    element: <Mapa/>
  },
  {
    path: "Solicitudes",
    element: <Solicitudes/>
  },
  {
    path: "Perfil",
    element: <Perfil/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Certificados",
    element: <Certificados/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
