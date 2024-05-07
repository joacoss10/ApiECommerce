import React from 'react'
import Nav from '../components/Nav';
import '../styles/checkout.css'
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    const handleAquiClick = () => {
        navigate('/');
    }
    return (
        <div className='checkout-page'>
            <Nav />
            <div className="checkout-container">
                <div className="checkout-img">
                    <img src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg" />
                </div>
                <div className="checkout-text">
                    <h2 className='info'>Gracias por elegirnos!</h2>

                    <h4 className='info'>Compra realizada con exito</h4>
                    <span className='info'>Para volver al inicio presione </span> <span id='checkout-inicio' onClick={handleAquiClick}>aquí</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout