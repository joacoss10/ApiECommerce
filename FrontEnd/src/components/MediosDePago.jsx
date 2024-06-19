import React from 'react'
import "../styles/medioDePago.css"
import { useNavigate } from 'react-router-dom';
const MediosDePago = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/medioDePago/tarjeta');
    };
    const handleButtonClick2 = () => {
        navigate('/medioDePago/mercadoPago');//redireccionado a mp
    };

    return (
        <div>
            <label htmlFor='Seleccione metodo de pago' id='TituloLabel'>
                <b>Seleccione metodo de pago</b>
            </label>
            <button id="mercadoPagoButton" className="payment-button" onClick={handleButtonClick2}>
                Mercado Pago
            </button>
            <button id="tarjetaButton" className="payment-button" onClick={handleButtonClick}>
                Tarjeta
            </button>
        </div>
    );
};
export default MediosDePago