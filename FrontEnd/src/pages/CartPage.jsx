import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import "../styles/cart.css";
import { useCart } from '../services/CartContext'; // Importa el hook useCart
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import CarritoVacio from '../components/CarritoVacio'
import { useAuth } from '../services/AuthContext';
import { addToCart, removeFromCart, clearCart, updateQuantity } from '../redux/cartActions';
import { useDispatch, useSelector } from 'react-redux';


function CartPage() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    //const { removeFromCart, getCantidadItems, getTotal, cartItems, clearCart, setCartItems } = useCart();
    const [envio, setEnvio] = useState('Gratis');
    const token = useSelector(state => state.client.token);
    let isLoggedIn;
    if (token){
        isLoggedIn = true;
    }else{
        isLoggedIn = false;
    }

    //const { isLoggedIn } = useAuth();
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

    const handleProductClick = (id) => {
        navigate(`/product/${id}`)
    }

    const aumentarCantidad = (id, cant, stockDisponible)=>{
        console.log(cant);
        if (cant <= 6 && cant <= stockDisponible-1){
            dispatch(updateQuantity(id,cant+1));
        }
        
        console.log('aumentar',cartItems);
    }

    const disminuirCantidad = (id,cant)=>{
        console.log(cant - 1);
        if(cant >= 2){
            dispatch(updateQuantity(id,cant-1));
        }
        
        console.log('disminuir',cartItems);
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
    const [cuponAplicado, setCuponAplicado] = useState(0);

    //console.log('cupon: ',cartItems.cupon);

    const handleCuponChange = (event) => {
        setCupon(event.target.value);
    };
    //FETCH CUPON
    const fetchCupon = async () => {
        try {
          const response = await fetch(`http://localhost:8080/cupon/check?cupon=${cupon}`);
          if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor');
          }
          const data = await response.json();
          setCuponAplicado(data); // Almacenar la respuesta en el estado
          console.log(data)
        } catch (error) {
          console.error('Error al obtener los datos:', error);
          // Manejo de errores, por ejemplo mostrar un mensaje al usuario
        }
    };

    const handleCuponClick = () => {
        fetchCupon();
    };

    //CHECKOUT

    const handleCheckOutClick = () => {
        //clearCart();
        if (isLoggedIn) {
            setCupon('hola che');
            navigate(`/medioDePago?cupon=${cupon}`);
            //cambiar el "!" de este if, porque se necesita q el usuario este logeado para q cree la compra
            //navigate('/checkOut/success');
        }
        else {
            window.alert('Para finalizar la compra debe iniciar sesion');
        }
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
                            {cartItems.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="info">
                                        <IconButton className='delete' aria-label="delete" onClick={() => eliminarProducto(item.id)}  >
                                            <ClearIcon />
                                        </IconButton>
                                        <img src={`data:image/jpeg;base64,${item.files[0].content}`} alt="imagen" />
                                        <p onClick={() => handleProductClick(item.id)}>{item.nombre}</p>
                                    </div>
                                    <div className="cart-manage-container">
                                        <div className="cart-manage">
                                            <div className="cart-cantidad">
                                                <RemoveIcon fontSize='small' className='cart-controllers' onClick={() => disminuirCantidad(item.id, item.cantidad)} />
                                                <div className="cart-number">
                                                    <span>{item.cantidad}</span>
                                                </div>
                                                <AddIcon fontSize='small' className='cart-controllers' onClick={() => aumentarCantidad(item.id, item.cantidad, item.stockDisponible)} />
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
                                <span className='cart-price'>$ {getTotal()-getTotal()*(cuponAplicado/100) + envio}</span>
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


export default CartPage

