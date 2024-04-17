import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Menu.css'

const Menu = () => {
    return (
        <div className="Menu">
            < ul className="navigation" >
                <li className="dropdown">
                    <a href="#">Indumentaria ⮟</a>
                    <ul className="dropdownContent">
                        <li><Link to="/Producto">Boca</Link></li>
                        <li><Link to="/Producto">River</Link></li>
                        <li><Link to="/Producto">Lanus</Link></li>
                        <li><Link to="/Producto">Independiente</Link></li>
                        <li><Link to="/Producto">Racing</Link></li>
                        <li><Link to="/Producto">San Lorenzo</Link></li>
                        <li><Link to="/Producto">Equipos Argentinos</Link></li>
                        <li><Link to="/Producto">Equipos Sudamericanos</Link></li>
                        <li><Link to="/Producto">Equipos Europeos</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Selecciones ⮟</a>
                    <ul className="dropdownContent">
                        <li><Link to="/Producto">Argentina</Link></li>
                        <li><Link to="/Producto">Brasil</Link></li>
                        <li><Link to="/Producto">Uruguay</Link></li>
                        <li><Link to="/Producto">Resto de selecciones</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Vender ⮟</a>
                    <ul className="dropdownContent">
                        <li><Link to="/Vender">Nueva publicacion</Link></li>
                        <li><Link to="/PublicacionesVendedor">Mis publicaciones</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/Buscar">Buscar 🔍</Link>
                </li>
                <li>
                    <Link to="/Carrito">Carrito 🛒</Link>
                </li>
            </ul>
        </div>
    );
};
export default Menu;