import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import Card from '../components/Card';
import productos from '../utils/productos.json'; // Importamos el JSON de productos
import arg from "../assets/arg.jpg";
import Nav from '../components/Nav';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [minPrice, setMinPrice] = useState(localStorage.getItem('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(localStorage.getItem('maxPrice') || '');
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [minPriceInput, setMinPriceInput] = useState(localStorage.getItem('minPrice') || '');
  const [maxPriceInput, setMaxPriceInput] = useState(localStorage.getItem('maxPrice') || '');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  

  const navigate = useNavigate();

  const handleClickProdsPage = () =>{
    navigate('productos/page/1')
  }

  return (
    <div className="home">
      <Nav/>

      <div className="img-container-arg">
        <img src={arg} alt="Camisetas Bianchi" />
        <div className="overlay"></div>
        <h2 className='inicio'>Inicio</h2>
      </div>

      
      
      <div className='product-box'>
        <div className="cards">
          {filteredProducts.slice(0,8).map(producto => (
            <Card key={producto.id} producto={producto} />
          ))}
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
