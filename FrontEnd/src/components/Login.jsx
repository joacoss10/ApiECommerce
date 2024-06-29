import React, { useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import { useAuth } from '../services/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setToken } from '../redux/clientActions';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();


  const { login, isLoggedIn } = useAuth();




  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, pass: password }),
      });
  
  
  
  
      if (response.ok) {
        const data = await response.json();

        dispatch(setUsername(username));
        dispatch(setToken(data.access_token));
  
        navigate('/');
      } else {
  
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
    
  };

  const navigate = useNavigate();
  const handleClickSignup = () => {
    navigate('/signup')
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <Return></Return>
        <h1>Login</h1>
        <div className="input-box">
          <PeopleAltOutlinedIcon fontSize='medium' />
          <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} required />
        </div>
        <div className="input-box">
          <LockOutlinedIcon />
          <input type="password" placeholder='Contraseña' value={password} onChange={handlePasswordChange} required />
        </div>


        <div className="login-error">
          {error && ( // Renderiza el mensaje de error solo si el estado de error es verdadero
            <span>Error de autenticacion</span>
          )}
        </div>


        <div className="remember-forgot">
          <a href="#">Olvide mi contraseña</a>
        </div>

        <button type='submit' className='btn'>Login</button>

        <div className="register-link">
          <p id='login-p'>No tenes una cuenta? <a onClick={handleClickSignup}>Registrate</a></p>
        </div>
      </form>
    </div>
  );
}



export default Login;
