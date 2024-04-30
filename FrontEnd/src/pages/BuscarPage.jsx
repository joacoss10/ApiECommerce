import React from 'react'
import Nav from '../components/Nav';
import '../styles/Vender.css';
import Buscar from '../components/Buscar';

function BuscarPage() {
  return (
    <div className='buscar-container'>
      <Nav />
      <Buscar />
    </div>
  )
}

export default BuscarPage