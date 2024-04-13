import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Styles/EstadoDeLoggeo.css'
const EstadoDeLoggeo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("joaco");
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