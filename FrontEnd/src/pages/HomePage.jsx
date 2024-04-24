import React from 'react'
import "../styles/Home.css"

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import productos from '../utils/productos.json';







function HomePage() {
      
      

  return (
    <div className="home">
        <Navbar></Navbar>
        <h2 className='inicio'>Camisetas Bianchi</h2>
        <div className='product-box'>
            <div className="cards">
              
              {productos.map(producto => (
                <Card key={producto.id} producto={producto} />
              ))}

            </div>
        </div>
        
    </div>
  )
}

export default HomePage