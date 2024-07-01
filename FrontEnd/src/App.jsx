import { useState, useEffect } from 'react'
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
import SignupResponse from './pages/SignupResponse'
import ProdsPage from './pages/ProdsPage'
import MediosDePago from './components/MediosDePago'
import TarjetaPage from './pages/TarjetaPage'
import MediosDePagoPage from './pages/MedioDePagoPage'
import MpPage from './pages/MpPage'
import { Provider } from 'react-redux';
import store from './redux/store';







function App() {
  const categorias = ['Boca', 'River', 'Lanus', 'Independiente', 'Racing', 'San Lorenzo', 'Equipos Sudamericanos', 'Equipos Europeos', 'Equipos Argentinos', 'Argentina', 'Brasil', 'Uruguay', 'Europa', 'Otros', 'Otros Equipos'];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProdctos] = useState([]);
  const pageSize = 8;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:8080/product/get/all");
        const data = await response.json();
        setProdctos(data);
        console.log(products);
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };
    fetchProductos();
  }, []);


  return (
    
    <Provider store={store}>
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

          {products.map(producto => (
            <Route
              key={producto.id}
              path={`/product/${producto.id}`}
              element={<ProductPage producto={producto} />}
            />
          ))}

          {categorias.map(categoria => (
            <Route
              key={categoria}
              path={`/categoria/${categoria}/:paginaActual`}
              element={<CategoryPage categoria={categoria} />}
            />
          ))}

          <Route path='/checkout/success' element={<Checkout />} />
          <Route path='/PublicacionesVendedor' element={<PublicacionesVendedor />} />
          <Route path='/signup/result/:response' element={<SignupResponse />} />
          <Route path='/medioDePago' element={<MediosDePagoPage />} />
          <Route path='/productos/page/:paginaActual' element={<ProdsPage />} />
          <Route path='/medioDePago/tarjeta' element={<TarjetaPage />} />
          <Route path='/medioDePago/mercadoPago' element={<MpPage />} />

        </Routes>
      </CartProvider>
    </AuthProvider>
    </Provider>
  );
}
export default App



/*


function App() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Tamaño de página

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`http://tu-api.com/productos?page=${currentPage}&pageSize=${pageSize}`);
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, [currentPage]); // Ejecuta la consulta cada vez que currentPage cambie

  return (
    <Provider store={store}>
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

            <Route path='/checkout/success' element={<Checkout />} />
            <Route path='/PublicacionesVendedor' element={<PublicacionesVendedor />} />
            <Route path='/signup/result/:response' element={<SignupResponse />} />
            <Route path='/medioDePago' element={<MediosDePagoPage />} />
            <Route path='/productos/page/:paginaActual' element={<ProdsPage />} />
            <Route path='/medioDePago/tarjeta' element={<TarjetaPage />} />
            <Route path='/medioDePago/mercadoPago' element={<MpPage />} />
            
            {categorias.map(categoria => (
              <Route
                key={categoria}
                path={`/categoria/${categoria}/:paginaActual`}
                element={<CategoryPage categoria={categoria} />}
              />
            ))}
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
*/


