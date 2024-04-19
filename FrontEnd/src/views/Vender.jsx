import React from "react";
import ComboBox from "../commons/molecules/ComboBox";
import '../Styles/Vender.css'
const Vender = () => {
    const opciones = [
        { value: 'Boca', label: 'Boca' },
        { value: 'River', label: 'River' },
        { value: 'Lanus', label: 'Lanus' },
        { value: 'Independiente', label: 'Independiente' },
        { value: 'Racing', label: 'Racing' },
        { value: 'SanLorenzo', label: 'San lorenzo' },
        { value: 'EquipoArgentino', label: 'Equipo argentino' },
        { value: 'EquipoSudamericano', label: 'Equipo sudamericano' },
        { value: 'EquipoEuropeo', label: 'Equipo europeo' },
        { value: 'SeleccionArgentina', label: 'Seleccion argentina' },
        { value: 'SeleccionBrasil', label: 'Seleccion brasil' },
        { value: 'SeleccionUruguay', label: 'Seleccion uruguay' },
        { value: 'Selecciones', label: 'selecciones' }
    ]

    return (
        <div>
            <form className="Formulario">
                <section>
                    <label for='Titulo' id='TituloLabel'><b>Título</b></label>
                    <label for='ComboBox' id='ComboBoxLabel'><b>Categoria</b></label>
                </section>
                <section className="InputTituloYComboBox">
                    <input type="text" id='Titulo' placeholder="Escriba el título..."></input>
                    <ComboBox id='ComboBox'
                        options={opciones} styles={{ control: (provided) => ({ ...provided, width: '17.2em', marginTop: '1em' }) }}
                        placeholder="Seleccione la categoría del producto..."
                    />
                </section>
                <section className="LabelImagenDescripcion">
                    <label for='Descripcion' id='DescripcionLabel'><b>Descripción</b></label>
                    <label id='FileLabel'><b>Suba su imagen</b></label>
                </section>
                <section>
                    <textarea type="text" id='Descripcion' placeholder="Describa su producto..."></textarea>
                    <input type="file" id="File" accept=".jpg, .jpeg, .png"></input>
                </section>



                <div className="LabelsStockPrecio">
                    <label for='Stok' id='StockLabel'><b>Stock</b></label>
                    <label for='Precio' id='PrecioLabel'><b>Precio</b></label>
                </div>
                <div className="StockYPrecio">
                    <input type="number" id='Stock' min='1' step='1' placeholder="Stock..."></input>
                    <input type="number" id="Precio" min="0" step="100" placeholder="Precio..." required></input>

                    <input type="submit" id='Enviar' value="Enviar"></input>
                    <input type='reset' velue='Restablecer'></input>
                </div>
            </form>
        </div>
    );

};
export default Vender