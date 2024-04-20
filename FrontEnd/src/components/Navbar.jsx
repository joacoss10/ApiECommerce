import React, {useState} from 'react'
import {Button as MuiButton} from "@mui/material";
import logo from "../assets/90fulbo.png";
import "../styles/navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import Menu from '../components/Menu';
import "../styles/Menu.css";




const Navbar = () => {                                           // logo centro /login - carrito izquierda              abajo          inicio/categoria1/categoria2/categoria3

    const { isLoggedIn, username, logout } = useAuth();
    const navigate = useNavigate();
    console.log({username});
    const handleClickAccount = ()=>{     //navega a /login
        if (isLoggedIn != true) {
            navigate("/login");
          } else {
            handleClickLogout(); // Call handleClickTest when logged in
            console.log('User is logged in and handleClickTest has been executed.');
        }
    }

    const handleClickLogout = () =>{
        window.alert('Ya estas logeado');  //FALTA DESARROLLAR
        //logout();
    }

    const handleClickHome = () =>{
        navigate("/")
    }
    const handleClickSeller = () =>{
        navigate("/sell")
    }
    const handleCartClick = () => {
        navigate("/cart"); // Alternar la visibilidad del carrito al hacer clic en el ícono del carrito
    };

    return(
        <>
            <div className='div-navbar'>
                
                {/* Parte superior */}
                <div className="navbar-top">
                    <div className="comps">
                        <div className='left'>
                            
                        </div>
                        <div className="navbar-top-logo">
                            <img src={logo} alt="Logo" onClick={handleClickHome}></img>
                        </div>
                        <div className="navbar-top-right">
                            {isLoggedIn ? (
                                <MuiButton className='top-right-buttons' style={{ color: 'white', textTransform: 'none' }} onClick={handleClickAccount}>
                                    <PersonOutlineOutlinedIcon /> <span id='username'>{username}</span>
                                </MuiButton>
                            ) : (
                                <MuiButton className='top-right-buttons' style={{ color: 'white', textTransform: 'none' }} onClick={handleClickAccount}>
                                    <PersonOutlineOutlinedIcon />
                                </MuiButton>
                            )}
                            <MuiButton className='top-right-buttons' style={{ color: 'white', textTransform : 'none' }} onClick={handleCartClick}><ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon></MuiButton>
                            
                        </div>
                    </div>
                    
                </div>
                
                
                <div className="navbar-bottom">
                    <Menu/>
                    
                </div>
                {/* Parte inferior 
                <div className="navbar-bottom">
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}} onClick={handleClickHome}>Inicio</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}}>Remeras</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}}>Buzos</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}}>Shorts</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}}>Pantalones</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}}>Accesorios</MuiButton>
                    <MuiButton style={{ color: 'white', textTransform: 'none', fontFamily: 'Poppins, sans Serif'}} onClick={handleClickSeller}>Vender</MuiButton>
                    
                    
                </div>
                */}

                
            </div>

            
            
        </>
    )
}
export default Navbar

/*
al final
<div className="section">
                <h2>Inicio</h2>
            </div>

*/