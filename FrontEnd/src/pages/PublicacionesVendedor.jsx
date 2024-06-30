import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
import '../styles/publicacionesvendedor.css';
import productos from '../utils/productos.json';
import { useAuth } from "../services/AuthContext";

const PublicacionesVendedor = (userName) => {

    const { username } = useAuth();
    const [productosVendedor, setProductosVendedor] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getByUsername?username=${username}`); //http://localhost:8080/getByUsername?username=siempreBoca12
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductosVendedor(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPublicaciones();
  }, [username]);

    //const productosVendedor = productos.filter(producto => producto.username_vendedor === username)

    return (
        <div className="div-publicaciones">
            <Nav />
            <div className="publicaciones-container">
                {productosVendedor.map(producto => (
                    /*productosVendedor.map(producto => (*/                                    //USR ESTA LINEA PARA LA ENTREGA, MUESTRA SOLO LOS DELUSUARIO LOGEADO
                    <ProductCard key={producto.id} product={producto} />
                ))}
            </div>
        </div>
    );
};

export default PublicacionesVendedor;

//CON EL USERNAME SE VA ABUSCAR A LA BD LOS PRODCUTOS DEL USERNAME QUE PASAN COMO PARAMETRO Y ESO SE RECORRE CON EL MAP