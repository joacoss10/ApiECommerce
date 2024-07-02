import React from "react";
import '../styles/productcard.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const ProductCard = ({ product }) => {
    const token = useSelector(state => state.client.token);

    console.log(product);
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('¿Está seguro que quiere eliminar este producto?');
        if (isConfirmed) {
            // Lógica para eliminar el producto...
            const fetchEliminar = async () => {
                try {
                  const response = await fetch(`http://localhost:8080/product/delete?id=${product.id}`,{ 
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}` 
                    }
                  });
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                } catch (error) {
                  console.log("Hubo un error");
                }
              };
              fetchEliminar();
              navigate('/')
        }
    };

    const handleEditClick = () => {
        const isConfirmed = window.confirm('¿Quiere editar este producto?');
        if (isConfirmed) {
            navigate('/EditarVender', { state: { productData: product } });
        }
    };
    //const imageUrl = Array.isArray(product.imagenURL) ? product.imagenURL[0] : product.imagenURL;
    const file = product.files[0];
    
    return (
        <div className="product-card">
            <section className="SeccionImagen">
                <img src={`data:image/jpeg;base64,${file.content}`} className="product-image" alt={product.nombre} />
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
