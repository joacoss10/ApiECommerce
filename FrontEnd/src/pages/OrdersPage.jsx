import React from 'react'
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import '../styles/orderspage.css'

function OrdersPage() {
    const [orders, setOrders] = useState(null);
    const token = useSelector(state => state.client.token);
    const username = jwtDecode(token).sub;
    


    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await fetch(`http://localhost:8080/order/get?username=${username}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const adjustedData = data.map(order => ({
                ...order,
                pago: {
                    ...order.pago,
                    fechaPago: adjustDate(order.pago.fechaPago)
                }
            }));

            setOrders(adjustedData);
            console.log('data', data);
            
            
          } catch (error) {
            setError(error);
          } 
        };
    
        fetchOrders();
    }, [token,username]);

    useEffect(() => {
        console.log('orders', orders);
    }, [orders]);


    const adjustDate = (dateStr) => {
        const date = new Date(dateStr);
        date.setHours(date.getHours() - 3);
        return date.toLocaleString();
    };

  return (
    <div className='order-page'>
        <Nav/>
        
        <div className="order-container">
            <div className="order-title">
                <h2>Mis Pedidos</h2>
            </div>
            
            
            <div className="orders">
                    {orders  ? (
                        orders.map(order => (
                            <div key={order.id} className='order'>
                                <div className="order-info">
                                    <div className="order-info-left">
                                        <h3>ID #{order.id}</h3>
                                        <p>{order.pago.fechaPago}</p>
                                    </div>
                                    
                                    <p>${order.pago.monto}</p>
                                </div>
                                
                                <div className="order-elements">
                                    {order.ordenElementsList && order.ordenElementsList.map(element => (
                                        <div key={element.id} className='order-element'>
                                            <p className="order-product-name">{element.productResponse.nombre}</p>
                                            <p className="order-product-quantity">Cantidad: {element.cantidad}</p>
                                            {/*<p>Precio: ${element.productResponse.precio}</p>*/}
                                            {/* Renderiza otras propiedades del elemento según sea necesario */}
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        ))
                    ) : (
                        <div>No se encontraron pedidos</div>
                    )}
                </div>
        </div>
        
        
    </div>
  )
}

export default OrdersPage