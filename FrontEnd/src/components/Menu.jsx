import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Menu.css'
import { Button as MuiButton } from "@mui/material";//no se usa
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAuth } from '../services/AuthContext';

const Menu = () => {


    const { isLoggedIn } = useAuth();


    return (
        <div className="Menu">
            < ul className="navigation" >
                <li>
                    <Link id='inicio' className='a' to="/">Inicio</Link>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Indumentaria <ArrowDropDownIcon /></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/categoria/boca/1">Boca</Link></li>
                        <li className='desplegable'><Link to="/categoria/River/1">River</Link></li>
                        <li className='desplegable'><Link to="/categoria/Lanus/1">Lanus</Link></li>
                        <li className='desplegable'><Link to="/categoria/Independiente/1">Independiente</Link></li>
                        <li className='desplegable'><Link to="/categoria/Racing/1">Racing</Link></li>
                        <li className='desplegable'><Link to="/categoria/San Lorenzo/1">San Lorenzo</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Argentinos/1">Equipos Argentinos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Sudamericanos/1">Equipos Sudamericanos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Equipos Europeos/1">Equipos Europeos</Link></li>
                        <li className='desplegable'><Link to="/categoria/Otros Equipos/1">Otros Equipos</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className='a' href="#">Selecciones <ArrowDropDownIcon /></a>
                    <ul className="dropdownContent">
                        <li className='desplegable'><Link to="/categoria/Argentina/1">Argentina</Link></li>
                        <li className='desplegable'><Link to="/categoria/Brasil/1">Brasil</Link></li>
                        <li className='desplegable'><Link to="/categoria/Uruguay/1">Uruguay</Link></li>
                        <li className='desplegable'><Link to="/categoria/Europa/1">Europa</Link></li>
                        <li className='desplegable'><Link to="/categoria/Otros/1">Otros</Link></li>
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

