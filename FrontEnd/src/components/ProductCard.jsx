import React from "react";
import '../styles/ProductCard.css'
const ProductCard = ({ product, onDeleteProduct }) => {
    const { id, imagen, titulo, descripcion, precio, stock } = product;

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Estás seguro de que queres eliminar este producto?');

        if (isConfirmed) {
            // Llamar a la función para eliminar el producto
            onDeleteProduct(product.id);
        }
    };

    return (
        <div className="product-card">
            <section>
                <img src={imagen} className="product-image" alt={titulo} />
            </section>
            <section className="Texto">
                <h2 id="product-title">{titulo}</h2>
                <p id="product-description">{descripcion}</p>
            </section>
            <section className="StockYPrecio">
                <p><b>${precio}</b></p>
                <p><b>Stock: {stock}</b></p>
            </section>
            <section className="Botones">
                <button className="Eliminar" onClick={handleDeleteClick}>🗑️</button>
                <button className="Editar">✏️</button>
            </section>
        </div>
    );
};

export default ProductCard;
