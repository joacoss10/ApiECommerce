import React from 'react';
import MediosDePago from '../components/MediosDePago';
import Nav from '../components/Nav';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MediosDePagoPage() {
    


    const totalRedux = useSelector(state => state.cart.total);
    console.log('t red', totalRedux);
    //window.alert(cupon);
    return (
        <div>
            <Nav />
            <MediosDePago/>
        </div>
    );
}

export default MediosDePagoPage;

