import React from "react"

const Menu = ({ }) => {
    return (
        < ul class="navigation" >
            <li class="dropdown">
                <a href="#">Indumentaria ⮟</a>
                <ul class="dropdownContent">
                    <li><a href="#">Boca</a></li>
                    <li><a href="#">Riber</a></li>
                    <li><a href="#">Lanus</a></li>
                    <li><a href="#">Independiente</a></li>
                    <li><a href="#">Racing</a></li>
                    <li><a href="#">San Lorenzo</a></li>
                    <li><a href="#">Equipos Argentinos</a></li>
                    <li><a href="#">Equipos Sudamericanos</a></li>
                    <li><a href="#">Equipos Europeos</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Selecciones ⮟</a>
                <ul class="dropdownContent">
                    <li><a href="#">Argentina</a></li>
                    <li><a href="#">Brasil</a></li>
                    <li><a href="#">Uruguay</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Vender</a>
            </li>
            <li>
                <a href="#">Buscar 🔍</a>
            </li>
            <li>
                <a href="#">Carrito 🛒</a>
            </li>
        </ul>
    );
};
export default Menu;