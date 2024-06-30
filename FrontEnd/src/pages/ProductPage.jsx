import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Accordion from '../components/Accordion';
import "../styles/productpage.css"
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../services/CartContext'; // Importa el hook useCart
import ProductGallery from '../components/ProductGallery';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector de React Redux
import { addToCart } from '../redux/cartActions'; // Importa la acción addToCart

function ProductPage({ producto }) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Obtén la función dispatch de React Redux
  const cartItems = useSelector(state => state.cart.cartItems); // Obtén el estado del carrito de compras desde Redux
  
  const handleClick = () => {
    navigate(`/categoria/${producto.categoria}/1`);
  }

  useEffect(() => {
    const isProductInCart = cartItems.find(item => item.id === producto.id);
    setIsAddedToCart(!!isProductInCart);
  }, [cartItems, producto.id]);

  const [cantidad, setCantidad] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    if (producto.stockDisponible === 0) {
      setCantidad(0);
    } else {
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
    const item = {
      ...producto,
      cantidad: cantidad
  };
  dispatch(addToCart(item))
    setIsAddedToCart(true);
  };
  
  const imageUrl = Array.isArray(producto.imagenURL) ? producto.imagenURL[0] : producto.imagenURL;
  return (
    <div className="productPage">
      <Nav />
      <div className="productContainer">
        <ProductGallery producto={producto}></ProductGallery>
        {/*
        <div className="imgContainer">
          <img src={imageUrl} alt="" />
        </div>
        */}
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
              <button onClick={handleAgregarAlCarrito} disabled={!isClickable}><p id='p'>Agregar </p> </button>
            </div>
          </div>
          <div className="aviso-producto">
            {isAddedToCart && <span className="added-to-cart">Agregaste este producto al carrito {/*<Link to='/cart'>Ver Carrito</Link>*/}</span>}
          </div>
          <div className="accordion">
            <Accordion />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;


