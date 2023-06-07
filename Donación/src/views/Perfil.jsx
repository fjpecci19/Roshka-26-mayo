import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Perfil.css';
import axios from 'axios';

function Perfil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enviar, enviada] = useState(true);
  const token = useSelector((state) => state.token);

  const handleNavigate = (path) => {
    if (!token){
      alert("Inicia sesión primero")
      navigate("/Login")
    }else{
      navigate(path);
    }
  };

  const cerrarSesion = () => {
    dispatch({ type: 'nullToken' });
    navigate('/Login');
  };

  const solicitud = () => {
    enviada(!enviar);
  };

  const [user, setUser] = useState({
    name: '',
    surname: '',
    fecha_nacimiento: '',
    email: '',
    ult_vez_donado: '',
    sexo: '',
    nro_cedula: '',
  });

  const llamarALaApi = () => {
    axios
      .get('http://192.168.16.90:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setUser(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error: ' + error);
        navigate('/Login');
      });
  };

  useEffect(() => {
    llamarALaApi()
  }, []);

  return (
    <div>
      <div className="container">
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Mapa")}>
            Mapa
          </Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Solicitudes")}>
            Solicitudes
          </Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Perfil")}>
            Perfil
          </Link>
        </div>
        <div className="column">
          <Link className="Link" onClick={() => handleNavigate("/Login")}>
            Login
          </Link>
        </div>
        <div className="column">
          <Link
            className="Link"
            onClick={() => handleNavigate("/Certificados")}
          >
            Certificados
          </Link>
        </div>
      </div>
      <form>
        <h2 className="titulo">
          Perfil
          <div>
            <img
              onClick={solicitud}
              src={enviar ? "images/Correct.jpg" : "images/Incorrect.jpg"}
            />
          </div>
        </h2>
        <h2>
          <div className="section">
            <h2></h2>
            <div className="nom">
              <span>Nombre:</span>
              <span id="name">{user.name}</span>
            </div>
            <h2></h2>
            <div className="nom">
              <span>Apellido:</span>
              <span id="apellido">{user.surname}</span>
            </div>
            <h2></h2>
            <div className="nom">
              <span>Fecha de nacimiento:</span>
              <span id="fecha">{user.fecha_nacimiento}</span>
            </div>
            <h2></h2>
            <div className="nom">
              <span>Email:</span>
              <span id="email">{user.email}</span>
            </div>
            <h2></h2>
            <div className="nom">
              <span>Sexo:</span>
              <span id="sexo">{user.sexo}</span>
            </div>
            <h2></h2>
            <div className="nom">
              <span>CI:</span>
              <span id="ci">{user.nro_cedula}</span>
            </div>
            <h2></h2>
          </div>
        </h2>
        <h2>
          <button type="button" className="buuttoon">
            Editar información
          </button>
        </h2>
        <h2>
          <button type="button" className="buuttoon">
            Cambiar Contraseña
          </button>
        </h2>
        <h2>
          <button onClick={cerrarSesion} className="buuttoon">
            Cerrar Sesión
          </button>
        </h2>
      </form>
    </div>
  );
}

export default Perfil;
