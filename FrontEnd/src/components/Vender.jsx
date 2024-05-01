import React from "react";
import ComboBox from "./ComboBox";
import '../styles/Vender.css'
const Vender = () => {

    return (
        <main className="Contenedor-vender">
            <form className="Formulario">
                <label for='Titulo' id='TituloLabel'><b>Título</b></label>
                <input type="text" id='Titulo' placeholder="Escriba el título" required></input>
                <label for='Descripcion' id='DescripcionLabel'><b>Descripción</b></label>
                <div className="description">
                    <textarea type="text" id='Descripcion' placeholder="Describa su producto" required></textarea>
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
                    />
                </div>
                <label id='FileLabel'><b>Suba la imagen de su producto</b></label>
                <input type="file" id="File" accept=".jpg, .jpeg, .png" required></input>

                <section id='Botones'>
                    <input type="submit" id='Enviar' value="Enviar"></input>
                    <input type='reset' id='Restablecer' value='Restablecer'></input>
                </section>

            </form>
        </main >
    );

};
export default Vender