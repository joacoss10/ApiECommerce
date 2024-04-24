import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/EstadoDeLoggeo.css'
import logo from '../assets/logo.jpg'
const EstadoDeLoggeo = ({ isLoggedIn, userName }) => {

    return (
        <div class="ContenedorLoggeo">
            <a href="/">
                <img id="ImagenLogo" src={logo} width='10%'></img >
            </a>

            {
                isLoggedIn ? (
                    <li id="Saludo">Bienvenido {userName}</li>
                ) : (
                    <li id="InciarSesion"> <Link to="/Loggeo">Iniciar sesion</Link></li>
                )
            }
        </div >
    );

};
export default EstadoDeLoggeo 