import React, { useState, useEffect } from "react";
import ComboBox from "./ComboBox";
import { useLocation } from 'react-router-dom';
import "../styles/Vender.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const EditarVender = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productData } = location.state;
  const token = useSelector(state => state.client.token);



  const [formData, setFormData] = useState({
    titulo: productData.nombre,
    descripcion: productData.descripcion,
    stockDisponible: productData.stockDisponible,
    precio: productData.precio,
    categoria: productData.categoria,
    imagen: productData.imagenURL,
    id_producto: productData.id
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const enviar = async(event) => {
    if (formData.titulo.trim() && formData.descripcion && formData.precio && formData.stock && formData.categoria && formData.imagen) {
      window.alert('Publibacion editada');
      //SUBIR CAMBIOS A LA BD
      try {
        const response = await fetch('http://localhost:8080/product/edit', {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}` // Asegúrate de que 'token' esté definido en tu contexto
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text(); // Convertir la respuesta a texto

        console.log(data); // Aquí deberías recibir el string de respuesta del backend

        window.alert("Producto creado exitosamente");

    } catch (error) {
        console.error('Hubo un error al enviar la solicitud:', error);
        // Manejo de errores: mostrar mensaje al usuario, registrar en algún servicio de errores, etc.
    }
      navigate("/PublicacionesVendedor")
    }

  }
  return (
    <main className="Contenedor-vender">
      <form className="Formulario" >

        <label htmlFor='titulo' id='TituloLabel'><b>Título</b></label>
        <input type="text" id='Titulo' name='titulo' value={formData.titulo} onChange={handleInputChange} pattern="\S.*" placeholder="Escriba el título" required />

        <label htmlFor='descripcion' id='DescripcionLabel'><b>Descripción</b></label>
        <div className="description">
          <textarea id='descripcion' name='descripcion' value={formData.descripcion} onChange={handleInputChange} pattern="\S.*" placeholder="Describa su producto" required></textarea>
        </div>

        <section id="LabelStockPrecio">
          <label htmlFor='stock' id='StockLabel'><b>Stock</b></label>
          <label htmlFor='precio' id='PrecioLabel'><b>Precio</b></label>
        </section>
        <section id="InputStockPrecio">
          <input type="number" id='Stock' name='stock' min='1' value={formData.stock} onChange={handleInputChange} placeholder="Stock" required />
          <input type="number" id='Precio' name='precio' min="0" value={formData.precio} onChange={handleInputChange} placeholder="Precio" required />
        </section>

        <label htmlFor='categoria' id='ComboBoxLabel'><b>Seleccione la categoría</b></label>
        <div className="comboBox-container">
          <ComboBox
            id='ComboBox'
            defaultValue={{ value: formData.categoria, label: formData.categoria }}
            styles={{ control: (provided) => ({ ...provided, width: '100%', marginTop: '1em', marginLeft: '0em' }) }}
            placeholder="Seleccione la categoría del producto..."
          />
        </div>


        <label id='FileLabel'><b>Suba la imagen de su producto</b></label>
        <input type="file" id="File" accept=".jpg, .jpeg, .png" />



        <section id='Botones'>
          <input type="submit" id='Enviar' value="Enviar" onClick={enviar} />
          <input type='reset' id='Restablecer' value='Restablecer' />
        </section>
      </form>
    </main>
  );
};
export default EditarVender;
