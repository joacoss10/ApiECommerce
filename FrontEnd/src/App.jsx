import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/App.css'
import Menu from './views/Menu';
import Home from './views/Home';
import Producto from './views/Producto';
import Vender from './views/Vender';
import Buscar from './views/Buscar';
import Carrito from './views/Carrito';


function App() {
  return (
    <>
      <div id="NombreDeLaPagina" >
        <h1>
          CamisetasBianchi
        </h1>
      </div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Producto' element={<Producto />} />
        <Route path='/Vender' element={<Vender />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Buscar' element={<Buscar />} />
      </Routes>
    </>
  );
};

export default App
