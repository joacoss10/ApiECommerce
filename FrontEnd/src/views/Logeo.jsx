import React from "react";
import { useState } from "react";

const Logeo = ({ onLogin }) => {
    const [loginSuccess, setLoginSuccess] = useState();
    const usuario = '' //es el nombre de usuario que se traeria de la bd o el que se registra
    if (loginSuccess) {
        onLogin(usuario)
    }
    //si se pudo logear tenes que poner en true el "loginSucces"
    return (
        <div>
            <h1>Vista de loggeo</h1>
        </div>
    );
};
export default Logeo