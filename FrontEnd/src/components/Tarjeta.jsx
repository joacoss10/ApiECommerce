// Tarjeta.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Tarjeta.css"
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { clearCart } from "../redux/cartActions";
import { useLocation } from 'react-router-dom';

const Tarjeta = () => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [nombreTitular, setNombreTitular] = useState('');
    const [fechaExpiracion, setFechaExpiracion] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();


    const location = useLocation();
    const cupon = new URLSearchParams(location.search).get('cupon');
    console.log("cuponfinal ", cupon);


    const cartItems = useSelector(state => state.cart.cartItems);
    const token = useSelector(state => state.client.token);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const anioActual = new Date().getFullYear();
        const mesActual = new Date().getMonth() + 1;
        const [anioSeleccionado, mesSeleccionado] = fechaExpiracion.split('-').map(Number);
        if (numeroTarjeta.length != 16) {
            window.alert('El número de tarjeta debe tener exactamente 16 dígitos.')
        } else if (anioSeleccionado < anioActual || (anioSeleccionado == anioActual && mesSeleccionado < mesActual)) {
            window.alert('La fecha de vencimiento no es valida')
        } else if (cvv.length != 3) {
            window.alert('El codigo de seguridad no es valido')
        } else if (!nombreTitular.trim()) {
            window.alert('Ingrese un nombre')
        } else {
            //window.alert('tarjeta registrada exitosamente')
            //logica de pago 
            
            const username = jwtDecode(token).sub;
            const today = new Date();
            const options = {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                timeZone: 'America/Buenos_Aires'  // Ajusta la zona horaria según tu necesidad
            };
            const fechaPago = today.toLocaleString('es-AR', options);
            const productList = cartItems.map(item => ({
                id: item.id,
                cant: item.cantidad
            }));
            let total = cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
            if (total <= 100000){
                total = total + 5000;
            }
            
            const raw = JSON.stringify({
                "username_comprador": username,
                "productList": productList,
                "pago": {
                  "medioDePago": "Tarjeta de debito",
                  "monto": total,
                  "currency": "ARS",
                  "fechaPago": fechaPago,
                  "estado": "Pagado",
                  "detalles": "Pago final"
                }
              });
            //ACA HACER EL FETCH PARA CREAR ORDER
            fetch('http://localhost:8080/order/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: raw
              })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
            });
            dispatch(clearCart());
            navigate('/checkout/success');
        }
    };
    const soloLetrasRegex = /^[a-zA-Z\s]*$/;

    // Función para manejar cambios en el input del nombre del titular
    const handleNombreTitularChange = (e) => {
        const valorIngresado = e.target.value;
        // Verifica si el valor ingresado cumple con la expresión regular
        if (soloLetrasRegex.test(valorIngresado) || valorIngresado === '') {
            setNombreTitular(valorIngresado);
        }
    };



    return (
        <div>
            <div className="barra-celeste">
                <h2>Pago con Tarjeta</h2>
            </div>
            <div className="tarjeta-formulario">
                <h2>Datos de la Tarjeta</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
                        <input
                            type="number"
                            id="numeroTarjeta"
                            value={numeroTarjeta}
                            onChange={(e) => setNumeroTarjeta(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="nombreTitular">Nombre del Titular:</label>
                        <input
                            type="text"
                            id="nombreTitular"
                            value={nombreTitular}
                            //onChange={(e) => setNombreTitular(e.target.value)}
                            onChange={handleNombreTitularChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaExpiracion">Fecha de Expiración:</label>
                        <input
                            type="month"
                            id="fechaExpiracion"
                            value={fechaExpiracion}
                            onChange={(e) => setFechaExpiracion(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV:</label>
                        <input
                            type="number"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Pagar</button>
                </form>
            </div>
        </div>
    );
};

export default Tarjeta;
