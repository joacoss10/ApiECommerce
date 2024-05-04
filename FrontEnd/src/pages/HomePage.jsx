import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import Card from '../components/Card';
import productos from '../utils/productos.json'; // Importamos el JSON de productos
import arg from "../assets/arg.jpg";
import Nav from '../components/Nav';
import FilterListIcon from '@mui/icons-material/FilterList';

function HomePage() {
  const [minPrice, setMinPrice] = useState(localStorage.getItem('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(localStorage.getItem('maxPrice') || '');
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [minPriceInput, setMinPriceInput] = useState(localStorage.getItem('minPrice') || '');
  const [maxPriceInput, setMaxPriceInput] = useState(localStorage.getItem('maxPrice') || '');

  const applyFilters = () => {
    console.log('min',minPrice);
    console.log('max',maxPrice);
    setMinPrice(minPriceInput);
    setMaxPrice(maxPriceInput);
    

    const filtered = productos.filter(producto => {
      if (minPrice && maxPrice) {
        return producto.precio >= minPrice && producto.precio <= maxPrice;
      } else if (minPrice) {
        return producto.precio >= minPrice;
      } else if (maxPrice) {
        return producto.precio <= maxPrice;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  const handleMinPriceChange = (e) => {
    setMinPriceInput(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceInput(e.target.value);
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setMinPriceInput('');
    setMaxPriceInput('');
    localStorage.removeItem('minPrice', null);
    localStorage.removeItem('maxPrice', null);
    
  };

  

  useEffect(() => {
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
    applyFilters(); // Aplicar filtros cada vez que cambian los precios mínimos o máximos
  }, [minPrice, maxPrice]);

  return (
    <div className="home">
      <Nav/>

      <div className="img-container-arg">
        <img src={arg} alt="Camisetas Bianchi" />
        <div className="overlay"></div>
        <h2 className='inicio'>Inicio</h2>
      </div>

      <div className="price-filter">
        {/*<div className="div-filter-title">
          <span className='filter-title'>Filtrar</span>
        </div>
        */}

        <div className="div-filter-input">
          <FilterListIcon/>
          <input
            className='filter-input'
            type="number"
            placeholder='$ Min'
            value={minPriceInput}
            onChange={handleMinPriceChange}
          />
          <span>-</span>
          <input
            className='filter-input'
            type="number"
            placeholder='$ Max'
            value={maxPriceInput}
            onChange={handleMaxPriceChange}
          />
        </div>
        
        <button className='clear-filter-btn' onClick={clearFilters}>Limpiar</button>
        <button className='filter-btn' onClick={applyFilters}>Aplicar</button>
      </div>
      
      <div className='product-box'>
        <div className="cards">
          {filteredProducts.map(producto => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
