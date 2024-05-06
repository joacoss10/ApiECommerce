import React, { useState, useEffect } from "react";
import ComboBox from "./ComboBox";
import { useLocation } from 'react-router-dom';
import "../styles/Vender.css"
import { useNavigate } from 'react-router-dom';

const EditarVender = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productData } = location.state;


  const [formData, setFormData] = useState({
    titulo: productData.nombre,
    descripcion: productData.descripcion,
    stock: productData.stockDisponible,
    precio: productData.precio,
    categoria: productData.categoria,
    imagen: productData.imagenURL
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const enviar = () => {
    if (formData.titulo.trim() && formData.descripcion && formData.precio && formData.stock && formData.categoria && formData.imagen) {
      window.alert('Publibacion editada');
      //SUBIR CAMBIOS A LA BD
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
