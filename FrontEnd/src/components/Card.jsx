import React from 'react'
import "../styles/card.css";
import { useNavigate } from 'react-router-dom';



function Card({ producto }) {

    const navigate = useNavigate();
    const handleClickProductView = () => {
        navigate(`/product/${producto.id}`, { state : {producto} });
    };
    const imageUrl = Array.isArray(producto.imagenURL) ? producto.imagenURL[0] : producto.imagenURL;

    const file = producto.files[0];
    return (
        <div className='container' onClick={handleClickProductView}>

            <div className='imgBox'>
                <img src={`data:image/jpeg;base64,${file.content}`} alt="imagen" />
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