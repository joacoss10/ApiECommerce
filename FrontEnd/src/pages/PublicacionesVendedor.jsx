import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
import '../styles/publicacionesvendedor.css';
import productos from '../utils/productos.json';
import { useAuth } from "../services/AuthContext";
import { useSelector } from "react-redux";

const PublicacionesVendedor = (userName) => {
    const [productosVendedor, setProductosVendedor] = useState([]);
    const { username } = useAuth();

    const token = useSelector(state => state.client.token)

    //const productosVendedor = productos.filter(producto => producto.username_vendedor === username)

    useEffect(()=>{
        const fetchBusqueda = async () => {

            //CAMBIAR EL NOMBRE POR EL TOKEN
            const nombre = 'bautisalva02'
            try {
              const response = await fetch(`http://localhost:8080/product/getByUsername?nombre=${nombre}&page=1&size=2`,{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' ,
                'Authorization': `Bearer ${token}` 
                }
              });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data);
              setProductosVendedor(data);
            } catch (error) {
              console.log("Hubo un error");
            }
          };
          fetchBusqueda();
    },[])


    return (
        <div className="div-publicaciones">
            <Nav />
            <div className="publicaciones-container">
                {productosVendedor.map(producto => (
                    /*productosVendedor.map(producto => (*/                                    //USR ESTA LINEA PARA LA ENTREGA, MUESTRA SOLO LOS DELUSUARIO LOGEADO
                    <ProductCard key={producto.id} product={producto} />
                ))}
            </div>
        </div>
    );
};

export default PublicacionesVendedor;

//CON EL USERNAME SE VA ABUSCAR A LA BD LOS PRODCUTOS DEL USERNAME QUE PASAN COMO PARAMETRO Y ESO SE RECORRE CON EL MAP