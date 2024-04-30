import React from "react";
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
import '../styles/publicacionesvendedor.css';
import productos from '../utils/productos.json';

const PublicacionesVendedor = (userName) => {
    return (
        <div className="div-publicaciones">
            <Nav />
            <div className="publicaciones-container">
                {productos.map(producto => (
                    <ProductCard key={producto.id} product={producto} />
                ))}
            </div>
        </div>
    );
};

export default PublicacionesVendedor;

//3.Obligatorio (bruno) hacer la parte donde el loco puede editar su producto (vista)
//CON EL USERNAME SE VA ABUSCAR A LA BD LOS PRODCUTOS DEL USERNAME QUE PASAN COMO PARAMETRO Y ESO SE RECORRE CON EL MAP