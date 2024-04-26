import React from "react";
import ProductCard from "../commons/ProductCard";
const PublicacionesVendedor = (userName) => {
    const producto = {
        titulo: 'Remera de Argentina',
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg",
        descripcion: "Remera oficial de la selección argentina de fútbol. Perfecta para mostrar tu apoyo al equipo nacional. Hecha con materiales de alta calidad y cómoda de llevar.",
        precio: 29.99,
        stock: 50
    }

    return (
        <div>
            <ProductCard product={producto} />
        </div >
    );
};
export default PublicacionesVendedor
//Falta:1.OPCIONAL Si se quiere mejorar el diseño de las productcard
//2.Obligatorio (facu) hay que hacer que lea los producto del json (base de datos ;) y ver que las targetas no se
//desacomoden cuando hayan varios productos, si pasa lo mano corregir (probar con mucho ejemplo 7)
//3.Obligatorio (bruno) hacer la parte donde el loco puede editar su producto (vista)