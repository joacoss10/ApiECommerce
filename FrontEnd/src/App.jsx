import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './views/Menu';
import Home from './views/Home';
import Producto from './views/Producto';
import Vender from './views/Vender';
import Buscar from './views/Buscar';
import Carrito from './views/Carrito';
import CabeceraFija from './views/CabeceraFija';
import EstadoDeLoggeo from './views/EstadoDeLoggeo';
import Loggeo from './views/Loggeo'
import PublicacionesVendedor from './views/PublicacionesVendedor'


function App() {
  return (
    <>
      <CabeceraFija />
      <EstadoDeLoggeo />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Producto' element={<Producto />} />
        <Route path='/Vender' element={<Vender />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Buscar' element={<Buscar />} />
        <Route path='/Loggeo' element={<Loggeo />} />
        <Route path='PublicacionesVendedor' element={<PublicacionesVendedor />} />
      </Routes>
    </>
  );
};

export default App
