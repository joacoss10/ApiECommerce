import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Menu.css'
import { Button as MuiButton } from "@mui/material";//no se usa
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAuth } from '../services/AuthContext';

const Menu = () => {
    /*const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    }*/


    const { isLoggedIn } = useAuth();

    /*const handleNewPostClick = () => {
        if (isLoggedIn) {
            // Si está logueado, redirige a /vender
            window.location.href = '/vender';
        } else {
            // Si no está logueado, redirige a /login
            window.location.href = '/login';
        }
    };*/

    return (
        <div className="Menu">
            < ul className="navigation" >
                <li>
                    <Link id='inicio' className='a' to="/">Inicio</Link>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Indumentaria <ArrowDropDownIcon /></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/categoria/boca">Boca</Link></li>
                        <li className='desplegable'><Link to="/categoria/River">River</Link></li>
                        <li className='desplegable'><Link to="/categoria/Lanus">Lanus</Link></li>
                        <li className='desplegable'><Link to="/categoria/Independiente">Independiente</Link></li>
                        <li className='desplegable'><Link to="/categoria/Racing">Racing</Link></li>
                        <li className='desplegable'><Link to="/categoria/San Lorenzo">San Lorenzo</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Argentinos">Equipos Argentinos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Sudamericanos">Equipos Sudamericanos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Europeos">Equipos Europeos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Otros Equipos">Otros Equipos</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Selecciones <ArrowDropDownIcon /></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/categoria/Argentina">Argentina</Link></li>
                        <li className='desplegable'><Link to="/categoria/Brasil">Brasil</Link></li>
                        <li className='desplegable'><Link to="/categoria/Uruguay">Uruguay</Link></li>
                        <li className='desplegable'><Link to="/categoria/Europa">Europa</Link></li>
                        <li className='desplegable'><Link to="/categoria/Otros">Otros</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Vender <ArrowDropDownIcon /></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'>
                            {isLoggedIn ? (
                                <Link to="/vender">Nueva publicacion</Link>
                            ) : (
                                <Link to="/vender">Nueva publicacion</Link>                   /*CAMBIAR A     /login */
                            )
                            }</li>
                        <li className='desplegable'>
                            {isLoggedIn ? (
                                <Link to="/PublicacionesVendedor">Mis publicaiones</Link>
                            ) : (
                                <Link to="/PublicacionesVendedor">Mis publicaiones</Link> /*CAMBIAR A     /login */
                            )
                            }</li>
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

