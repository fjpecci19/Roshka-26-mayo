import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from 'axios'
import { useDispatch } from 'react-redux'

function Login() {
    const [mostrar, editar] = useState(false)

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }

    const mostrarContraseña = () => {
        editar(!mostrar)
    }

    const dispatch = useDispatch()

    const submitHandle = (event) => {
        event.preventDefault()
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        axios.post("http://192.168.16.90:8000/api/login/", {"email": email, "password": password})
        .then(result => {
            dispatch({type: "setToken", payload: result.data.token})
            //alert("Sesión iniciada")
            navigate("/Perfil")
            
        }).catch(error => {
            if (!email || ! password){
                alert("Por favor, completa tus datos")
            }else if (error.response){
                if (error.response.status === 404){
                    alert("Correo electrónico no registrado")
                }else if (error.response.status === 401){
                    alert("Contraseña incorrecta")
                }else if (error.response.status === 404){
                    alert("Correo electrónico inexistente")
                }
            }
        })
    }

    
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
                <Link className="Link" onClick={() => handleNavigate("/Perfil")}>Perfil</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Login")}>Login</Link>
            </div>
            <div className="column">
                <Link className="Link" onClick={() => handleNavigate("/Certificados")}>Certificados</Link>
            </div>
        </div>
      <form onSubmit={submitHandle}>
        <h2 className="titulo">Donación Sangre Paraguay</h2>
        <h2>Iniciar Sesión</h2>
        <h2><img src="images/cora.jpg"/></h2>
        <div className="camposs">Email</div>
        <h2><input type="Email" name="email"/></h2><br />
        <div className="camposs">Contraseña</div>
        <h2><input name="password" type={mostrar ? "text" : "password"}/></h2>
        <h2><button className="buttonn" type="button" onClick={mostrarContraseña}>Mostrar 👀</button></h2>
        <div className="cuadradoo">
            <button className="buuttoon" type="submit">Iniciar Sesión</button><br />
            <button className="buuttoon"><Link className="Linkk" to={"/Registros"}>Registrarse</Link></button><br/>
            <button className="buuttoon"><Link className="Linkk" to={"/ReestablecerContraseña"}>¿Olvidaste tu Contraseña?</Link></button>
        </div>
      </form>
      </div>
  )
}

export default Login
