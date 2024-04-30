import React, { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import Accordion from '../components/Accordion';
import "../styles/productpage.css"
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import productos from '../utils/productos.json';
import { useCart } from '../services/CartContext'; // Importa el hook useCart

function ProductPage({ producto }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${producto.categoria}`);
  }

  const { addToCart, checkAndRestoreCartFromLocalStorage, getTotal, cartItems } = useCart(); // Obtén las funciones necesarias del contexto del carrito
  console.log("cart: ", cartItems);
  console.log("total: ", getTotal());

  /*
  useEffect(() => {
    checkAndRestoreCartFromLocalStorage();
  }, []); // Verificar y restaurar el carrito del almacenamiento local al cargar la página
  */
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    // Si el stock del producto es 0, establece la cantidad en 0
    if (producto.stockDisponible === 0) {
      setCantidad(0);
    } else {
      // Si el stock es mayor que 0, asegúrate de que la cantidad sea al menos 1
      setCantidad(1);
    }
  }, [producto.stockDisponible]);

  const aumentarCantidad = () => {
    if (cantidad < 6 && producto.stockDisponible > cantidad) {
      setCantidad(cantidad + 1);
    }
  }

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  const isClickable = producto.stockDisponible > 0;
  const isOutOfStock = producto.stockDisponible === 0;

  const handleAgregarAlCarrito = () => {
    addToCart({ ...producto, cantidad }); // Agrega el producto al carrito con la cantidad seleccionada
  };

  return (
    <div className="productPage">
      <Nav />
      <div className="productContainer">
        <div className="imgContainer">
          <img src={producto.imagenURL} alt="" />
        </div>
        <div className="infoProduct">
          <Chip label={producto.categoria} variant="outlined" color="primary" size="small" onClick={handleClick} />
          <Chip label={producto.stockDisponible > 0 ? "Hay stock" : "Sin stock"} color={producto.stockDisponible > 0 ? "success" : "error"} size="small" className='stock' />
          <h2 className='title'> {producto.nombre} </h2>
          <span className='description-product'>{producto.descripcion}</span>
          <div className="precio">
            <span className='signo'>$</span>
            <span>{producto.precio}</span>
          </div>
          <div className="manage">
            <div className="cantidad">
              <RemoveIcon className='controllers' onClick={disminuirCantidad} />
              <div className="number">
                <span>{cantidad}</span>
              </div>
              <AddIcon className='controllers' onClick={aumentarCantidad} />
            </div>
            <div className={`btn ${isClickable ? '' : 'disabled'}`}>
              <div className={`layer ${isOutOfStock ? 'gray-layer' : ''}`}></div>
              <button onClick={handleAgregarAlCarrito} disabled={!isClickable}><p>Agregar </p> </button>
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;


