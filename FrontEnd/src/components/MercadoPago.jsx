// MercadoPago.js
import React from 'react';
import QRCode from 'react-qr-code';
import '../styles/MercadoPago.css';
import logo from '../assets/bruno.jpg';

const MercadoPago = () => {
    const qrData = 'https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-qwOvggc39bzANDKKveZVn4Jcag41h-LHKYEHrdZ3vmNt2Kpvl1ThoCs60QAvD_BwE'; // URL del QR que deseas mostrar
    const HandleOnClick = () => {
        // navigate('/checkout/success');
        window.open('https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv-qwOvggc39bzANDKKveZVn4Jcag41h-LHKYEHrdZ3vmNt2Kpvl1ThoCs60QAvD_BwE')
    }

    return (
        <div className="mercado-pago-container">
            <div className="barra-celeste">
                <h2 >Pago con Mercado Pago</h2>
            </div>
            <div className="image-container">
                <img src={logo} alt="Logo" className="foto" />
            </div>
            <p>Puede escanear el código QR para realizar el pago.</p>
            <div className="qr-code">
                <QRCode value={qrData} size={170} />
            </div>
            <p> O puede pagar por la web</p>
            <button className='BotonPagar' onClick={HandleOnClick} >Pagar</button>
        </div >
    );
};
export default MercadoPago;

