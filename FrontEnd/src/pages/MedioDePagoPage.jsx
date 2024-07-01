import React from 'react';
import MediosDePago from '../components/MediosDePago';
import Nav from '../components/Nav';
import { useLocation } from 'react-router-dom';

function MediosDePagoPage() {
    const location = useLocation();
    const cupon = new URLSearchParams(location.search).get('cupon');
    console.log('mediodepagopage',cupon);
    //window.alert(cupon);
    return (
        <div>
            <Nav />
            <MediosDePago cupon = {cupon}/>
        </div>
    );
}

export default MediosDePagoPage;

