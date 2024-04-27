import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Return from '../components/Return';
import Nav from '../components/Nav';
import Vender from '../components/Vender';
import '../styles/sellerpage.css';






function SellerPage() {
  


  return (
    <div className='sell-container'>
        <Nav/>
        <Vender></Vender>
        
    </div>
  )
}

export default SellerPage