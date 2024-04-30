import React, { useState, useEffect } from 'react'
import "../styles/Home.css"
import Card from '../components/Card';
import productos from '../utils/productos.json';
import arg from "../assets/arg.jpg";
import Nav from '../components/Nav';







function HomePage() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const imageHeight = document.getElementById('img-container').offsetHeight;
      const overlayOpacity = (scrollTop / (imageHeight - windowHeight)) * 0.5; // Ajusta el valor 0.5 según sea necesario
      setOpacity(overlayOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <div className="home">
      {/*<Navbar className='navbar-home'/>*/}
      <Nav />

      <div className="img-container-arg">
        <img src={arg} alt="Camisetas Bianchi" />
        <div className="overlay"></div>
        <h2 className='inicio'>Inicio</h2>
      </div>


      {/*   
        <div className="imagen-fondo">
          
          <h1>Inicio</h1>
          <p></p>
        </div>
        */}



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