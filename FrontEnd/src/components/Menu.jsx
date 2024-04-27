import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Menu.css'
import {Button as MuiButton} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAuth } from '../services/AuthContext';

const Menu = () => {
    const navigate = useNavigate();
    
    const handleClickHome = () =>{
        navigate("/")
    }


    const { isLoggedIn} = useAuth();

    const handleNewPostClick = () => {
        if (isLoggedIn) {
            // Si está logueado, redirige a /vender
            window.location.href = '/vender';
        } else {
            // Si no está logueado, redirige a /login
            window.location.href = '/login';
        }
    };
    console.log("log:",isLoggedIn);
    return (
        <div className="Menu">
            < ul className="navigation" >
                <li>
                    <Link id='inicio' className='a' to="/">Inicio</Link>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Indumentaria <ArrowDropDownIcon/></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/Producto">Boca</Link></li>
                        <li className='desplegable'><Link to="/Producto">River</Link></li>
                        <li className='desplegable'><Link to="/Producto">Lanus</Link></li>
                        <li className='desplegable'><Link to="/Producto">Independiente</Link></li>
                        <li className='desplegable'><Link to="/Producto">Racing</Link></li>
                        <li className='desplegable'><Link to="/Producto">San Lorenzo</Link></li>
                        <li className='desplegable'><Link to="/Producto">Equipos Argentinos</Link></li>
                        <li className='desplegable'><Link to="/Producto">Equipos Sudamericanos</Link></li>
                        <li className='desplegable'><Link to="/Producto">Equipos Europeos</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Selecciones <ArrowDropDownIcon/></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/Producto">Argentina</Link></li>
                        <li className='desplegable'><Link to="/Producto">Brasil</Link></li>
                        <li className='desplegable'><Link to="/Producto">Uruguay</Link></li>
                        <li className='desplegable'><Link to="/Producto">Europa</Link></li>
                        <li className='desplegable'><Link to="/Producto">Otros</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Vender <ArrowDropDownIcon/></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'>
                            {isLoggedIn ? (
                                <Link to="/vender">Nueva publicacion</Link>
                            ):(
                                <Link to="/vender">Nueva publicacion</Link>                   /*CAMBIAR A     /login */
                            )
                            
                        }</li>
                        <li className='desplegable'><Link to="/PublicacionesVendedor">Mis publicaciones</Link></li>
                    </ul>
                </li>
                <li>
                    <Link id='buscar' className='a' to="/Buscar">Buscar</Link>
                </li>
                
            </ul>
        </div>
    );
};
export default Menu;

