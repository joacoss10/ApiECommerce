import React, {useState} from 'react'
import {Button as MuiButton} from "@mui/material";
import "../styles/nav.css";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import Menu from '../components/Menu';
import "../styles/Menu.css";
import Logoo from '../assets/camisetas-bianchi.png'

function Nav() {
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
  return (
    <>
            <div className='div-nav'>
                <div className="nav-title">
                    <h2>Camisetas Bianchi</h2>
                </div>
                
                {/* Parte superior */}
                <div className="nav-top">
                    <div className="comps">
                        <div className='left'>
                            
                        </div>
                        <div className="nav-top-logo">
                            <img src={Logoo} alt="Logo" onClick={handleClickHome}></img>
                        </div>
                        <div className="nav-top-right">
                            {isLoggedIn ? (
                                <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleClickAccount}>
                                    <PersonOutlineOutlinedIcon /> <span id='username'>{username}</span>
                                </MuiButton>
                            ) : (
                                <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleClickAccount}>
                                    <PersonOutlineOutlinedIcon />
                                </MuiButton>
                            )}
                            <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform : 'none' }} onClick={handleCartClick}><ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon></MuiButton>
                            
                        </div>
                    </div>
                    
                </div>
                
                
                <div className="nav-bottom">
                    <Menu/>
                    
                </div>
                

                
            </div>

            
            
        </>
  )
}

export default Nav