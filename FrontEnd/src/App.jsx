import { useState } from 'react'

import { Provider } from 'react-redux'
import store from './redux/store'

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
import { AuthProvider } from './services/AuthContext';
import BuscarPage from './pages/BuscarPage'
import CategoryPage from './pages/CategoryPage'
import SignupResponse from './pages/SignupResponse'

import ProdsPage from './pages/ProdsPage'








function App() {
  const categorias = ['Boca','River','Lanus','Independiente','Racing','San Lorenzo','Equipos Sudamericanos','Equipos Europeos','Equipos Argentinos','Argentina','Brasil','Uruguay','Europa','Otros', 'Otros Equipos'];
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <AuthProvider>
      <Provider store={store}>
      
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
              path={`/categoria/${categoria}/:paginaActual`}
              element={<CategoryPage categoria={categoria}/>}
            />
          ))}
          
          <Route path='/checkout/success' element={<Checkout />} />
          <Route path='/PublicacionesVendedor' element={<PublicacionesVendedor />} />
          <Route path='/signup/result/:response' element={<SignupResponse/>}/>

          <Route path='/productos/page/:paginaActual' element={<ProdsPage />} />

        </Routes>
      
      </Provider>
    </AuthProvider>
  );
}
export default App


