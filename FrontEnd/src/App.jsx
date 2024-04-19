import { useState } from 'react'


import HomePage from './pages/HomePage'

import LoginPage from './pages/LoginPage'

import SignupPage from './pages/SignupPage'

import ProductPage from './pages/ProductPage'

import SellerPage from './pages/SellerPage'

import CartPage from './pages/CartPage'



import {Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import productos from './utils/productos.json';

import { CartProvider } from './services/CartContext';





function App() {
  const navigate = useNavigate();
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/sell' element={<SellerPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        {productos.map(producto => (
          <Route
            key={producto.id}
            path={`/product/${producto.id}`}
            element={<ProductPage producto={producto} />}
          />
        ))}
      </Routes>
    </CartProvider>
  );
}

export default App
