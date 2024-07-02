import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
import '../styles/publicacionesvendedor.css';

import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const PublicacionesVendedor = (userName) => {
    const [productosVendedor, setProductosVendedor] = useState([]);
    //const { username } = useAuth();
    const navigate = useNavigate();
    const token = useSelector(state => state.client.token)
    const username = jwtDecode(token).sub;

    //const productosVendedor = productos.filter(producto => producto.username_vendedor === username)

    useEffect(()=>{
        const fetchBusqueda = async () => {

            //CAMBIAR EL NOMBRE POR EL TOKEN
            
            try {
              const response = await fetch(`http://localhost:8080/product/getByUsername?username=${username}&pageSize=16`,{
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

    const renderProducts = () => {
      console.log(productosVendedor)
      if(productosVendedor != []){
        return productosVendedor.map(producto => (
          <ProductCard key={producto.id} product={producto} />
        ));
      }
    };

    useEffect(() => {
      renderProducts();
    }, [productosVendedor]);


    return (
        <div className="div-publicaciones">
            <Nav />
            <div className="publicaciones-container">
                {renderProducts()}
            </div>
        </div>
    );
};

export default PublicacionesVendedor;

//CON EL USERNAME SE VA ABUSCAR A LA BD LOS PRODCUTOS DEL USERNAME QUE PASAN COMO PARAMETRO Y ESO SE RECORRE CON EL MAP