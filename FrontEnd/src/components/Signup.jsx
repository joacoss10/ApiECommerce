import React, { useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import "../styles/signup.css";
import { Password } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../redux/clientActions';

function Signup() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  // Función para manejar el cambio de opción seleccionada
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login')
  }






  const [formData, setFormData] = useState({
    username: null,
    mail: null,
    password: null,
    nombre: null,
    apellido: null

  });

  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [registrationResponse, setRegistrationResponse] = useState(null);

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

      const data = await response.json(); // Obtener el cuerpo de la respuesta en formato de texto
      
      //navigate(`/signup/result/${data.access_token}`);


      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        //dispatch(setUsername(formData.username));
        dispatch(setToken(data.access_token));
        navigate(`/signup/result/ok`);
        
      } else {
        navigate(`/signup/result/${data.access_token}`);
      }
    } catch (error) {
      // Manejar errores de red o del servidor aquí
      console.error('Error:', error.message);
    }
  };





  return (
    <div className="signup-wrapper">
      {!registrationComplete ? (
        <form>
          <Return></Return>
          <h1>Sign up</h1>
          <div className="signup-input-box">
            <PeopleAltOutlinedIcon fontSize='medium' />
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
            <EmailOutlinedIcon />
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
            <BadgeOutlinedIcon />
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
            <BadgeOutlinedIcon />
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
            <LockOutlinedIcon />
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
            <p id='signup-p'>Ya tenes una cuenta? <a onClick={handleClickLogin}>Ingresa</a></p>
          </div>
        </form>
      ) : (
        <div className="registration-response">
          <h2>Respuesta del Registro:</h2>
          <p>Username: {registrationResponse.username}</p>
          <p>Mail: {registrationResponse.mail}</p>
          {/* Mostrar más detalles de la respuesta si es necesario */}
        </div>
      )}
    </div>
  );
}

export default Signup;
