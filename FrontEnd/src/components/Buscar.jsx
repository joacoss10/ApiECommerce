import React, { useState, useEffect } from 'react';
import '../styles/Buscar.css';
import productos from '../utils/productos.json';
import Card from './Card.jsx';
import { Button } from '@mui/material';

function Buscar() {
  const [botonPalabra, setBotonPalabra] = useState('');
  const [palabra, setPalabra] = useState('');
  const [listaProductos, setListaProductos] = useState([]);

  const handlePalabra = (e) => {
    setPalabra(e.target.value);
  };

  const handleBoton = () => {
    setBotonPalabra(palabra);
  };

  /*useEffect(() => {

    if (botonPalabra) {
      const nuevosProductos = productos.filter(p => 
        p.nombre.toLowerCase().includes(botonPalabra.toLowerCase())
      );
      setListaProductos(nuevosProductos);
    } else {
      setListaProductos([]);
    }
  }, [botonPalabra]);*/

  useEffect(() =>{

    const fetchBusqueda = async () => {
      try {
        console.log("HOLA A TODOS");
        const response = await fetch(`http://localhost:8080/product/search?param=${botonPalabra}`,{
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setListaProductos(data);
      } catch (error) {
        console.log("Hubo un error");
      }
    };
    fetchBusqueda();
  },[botonPalabra]);

  return (
    <div className='Contenedor'>
      <div className='barra-busqueda'>
        <input id='input' type='text' value={palabra} onChange={handlePalabra} />
        <Button id='boton' onClick={handleBoton}>Buscar</Button>
      </div>
      <div className='buscar-productos'>
        <div className='buscar-cards'>
          {listaProductos.length > 0 ? (
            listaProductos.map(p => (
              <Card key={p.id} producto={p} />
            ))
          ) : (
            <h2>No hay productos para ver</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Buscar;
