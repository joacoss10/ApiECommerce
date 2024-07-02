import React, {useRef, useState} from "react";
import ComboBox from "./ComboBox";
import '../styles/Vender.css'
import { useAuth } from "../services/AuthContext";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";



const Vender = () => {

    //const {username} = useAuth();
    const token = useSelector(state => state.client.token);
    const username = jwtDecode(token).sub;


    const [categoria, setCategoria] = useState('');

    const handleChangeCategoria = (selectedOption) => {
        setCategoria(selectedOption.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const titulo = document.getElementById('Titulo').value;
        const descripcion = document.getElementById('Descripcion').value.trim();
        const stock = document.getElementById('Stock').value;
        const precio = document.getElementById('Precio').value;
        const file = document.getElementById('File').files[0]; // Acceder al archivo seleccionado
        //const categoria = document.getElementById('ComboBox').value;
    
        const formData = new FormData();
        formData.append('nombre', titulo);
        formData.append('descripcion', descripcion);
        formData.append('categoria', categoria);
        formData.append('precio', precio);
        formData.append('stockDisponible', stock);
        formData.append('username_vendedor', username); // Supongo que 'username' está definido en tu contexto
        formData.append('files', file);


        try {
            const response = await fetch('http://localhost:8080/product/create', {
                method: 'POST',
                headers: {
                    
                    'Authorization': `Bearer ${token}` // Asegúrate de que 'token' esté definido en tu contexto
                },
                body: formData
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.text(); // Convertir la respuesta a texto

            console.log(data); // Aquí deberías recibir el string de respuesta del backend

            window.alert("Producto creado exitosamente");
    
        } catch (error) {
            console.error('Hubo un error al enviar la solicitud:', error);
            // Manejo de errores: mostrar mensaje al usuario, registrar en algún servicio de errores, etc.
        }
    };

    /*const handleSubmit = (event) => {
        event.preventDefault();

        /*const titulo = document.getElementById('Titulo').value;
        const descripcion = document.getElementById('Descripcion').value.trim();
        const stock = document.getElementById('Stock').value;
        const precio = document.getElementById('Precio').value;
        const file = document.getElementById('File').value;
        const categoria = document.getElementById('ComboBox').value;

        const titulo = event.target.elements['Titulo'].value;
        const descripcion = event.target.elements['Descripcion'].value.trim();
        const stock = event.target.elements['Stock'].value;
        const precio = event.target.elements['Precio'].value;
        const file = event.target.elements['File'].files[0];
        const categoria = event.target.elements['ComboBox'].value;



        if (titulo && descripcion && stock && precio && file) {

            const bodyData = {
                nombre: titulo,
                descripcion: descripcion,
                categoria: categoria, // Ahora categoria es obtenida del estado
                precio: precio,
                stockDisponible: stock,
                username_vendedor: username, // Asegúrate de tener username definido
                files: file
            };

            const fetchBusqueda = async () => {
                try {
                  const response = await fetch(`http://localhost:8080/product/create`,{
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' ,
                    'Authorization': `Bearer ${token}` 
                    },
                    body: bodyData
                });
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  console.log(data);
                  setListaProductos(data);
                } catch (error) {
                  console.log("Hubo un error");
                }
              };
              fetchBusqueda();

            window.alert("Publicacion creada exitosamente")
            //ACA IRIA LA LOGICA DE CREAR LA PUBLICACION EN LA BD






        }
    };*/

    return (
        <main className="Contenedor-vender">
            <form className="Formulario" onSubmit={handleSubmit}>
                <label for='Titulo' id='TituloLabel'><b>Título</b></label>
                <input type="text" id='Titulo' placeholder="Escriba el título" maxLength={20} pattern="\S.*" required></input>

                <label for='Descripcion' id='DescripcionLabel'><b>Descripción</b></label>
                <div className="description">
                    <textarea type="text" id='Descripcion' placeholder="Describa su producto" pattern="\S.*" required></textarea>
                </div>

                <section id='LabelStockPrecio'>
                    <label for='Stock' id='StockLabel'><b>Stock</b></label>
                    <label for='Precio' id='PrecioLabel'><b>Precio</b></label>

                </section>
                <section id='InputStockPrecio'>
                    <input type="number" id='Stock' min='1' placeholder="Stock" required></input>
                    <input type="number" id="Precio" min="0" placeholder="Precio" required></input>
                </section>


                <label for='ComboBox' id='ComboBoxLabel'><b>Seleccione la categoria</b></label>
                <div className="comboBox-container">
                    <ComboBox id='ComboBox'
                        styles={{ control: (provided) => ({ ...provided, width: '100%', marginTop: '1em', marginLeft: '0em' }) }}
                        placeholder="Seleccione la categoría del producto..."
                        onChange={handleChangeCategoria}
                        value={categoria}
                    />
                </div>

                <label id='FileLabel'><b>Suba la imagen de su producto</b></label>
                <input type="file" id="File" accept=".jpg, .jpeg, .png" required></input>

                <section id='Botones'>
                    <input type="submit" id='Enviar' value="Enviar" ></input>
                    <input type='reset' id='Restablecer' value='Restablecer'></input>
                </section>

            </form>
        </main >
    );

};
export default Vender