import React from "react";
import '../styles/CarritoVacio.css'
import logoCarrito from '../assets/carrito-de-compras.png'

const CarritoVacio = () => {
    return (
        <main className="Contenedor-CarritoVacio">
            <div className="Foto-Carrito">
                <img src={logoCarrito} alt="carrito" />
            </div>
            <div className="Descripcion">
                <h3>Tenés tu carrito vacío. Agregá productos para realizar tu compra.</h3>
            </div>
        </main>
    )
}
export default CarritoVacio