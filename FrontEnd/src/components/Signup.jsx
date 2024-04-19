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

import "../Styles/signup.css";

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
    <div className="wrapper">
      <form>
        <Return></Return>
        <h1>Sign up</h1>
        <div className="input-box">
          <PeopleAltOutlinedIcon fontSize='medium'/>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className="input-box">
          <EmailOutlinedIcon/>
          <input type="text" placeholder='Mail' required/>
        </div>
        <div className="input-box">
          <BadgeOutlinedIcon/>
          <input type="text" placeholder='Nombre' required/>
        </div>
        <div className="input-box">
          <BadgeOutlinedIcon/>
          <input type="text" placeholder='Apellido' required/>
        </div>
        <div className="input-box">
          <LockOutlinedIcon/>
          <input type="password" placeholder='Contraseña' required/>
        </div>



        <div className="login-error">
          
        </div>
        <div className="remember-forgot">
          
        </div>
        <button type='submit' className='btn'>Registrarse</button>
        <div className="register-link">
          <p>Ya tenes una cuenta? <a onClick={handleClickLogin}>Ingresa</a></p>
        </div>
      </form>

      
    </div>
  );
}

export default Signup;
