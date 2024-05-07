import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import '../styles/categorypage.css'
import productos from '../utils/productos.json'
import Card from '../components/Card'
import { useParams, useNavigate } from 'react-router-dom'

function CategoryPage({ categoria }) {
  const navigate = useNavigate();
  const paginaActual = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let productosFiltrados;
  const [filteredProducts, setFilteredProducts] = useState(null);


  const [currentPage, setCurrentPage] = useState(parseInt(paginaActual.paginaActual));
  const productsPerPage = 8;
  

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    
    setCurrentPage(parseInt(pageNumber));
    navigate(`/categoria/${categoria}/${pageNumber}`);
  };

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

  const renderProducts = () => {

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return productosFiltrados.slice(startIndex, endIndex).map(producto => (
      <Card key={producto.id} producto={producto} />
    ));
  };


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
          {[...Array(Math.ceil(productosFiltrados.length / productsPerPage)).keys()].map(number => (
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