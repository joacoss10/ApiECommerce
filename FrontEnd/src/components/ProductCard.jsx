import React from "react";
import '../styles/productcard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Está seguro que quiere eliminar este producto?');
        if (isConfirmed) {
            // Lógica para eliminar el producto...
        }
    };

    const handleEditClick = () => {
        const isConfirmed = window.confirm('¿Quiere editar este producto?');
        if (isConfirmed) {
            navigate('/EditarVender', { state: { productData: product } });
        }
    };
    const imageUrl = Array.isArray(product.imagenURL) ? product.imagenURL[0] : product.imagenURL;

    console.log(product.nombre)
    return (
        <div className="product-card">
            <section className="SeccionImagen">
                <img src={imageUrl} className="product-image" alt={product.nombre} />
            </section>
            <section className="Texto">
                <h2 id="product-title">{product.nombre}</h2>
                <p id="product-description">{product.descripcion}</p>
            </section>
            <section className="StockYPrecio">
                <p><b>${product.precio}</b></p>
                <p><b>Stock: {product.stockDisponible}</b></p>
            </section>
            <section className="Botones">
                <button className="Eliminar" onClick={handleDeleteClick}>🗑️</button>
                <button className="Editar" onClick={handleEditClick}>✏️</button>
            </section>
        </div>
    );
};

export default ProductCard;
