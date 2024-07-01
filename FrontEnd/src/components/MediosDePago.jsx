import React from 'react'
import "../styles/medioDePago.css"
import { useNavigate } from 'react-router-dom';
const MediosDePago = (cupon) => {
    console.log("mediosdepago", cupon.cupon)
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/medioDePago/tarjeta?cupon=${cupon.cupon}`);
    };
    const handleButtonClick2 = () => {
        navigate(`/medioDePago/mercadoPago`);//redireccionado a mp
    };

    return (
        <div className="medios-de-pago-container">
            <label htmlFor='Seleccione metodo de pago' id='TituloLabel'>
                <b>Seleccione metodo de pago</b>
            </label>
            <div className="buttons-container">
                <button id="mercadoPagoButton" className="payment-button" onClick={handleButtonClick2}>
                    Mercado Pago
                </button>
                <button id="tarjetaButton" className="payment-button" onClick={handleButtonClick}>
                    Tarjeta
                </button>
            </div>
        </div>
    );
};
export default MediosDePago