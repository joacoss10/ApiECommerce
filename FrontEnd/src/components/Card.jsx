import React from 'react'

import "../styles/card.css";
import {useNavigate} from 'react-router-dom';



function Card( {producto} ) {

    const navigate = useNavigate();
    const handleClickProductView = () => {
        // Redirige a la página del producto con el ID correspondiente
        navigate(`/product/${producto.id}`);
    };

  return (
    <div className='container' onClick={handleClickProductView}>

        <div className='imgBox'>
            <img src={producto.imagenURL} alt="imagen" />
        </div>
        <div className="info">
            <h2> {producto.nombre} </h2>
            <div className="descripcion">
                <span>{producto.descripcion}</span>
            </div>
            
            
        </div>
        <div className="price-space">
            
        </div>
        
        <div className="colors">
            <div className="price">
            <span className='signo'>$</span>
            <span>{producto.precio}</span>
            </div>
        </div>
        
        
    </div>

    
  )
}

export default Card