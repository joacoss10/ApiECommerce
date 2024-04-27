import React, { useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {useNavigate} from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Return from '../components/Return';

import "../styles/signup.css";

function Signup() {
  const [selectedOption, setSelectedOption] = useState("");

  // Función para manejar el cambio de opción seleccionada
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const handleClickLogin = () =>{
    navigate('/login')
  } 

  return (
    <div className="signup-wrapper">
      <form>
        <Return></Return>
        <h1>Sign up</h1>
        <div className="signup-input-box">
          <PeopleAltOutlinedIcon fontSize='medium'/>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className="signup-input-box">
          <EmailOutlinedIcon/>
          <input type="text" placeholder='Mail' required/>
        </div>
        <div className="signup-input-box">
          <BadgeOutlinedIcon/>
          <input type="text" placeholder='Nombre' required/>
        </div>
        <div className="signup-input-box">
          <BadgeOutlinedIcon/>
          <input type="text" placeholder='Apellido' required/>
        </div>
        <div className="signup-input-box">
          <LockOutlinedIcon/>
          <input type="password" placeholder='Contraseña' required/>
        </div>



        <div className="signup-login-error">
          
        </div>
        <div className="signup-remember-forgot">
          
        </div>
        <button type='submit' className='signup-btn'>Registrarse</button>
        <div className="signup-register-link">
          <p>Ya tenes una cuenta? <a onClick={handleClickLogin}>Ingresa</a></p>
        </div>
      </form>

      
    </div>
  );
}

export default Signup;