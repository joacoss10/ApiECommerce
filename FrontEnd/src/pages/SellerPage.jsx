import React from 'react'
import Nav from '../components/Nav';
import Vender from '../components/Vender';
import '../styles/sellerpage.css';

function SellerPage() {

  return (
    <div className='sell-container'>
      <Nav />
      <Vender></Vender>
    </div>
  )
}

export default SellerPage