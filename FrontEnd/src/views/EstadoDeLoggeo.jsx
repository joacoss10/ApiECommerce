import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/EstadoDeLoggeo.css'
const EstadoDeLoggeo = ({ isLoggedIn, userName }) => {

    return (
        <div class="ContenedorLoggeo">
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