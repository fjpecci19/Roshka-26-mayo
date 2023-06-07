import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mapa from './views/Mapa.jsx'
import Solicitudes from './views/Solicitudes.jsx'
import Perfil from './views/Perfil.jsx'
import Login from './views/Login.jsx'
import Registros from "./views/Registro.jsx"
import Contraseña from './views/Contraseña.jsx'
import Certificados from './views/Certificados.jsx'
import NewCertificado from './views/newcertificado.jsx'
import MisSolicitudes from './views/NuevaSolicitud.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import { Provider } from 'react-redux'
import store from './store/store.js'

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
  },
  {
    path: "Registros",
    element: <Registros/>
  },
  {
    path: "ReestablecerContraseña",
    element: <Contraseña/>
  },
  {
    path: "NewCertificado",
    element: <NewCertificado/>
  },
  {
    path: "MisSolicitudes",
    element: <MisSolicitudes/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>
)
