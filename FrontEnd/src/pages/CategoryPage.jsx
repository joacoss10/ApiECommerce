import React from 'react'
import Nav from '../components/Nav'
import '../styles/categorypage.css'
import productos from '../utils/productos.json'
import Card from '../components/Card'

function CategoryPage({categoria}) {
    let productosFiltrados;

  if (categoria === 'Equipos Argentinos' || categoria ==='Equipos Sudamericanos') {
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
  return (
    <div className="categoryPage">
        <Nav/>
        <div className="category-products-cards">
            <h2 className='category-title'>{categoria}</h2>
            <div className='product-box'>
                <div className="cards">

                {productosFiltrados.map(producto => (
                    <Card key={producto.id} producto={producto} />
                ))}
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default CategoryPage