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
import { Password } from '@mui/icons-material';

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






  const [formData, setFormData] = useState({
    username: '',
    mail: '',
    password: '',
    nombre: '',
    apellido: ''
    
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };





  const handleSignUpClick = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Enviar datos del formulario como JSON
      });

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        console.log('ok');
        // Manejar la respuesta aquí si es necesario
      } else {
        // Si la solicitud falla, manejar el error aquí
        throw new Error('Error en la solicitud de registro');
      }
    } catch (error) {
      // Manejar errores de red o del servidor aquí
      console.error('Error:', error.message);
    }
  };





  return (
    <div className="signup-wrapper">
      <form>
        <Return></Return>
        <h1>Sign up</h1>
        <div className="signup-input-box">
          <PeopleAltOutlinedIcon fontSize='medium'/>
          <input 
            type="text"
            name='username' 
            placeholder='username'
            value={formData.username}
            onChange={handleInputChange} 
            required
          />
        </div>
        <div className="signup-input-box">
          <EmailOutlinedIcon/>
          <input
            type="text"
            name="mail"
            placeholder='Mail'
            value={formData.mail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="signup-input-box">
          <BadgeOutlinedIcon/>
          <input
            type="text"
            name="nombre"
            placeholder='Nombre'
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="signup-input-box">
          <BadgeOutlinedIcon/>
          <input
            type="text"
            name="apellido"
            placeholder='Apellido'
            value={formData.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="signup-input-box">
          <LockOutlinedIcon/>
          <input
            type="password"
            name="password"
            placeholder='Contraseña'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="signup-login-error">
          
        </div>
        <div className="signup-remember-forgot">
          
        </div>
        <button type='submit' className='signup-btn' onClick={handleSignUpClick}>Registrarse</button>
        <div className="signup-register-link">
          <p>Ya tenes una cuenta? <a onClick={handleClickLogin}>Ingresa</a></p>
        </div>
      </form>

      
    </div>
  );
}

export default Signup;
