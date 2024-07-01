import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import Card from '../components/Card';
import productos from '../utils/productos.json';
import arg from "../assets/arg.jpg";
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [minPrice, setMinPrice] = useState(localStorage.getItem('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(localStorage.getItem('maxPrice') || '');
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [minPriceInput, setMinPriceInput] = useState(localStorage.getItem('minPrice') || '');
  const [maxPriceInput, setMaxPriceInput] = useState(localStorage.getItem('maxPrice') || '');
  const [prods,setProds] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate();

  const handleClickProdsPage = () => {
    navigate('productos/page/1')
  }

  useEffect(() => {
    // Hace la solicitud fetch a la API cuando el componente se monta
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/product/get?categoria=&page=1'); // Cambia esta URL por la URL de tu API
        const data = await response.json();
        setProds(data);
        console.log('productos', prods);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    
  }, []);

  



  return (
    <div className="home">
      <Nav />

      <div className="img-container-arg">
        <img src={arg} alt="Camisetas Bianchi" />
        <div className="overlay"></div>
        <h2 className='inicio'>Inicio</h2>
      </div>
      <div className='product-box'>
        <div className="cards">
          {prods.length > 0 ? (
            prods.slice(0, 8).map(producto => (
              <Card key={producto.id} producto={producto} />
            ))
          ) : (
            <p>Loading products...</p> // Mensaje de carga mientras se obtienen los productos
          )}
        </div>
      </div>
      <div className="ver-todo">

        <button onClick={handleClickProdsPage}>
          Ver todo
        </button>

      </div>
    </div>
  );
}

export default HomePage;
