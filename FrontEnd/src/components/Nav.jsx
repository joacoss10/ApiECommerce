import React, { useState } from 'react'
import { Button as MuiButton } from "@mui/material";
import { Menu as MuiMenu, MenuItem } from '@mui/material';
import "../styles/nav.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import Menu from '../components/Menu';
import "../styles/Menu.css";
import Logoo from '../assets/camisetas-bianchi.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode"
import { setToken } from '../redux/clientActions';


function Nav() {
    const dispatch = useDispatch();
    const [decodedToken, setDecodedToken] = useState(null);
    const token = useSelector(state => state.client.token);
    let isLoggedIn = false;
    if (token!= null) {
        isLoggedIn = true;
    } else {
        
        isLoggedIn = false;
    }

    //const { username, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    let aux;

    if (window.location.pathname === '/' ||
        /^\/categoria\/\w+\/\d+$/.test(window.location.pathname) ||
        /^\/productos\/page\/\d+$/.test(window.location.pathname)||
        window.location.pathname === '/PublicacionesVendedor'
    ) {
        aux = true;
    } else {
        aux = false;
    }


    


    const handleClickAccount = (event) => {     //navega a /login
        
        if (isLoggedIn == true) {
            
            setAnchorEl(event.currentTarget); // Call handleClickTest when logged in
            if (aux == true) {
                document.querySelector('.div-nav').classList.add("menu-open");
                document.querySelector('.nav-top-logo').classList.add("menu-open");
            }
        }
        else {
            
            navigate("/login");
        }

    }

    const handleClose = () => {
        setAnchorEl(null);
        if (aux == true) {
            document.querySelector('.div-nav').classList.remove("menu-open");
            document.querySelector('.nav-top-logo').classList.remove("menu-open");
        }
    };

    const handleClickLogout = () => {
        if (aux == true) {
            document.querySelector('.div-nav').classList.remove("menu-open");
            document.querySelector('.nav-top-logo').classList.remove("menu-open");
        }
        dispatch(setToken(null));
    }

    const handleClickHome = () => {
        navigate("/")
    }
    const handleClickSeller = () => {
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
                                <div className="user-manage">
                                    <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={(event) => handleClickAccount(event)}>
                                        <PersonOutlineOutlinedIcon /> <span id='username'>{jwtDecode(token).sub}</span>
                                    </MuiButton>
                                    <MuiMenu className='MuiMenu'
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                width: '200px', // Ancho fijo del menú
                                                height: '62px', // Altura máxima del menú si es necesario
                                                padding: '4px',
                                            },
                                        }}
                                    >

                                        <MenuItem onClick={handleClickLogout}><LogoutOutlinedIcon fontSize='small' style={{ marginRight: '7px' }} /> Cerrar sesión</MenuItem>
                                    </MuiMenu>
                                </div>

                            ) : (
                                <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={(event) => handleClickAccount(event)}>
                                    <PersonOutlineOutlinedIcon /> <span id='login'></span>
                                </MuiButton>
                            )}
                            <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleCartClick}><ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon></MuiButton>

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