import React, { useState, useEffect } from 'react';
import Return from '../components/Return';
import Nav from '../components/Nav';
import "../styles/cart.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import CarritoVacio from '../components/CarritoVacio';
import { addToCart, removeFromCart, clearCart, updateQuantity } from '../redux/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import productos from '../utils/productos.json'

function CartPage() {
    const cartItems = useSelector(state => state.cartItems);
    const [envio, setEnvio] = useState('Gratis');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getCantidadItems=()=>{
        return cartItems.reduce((total, item) => total + item.cantidad, 0);
    }
    const getTotal=()=>{
        
        return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }
    const eliminarProducto = (id)=>{
        console.log(id)
        dispatch(removeFromCart(id))
    }

    const handleProductClick = (id)=>{
        navigate(`/product/${id}`);
    }
    const aumentarCantidad = (id, cant)=>{

        dispatch(updateQuantity(id,cant+1));
    }
    const disminuirCantidad = (id,cant)=>{
        dispatch(updateQuantity(id,cant-1));
    }



    useEffect(() => {
        const total = getTotal(); 
        
        if (total < 100000) {
            setEnvio(5000); 
        } else {
            setEnvio(0); 
        }
    }, [getTotal()]);
    //CUPON

    const [cupon, setCupon] = useState('');
    const [cuponAplicado, setCuponAplicado] = useState(false);

    const handleCuponChange = (event) => {
        setCupon(event.target.value);
    };

    const handleCuponClick = () => {
        if (cupon === '90futbol' || cupon === 'bianchi') {
            setCuponAplicado(true);
        }
    };

    //CHECKOUT

    const handleCheckOutClick = () => {
        //clearCart();
        navigate('/checkout/success');
    }
    return (
        <div className="cart-page">
            <Nav />
            <div className="cart-container">
                <div className="cart-title">
                    <h2>Carrito</h2>
                </div>
                
                <div className="cart-content">
                    {cartItems.length > 0 ? (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div className="item" key={item.id}>
                                    <div className="info">
                                        <IconButton className='delete' aria-label="delete" onClick={() => eliminarProducto(item.id)}>
                                            <ClearIcon />
                                        </IconButton>
                                        <img src={Array.isArray(item.imagenURL) ? item.imagenURL[0] : item.imagenURL} alt="imagen" />
                                        <p onClick={() => handleProductClick(item.id)}>{item.nombre}</p>
                                    </div>
                                    <div className="cart-manage-container">
                                        <div className="cart-manage">
                                            <div className="cart-cantidad">
                                                <RemoveIcon fontSize='small' className='cart-controllers' onClick={() => disminuirCantidad(item.id, item.cantidad)} />
                                                <div className="cart-number">
                                                    <span>{item.cantidad}</span>
                                                </div>
                                                <AddIcon fontSize='small' className='cart-controllers' onClick={() => aumentarCantidad(item.id, item.cantidad)} />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='item-price'>$ {item.precio * item.cantidad}</h4>
                                </div>
                            ))} 
                        </div>
                        ) : (
                            <div className="cart-empty">
                                <nav />
                                <CarritoVacio></CarritoVacio>
                            </div>
                        )}

                        {cartItems.length > 0 && (
                            <div className="cart-info">
                                
                                <h4>Resumen de compra</h4>
                                <div className="productos">
                                    <span>Productos({getCantidadItems()}): </span>
                                    <span>$ {getTotal()}</span>
                                </div>
                                <div className="envio">
                                    <span>Envio: </span>
                                    <span>{envio === 0 ? 'Gratis' : `$ ${envio}`}</span>
                                </div>
                                <div className="cupon">
                                    <div className="cupon-input">
                                        <input type="text" placeholder='Cupon' value={cupon} onChange={handleCuponChange} />
                                    </div>
                                    <div className="cupon-btn">
                                        <button onClick={handleCuponClick}>Aplicar</button>
                                    </div>
                                </div>
                                <div className="cart-total">
                                    <span className='cart-price'>Total: </span>
                                    {cuponAplicado ? (
                                        <span className='cart-price'>$ {getTotal() * 0.8 + envio}</span>
                                    ) : (
                                        <span className='cart-price'>$ {getTotal() + envio}</span>
                                    )}
                                </div>
                                <div className="btn">
                                    <div className="layer"></div>
                                    <button onClick={handleCheckOutClick}>Iniciar Pedido</button>
                                </div>
                                
                            </div>
                        
                        )}
                </div>
            </div>
        </div>
    )
}

export default CartPage;


