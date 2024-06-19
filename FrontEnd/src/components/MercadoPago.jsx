// MercadoPago.js
import React from 'react';
import QRCode from 'react-qr-code';
import '../styles/MercadoPago.css';
import logo from '../assets/Multimedia.jpeg';

const MercadoPago = () => {
    const qrData = 'https://www.instagram.com/brunobianchi00/?hl=en'; // URL del QR que deseas mostrar

    return (
        <div className="mercado-pago-container">
            <div className="barra-celeste">
                <h2>Pago con Mercado Pago</h2>
            </div>
            <div className="image-container">
                <img src={logo} alt="Logo" className="payment-logo" />
            </div>
            <div className="qr-code">
                <QRCode value={qrData} size={200} />
            </div>
            <p>Escanee el código QR para realizar el pago con Mercado Pago.</p>

        </div>
    );
};

export default MercadoPago;

