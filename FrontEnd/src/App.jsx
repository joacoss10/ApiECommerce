import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Menu from './views/Menu';
import Home from './views/Home';
import Producto from './views/Producto';
import Vender from './views/Vender';
import Buscar from './views/Buscar';
import Carrito from './views/Carrito';
import CabeceraFija from './views/CabeceraFija';
import EstadoDeLoggeo from './views/EstadoDeLoggeo';
import Loggeo from './views/Logeo'
import PublicacionesVendedor from './views/PublicacionesVendedor'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userName, setUserName] = useState();
  const handleLogin = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
  };
  return (
    <>
      <CabeceraFija />
      <EstadoDeLoggeo isLoggedIn={isLoggedIn} userName={userName} />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Producto' element={<Producto />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Buscar' element={<Buscar />} />
        <Route path='/Loggeo' element={<Loggeo onLogin={handleLogin} />} />
        {isLoggedIn ? (
          <>
            <Route path='/PublicacionesVendedor' element={<PublicacionesVendedor />} />
            <Route path='/Vender' element={<Vender />} />
          </>
        ) : (
          <>
            <Route path='/Vender' element={<Loggeo onLogin={handleLogin} />} />
            <Route path='/PublicacionesVendedor' element={<Loggeo onLogin={handleLogin} />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App
