import React, { useState } from 'react'
import { Button as MuiButton } from "@mui/material";
import { Menu as MuiMenu, MenuItem } from '@mui/material';
import "../styles/nav.css";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import Menu from '../components/Menu';
import "../styles/Menu.css";
import Logoo from '../assets/camisetas-bianchi.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Nav() {
    const { isLoggedIn, username, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    let aux;

    if (window.location.pathname==='/' || 
            window.location.pathname==='/categoria/boca' || 
            window.location.pathname==='/categoria/river' || 
            window.location.pathname==='/categoria/lanus' || 
            window.location.pathname==='/categoria/independiente' || 
            window.location.pathname==='/categoria/racing' || 
            window.location.pathname==='/categoria/san lorenzo' || 
            window.location.pathname==='/categoria/equipos argentinos' || 
            window.location.pathname==='/categoria/equipos europeos' || 
            window.location.pathname==='/categoria/equipos sudamericanos' || 
            window.location.pathname==='/categoria/equipos europeos' || 
            window.location.pathname==='/categoria/otros equipos' || 
            window.location.pathname==='/categoria/argentina' ||
            window.location.pathname==='/categoria/brasil' || 
            window.location.pathname==='/categoria/uruguay' || 
            window.location.pathname==='/categoria/europa' || 
            window.location.pathname==='/categoria/otros' )
        {
        aux=true;
    }else{
        aux=false;
    }
    

    console.log('username: ',{ username });

    const handleClickAccount = (event) => {     //navega a /login
        if (isLoggedIn != true) {
            navigate("/login");
        } else {
            setAnchorEl(event.currentTarget); // Call handleClickTest when logged in
            if (aux==true){
                document.querySelector('.div-nav').classList.add("menu-open");
                document.querySelector('.nav-top-logo').classList.add("menu-open");
            }
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
        if (aux==true){
            document.querySelector('.div-nav').classList.remove("menu-open");
            document.querySelector('.nav-top-logo').classList.remove("menu-open");
        }
    };

    const handleClickLogout = () => {
        if (aux==true){
            document.querySelector('.div-nav').classList.remove("menu-open");
            document.querySelector('.nav-top-logo').classList.remove("menu-open");
        }
        logout();
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
                                    <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleClickAccount}>
                                        <PersonOutlineOutlinedIcon /> <span id='username'>{username}</span>
                                    </MuiButton>
                                    <MuiMenu className='MuiMenu'
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                width: '200px', // Ancho fijo del menú
                                                height: '98px', // Altura máxima del menú si es necesario
                                                padding: '4px',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}><ShoppingBagOutlinedIcon fontSize='small' style={{marginRight:'7px'}}/>Ver pedidos</MenuItem>
                                        <MenuItem onClick={handleClickLogout}><LogoutOutlinedIcon fontSize='small'style={{marginRight:'7px'}}/> Cerrar sesión</MenuItem>
                                    </MuiMenu>
                                </div>
                                
                            ) : (
                                <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleClickAccount}>
                                    <PersonOutlineOutlinedIcon />
                                </MuiButton>
                            )}
                            <MuiButton className='top-right-buttons' style={{ color: 'black', textTransform: 'none' }} onClick={handleCartClick}><ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon></MuiButton>

                        </div>
                    </div>

                </div>


                <div className="nav-bottom">
                    <Menu />

                </div>



            </div>



        </>
    )
}

export default Nav