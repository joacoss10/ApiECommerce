import React, { createContext, useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(()=>{
    const storedValue = localStorage.getItem('isLoggedIn');
    // Convertir la cadena almacenada en un booleano
    return storedValue ? !!JSON.parse(storedValue) : false;
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || ''; // Obtener el nombre de usuario del almacenamiento local, o cadena vacía si no está presente
  });

  const login = async (username, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, pass: password }),
      });

      console.log(response)
      

      if (response.ok) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username); // Guardar el nombre de usuario en el almacenamiento local
        setUsername(username); // Guardar el nombre de usuario en el estado del contexto
        console.log('LOGIN EXITOSO');
        navigate('/');
      } else {
        console.log('LOGIN MAL');
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setUsername(''); // Limpiar el nombre de usuario del estado del contexto al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
