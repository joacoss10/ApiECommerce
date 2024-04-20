import React, { useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "../styles/login.css";
import {useNavigate} from 'react-router-dom';
import Return from '../components/Return';
import { useAuth } from '../services/AuthContext';






function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  
  
  const { login, isLoggedIn } = useAuth();

  console.log("al iniciar login",isLoggedIn);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(isLoggedIn);
    try {
      await login(username, password); // Espera a que la solicitud de inicio de sesión se complete
      console.log("Username:", username);
      console.log("Password:", password);
      console.log(isLoggedIn);
      if (isLoggedIn == true) {
        // Si isLoggedIn es true después de iniciar sesión, redirigir al usuario al menú
        console.log('es true');
        //navigate('/');
      } else {
        // Si isLoggedIn es false después de iniciar sesión, establecer el estado de error en true
        console.log('es false');
        setError(true);
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud de inicio de sesión
      console.error('Error al iniciar sesión:', error.message);
      // Establecer el estado de error en true
      setError(true);
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
          <PeopleAltOutlinedIcon fontSize='medium'/>
          <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} required/>
        </div>
        <div className="input-box">
          <LockOutlinedIcon/>
          <input type="password" placeholder='Contraseña' value={password} onChange={handlePasswordChange} required/>
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
          <p>No tenes una cuenta? <a onClick={handleClickSignup}>Registrate</a></p>
        </div>
      </form>
    </div>
  );
}



export default Login;
