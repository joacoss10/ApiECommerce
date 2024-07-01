import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../components/Card';
import productos from '../utils/productos.json'; 
import Nav from '../components/Nav';
import FilterListIcon from '@mui/icons-material/FilterList';
import '../styles/prodspage.css'


function ProdsPage() {
    const {paginaActual} = useParams();
    const navigate = useNavigate();
    const [filterTriggered, setFilterTriggered] = useState(false);

    const [products,setProducts] = useState([]);
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/product/get?categoria=&page=${paginaActual}&min=${minPrice}&max=${maxPrice}`);
        if (response.ok){
          const data = await response.json();
          setProducts(data);
          console.log('data',data);
          console.log('uri',`http://localhost:8080/product/get?categoria=&page=${paginaActual}&min=${minPrice}&max=${maxPrice}` )
        }else{
          setProducts([]);
        }
        
        //console.log('pagina',paginaActual)
        //console.log('data',data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProducts();
    }, [paginaActual, filterTriggered]);


    //fetch a productos



    const [minPrice, setMinPrice] = useState(localStorage.getItem('minPrice') || '');
    const [maxPrice, setMaxPrice] = useState(localStorage.getItem('maxPrice') || '');
    
    const [minPriceInput, setMinPriceInput] = useState(localStorage.getItem('minPrice') || '');
    const [maxPriceInput, setMaxPriceInput] = useState(localStorage.getItem('maxPrice') || '');
    const [currentPage, setCurrentPage] = useState(parseInt(paginaActual));
    const productsPerPage = 8;                                                                              //CAMBIA PRODUCTOS POR PAGINA

  const applyFilters = () => {
    setCurrentPage(1);
    console.log('min',minPrice);
    console.log('max',maxPrice);
    setMinPrice(minPriceInput);
    setMaxPrice(maxPriceInput);

    
    
    setFilterTriggered(!filterTriggered);
  };

  const handleMinPriceChange = (e) => {
    setMinPriceInput(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceInput(e.target.value);
  };

  const clearFilters = () => {
    setCurrentPage(1);
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
  

  const renderProducts = () => {
    return products.map(producto => (
      <Card key={producto.id} producto={producto} />
    ));
  };
  useEffect(() => {
    renderProducts();
  }, [products]);


  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    localStorage.setItem('cPage',pageNumber);
    setCurrentPage(parseInt(pageNumber));
    navigate(`/productos/page/${pageNumber}`);
  };
  useEffect(() => {
    setCurrentPage(parseInt(paginaActual) || 1);
  }, [paginaActual]);



  return (
    
    <div>
        <Nav></Nav>
        <div className="prods-content">
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
                {renderProducts()}
            </div>
        </div>
        {/* Pagination */}
        <div className="pagination">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
            <button key={number} onClick={() => handlePageChange(number + 1)} disabled={currentPage === number + 1}>
              {number + 1}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default ProdsPage

