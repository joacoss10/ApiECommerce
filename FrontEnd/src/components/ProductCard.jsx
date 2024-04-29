import React from "react";
import '../styles/productcard.css'
const ProductCard = ({ product, onDeleteProduct }) => {

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Estás seguro de que queres eliminar este producto?');

        if (isConfirmed) {
            // Llamar a la función para eliminar el producto
            onDeleteProduct(product.id);
        }
    };
    console.log(product.nombre)
    return (
        <div className="product-card">
            <section>
                <img src={product.imagenURL} className="product-image" alt={product.nombre} />
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
                <button className="Editar">✏️</button>
            </section>
        </div>
    );
};

export default ProductCard;
