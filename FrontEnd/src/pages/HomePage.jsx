import React from 'react'
import "../styles/home.css"

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import productos from '../utils/productos.json';







function HomePage() {
    const producto = {
        nombre: "Gorra Argentina",
        descripcion: "Gorra firmado por camisetas Nani",
        categoria: "Gorros",
        precio: "12000",
        stockDisponible: "1",
        imagenURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3c89e178a714595a121604c4bc58318_9366/Gorra_Seleccion_Argentina_Azul_IN7186_01_standard.jpg",
        vendedor: {
          id: "1",
          username: "siempreboca12",
          mail: "boca@ejemplo.com",
          password: "messi",
          nombre: "Roman",
          apellido: "Riquelme",
          tipo: "vendedor"
        }
      };

      

      
      

  return (
    <div className="home">
        <Navbar></Navbar>
        <h2 className='inicio'>Inicio</h2>
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