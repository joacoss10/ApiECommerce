import React, { useState, useEffect } from "react";
import ComboBox from "./ComboBox";
import { useLocation } from 'react-router-dom';
import "../styles/EditarVender.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const EditarVender = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productData } = location.state;
  const token = useSelector(state=>state.client.token);
  const [stock, setStock] = useState(0);

  console.log('id? ',productData)
 /*
  const [formData, setFormData] = useState({
    titulo: productData.nombre,
    descripcion: productData.descripcion,
    stock: productData.stockDisponible,
    precio: productData.precio,
    categoria: productData.categoria,
    imagen: productData.imagenURL,
    id_producto: productData.id
  });
  */

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const enviar = async(event) => {
    event.preventDefault();
    
      
      //SUBIR CAMBIOS A LA BD
      try {
        const raw = JSON.stringify({
          "id_producto": productData,
          "stockDisponible": stock
          
        });



        const response = await fetch('http://localhost:8080/product/edit', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${token}` // Asegúrate de que 'token' esté definido en tu contexto
            },
            body: raw
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Convertir la respuesta a texto

        console.log(data); // Aquí deberías recibir el string de respuesta del backend

        window.alert("Producto editado exitosamente");

    } catch (error) {
        console.error('Hubo un error al enviar la solicitud:', error);
        // Manejo de errores: mostrar mensaje al usuario, registrar en algún servicio de errores, etc.
    }
      navigate("/PublicacionesVendedor")
    

  }
  const handleStockChange = (e) => {
    setStock(e.target.value);
    console.log('stock ',stock);
  }
  return (
    <main className="Contenedor-vender">
      <form className="Formulario" >

        
        <section id="LabelStockPrecio">
          <label htmlFor='stock' id='StockLabel'><b>Stock</b></label>
          
        </section>
        <section id="InputStockPrecio">
          <input type="number" id='Stock' name='stock' min='1' value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
          <section id='Botones-edit'>
            <input type="submit" id='Enviar' value="Enviar" onClick={enviar} />
          </section>
        </section>

        



        
      </form>
    </main>
  );
};
export default EditarVender;
