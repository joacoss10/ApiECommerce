import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProductPage from './pages/ProductPage'
import SellerPage from './pages/SellerPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import PublicacionesVendedor from './pages/PublicacionesVendedor'
import EditPage from './pages/EditPage'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import productos from './utils/productos.json';
import { CartProvider } from './services/CartContext';
import { AuthProvider } from './services/AuthContext';
import BuscarPage from './pages/BuscarPage'
import CategoryPage from './pages/CategoryPage'






function App() {
  const categorias = ['Boca','River','Lanus','Independiente','Racing','San Lorenzo','Equipos Sudamericanos','Equipos Europeos','Equipos Argentinos','Argentina','Brasil','Uruguay','Europa','Otros', 'Otros Equipos'];
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/vender' element={<SellerPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/EditarVender' element={<EditPage />} />
          <Route path='/buscar' element={<BuscarPage />} />
          {productos.map(producto => (
            <Route
              key={producto.id}
              path={`/product/${producto.id}`}
              element={<ProductPage producto={producto} />}
            />
          ))}
          {categorias.map(categoria =>(
            <Route
              key={categoria}
              path={`/categoria/${categoria}`}
              element={<CategoryPage categoria={categoria}/>}
            />
          ))}
          
          <Route path='/checkout/success' element={<Checkout />} />
          <Route path='/PublicacionesVendedor' element={<PublicacionesVendedor />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
export default App


