import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import "../Styles/return.css";


function Return() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navegar a la página "/"
  };
    
  return (
    <ArrowBackIosNewIcon className='press-button' onClick={handleClick} />
  )
}

export default Return