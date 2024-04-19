import React, { useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "../Styles/login.css";
import {useNavigate} from 'react-router-dom';
import Return from '../components/Return';






function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Aquí debes realizar la lógica de autenticación y manejar el estado de error en consecuencia
    const authenticated = true; // Supongamos que la autenticación es exitosa
    
    if (!authenticated) {
      setError(true); // Establece el estado de error en verdadero si la autenticación falla
    } else {
      setError(false); // Establece el estado de error en falso si la autenticación es exitosa
      // Aquí puedes redirigir al usuario a la página deseada después de una autenticación exitosa
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
