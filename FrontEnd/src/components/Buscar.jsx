import React from 'react'
import '../styles/Buscar.css'
import productos from '../utils/productos.json'
import { useState, useEffect } from 'react'
import Card from "./Card.jsx";



function Buscar() {
    const [buscar, setBuscar] = useState('');
    const [listaProductos, setListaProductos] = useState([]);

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    };

    useEffect( () => {
        if(buscar){ 
            const nuevosProductos = productos.filter(p => {
                return p.nombre.toLowerCase().includes(buscar.toLowerCase());
            });
            setListaProductos(nuevosProductos);
        }
        else{
            setListaProductos([]);
        }
    }, [buscar]
    )
  
  return (
    
    <div className='Contenedor'> 
      <input id='input' type="text" value={buscar} onChange={handleBuscar}/>

      <div className='buscar-productos'>
        <div className='buscar-cards'> 
        {listaProductos.length > 0 ? (
                        listaProductos.map(p => (
                            <Card key={p.id} producto={p}/>
                        ))
                    ) : (
                        <h2>No hay productos para ver</h2>
                    )}
        </div>
      </div>
    </div>
  )
}

export default Buscar
