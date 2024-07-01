import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import '../styles/categorypage.css'
import Card from '../components/Card'
import { useParams, useNavigate } from 'react-router-dom'

function CategoryPage({ categoria }) {
  const navigate = useNavigate();
  const {paginaActual} = useParams();
  
  const [products,setProducts] = useState([]);
    
  const fetchProducts = async () => {
      
    try {
      const response = await fetch(`http://localhost:8080/product/get?categoria=${categoria}&page=${paginaActual}&min=&max=`);
      if (response.ok){
        const data = await response.json();
        setProducts(data);
        console.log('data',data);
        console.log('uri',`http://localhost:8080/product/get?categoria=${categoria}&page=${paginaActual}&min=&max=` )
      }else{
        setProducts([]);
      }
          
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);


  const [currentPage, setCurrentPage] = useState(parseInt(paginaActual));
  const productsPerPage = 8;
  

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    
    setCurrentPage(parseInt(pageNumber));
    navigate(`/categoria/${categoria}/${pageNumber}`);
  };

  

  const renderProducts = () => {
    return products.map(producto => (
      <Card key={producto.id} producto={producto} />
    ));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [paginaActual]);


  return (
    <div className="categoryPage">
      <Nav />
      <div className="category-products-cards">
        <h2 className='category-title'>{categoria}</h2>
        <div className='product-box'>
          <div className="cards">

            {renderProducts()}
          </div>

        </div>
        <div className="pagination">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
            <button key={number} onClick={() => handlePageChange(number + 1)} disabled={parseInt(currentPage) === number + 1}>
              {number + 1}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default CategoryPage





/*
if (categoria === 'Equipos Argentinos' || categoria === 'Equipos Sudamericanos') {
    productosFiltrados = productos.filter(producto =>
      producto.categoria === categoria ||
      producto.categoria === 'Boca' ||
      producto.categoria === 'River' ||
      producto.categoria === 'Lanus' ||
      producto.categoria === 'Independiente' ||
      producto.categoria === 'Racing' ||
      producto.categoria === 'San Lorenzo'
    );
  } else {
    productosFiltrados = productos.filter(producto => producto.categoria === categoria);

  }
*/