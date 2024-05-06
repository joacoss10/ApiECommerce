import React, { useState, useEffect } from 'react';
import '../styles/productgallery.css';

function ProductGallery({ producto }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  
  useEffect(() => {
    if (Array.isArray(producto.imagenURL) && producto.imagenURL.length > 0) {
      setImagenSeleccionada(producto.imagenURL[0]);
    } else {
      setImagenSeleccionada(producto.imagenURL);
    }
  }, [producto]);

  const handleClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };
  

  return (
    <div className='imgs'>
      {imagenSeleccionada && (
        <div className='selected-img'>
          <img src={imagenSeleccionada} alt="Imagen seleccionada" />
        </div>
      )}
      <div className='product-imgs'>
        {Array.isArray(producto.imagenURL) ? (
          producto.imagenURL.map((imagen, index) => (
            <img 
              key={index} 
              src={imagen} 
              alt={`Imagen ${index}`} 
              onClick={() => handleClick(imagen)} 
              className={imagen === imagenSeleccionada ? 'selected' : ''}
            />
          ))
        ) : (
          <img 
            src={producto.imagenURL} 
            alt="Imagen" 
            onClick={() => handleClick(producto.imagenURL)} 
            className= 'selected'
          />
        )}
      </div>
    </div>
  );
}

export default ProductGallery;