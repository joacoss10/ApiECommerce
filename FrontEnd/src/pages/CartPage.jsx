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
import { addToCart, removeFromCart, clearCart } from '../redux/cartActions';
import { useDispatch } from 'react-redux';

function CartPage() {
    const dispatch = useDispatch(); // Obtén la función dispatch de React Redux
    const cartItems = useSelector(state => state.cart.cartItems); // Obtén el estado del carrito de compras desde Redux
    const [envio, setEnvio] = useState('Gratis');

    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`)
    }

    const aumentarCantidad = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.cantidad < item.stockDisponible && item.cantidad < 6) {
                return { ...item, cantidad: item.cantidad + 1 };
            }
            return item;
        });
        dispatch(setCartItems(updatedCartItems));
    }

    const disminuirCantidad = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.cantidad > 1) {
                return { ...item, cantidad: item.cantidad - 1 };
            }
            return item;
        });

        dispatch(setCartItems(updatedCartItems));
    }

    const eliminarProducto = (id) => {
        dispatch(removeFromCart(id));
    }

    useEffect(() => {
        const total = getTotal(); // Obtener el total
        // Actualizar el costo de envío en función del total
        if (total < 100000) {
            setEnvio(5000); // Si el total es menor a 100000, el envío cuesta 5000
        } else {
            setEnvio(0); // Si el total es mayor o igual a 100000, el envío es gratis
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
        //dispatch(clearCart());
        navigate('/checkout/success');
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const getCantidadItems = () => {
        return cartItems.reduce((total, item) => total + item.cantidad, 0);
    };

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
                            {cartItems.map((item, index) => (
                                <div className="item" key={index}>
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
                                                <RemoveIcon fontSize='small' className='cart-controllers' onClick={() => disminuirCantidad(item.id)} />
                                                <div className="cart-number">
                                                    <span>{item.cantidad}</span>
                                                </div>
                                                <AddIcon fontSize='small' className='cart-controllers' onClick={() => aumentarCantidad(item.id)} />
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


