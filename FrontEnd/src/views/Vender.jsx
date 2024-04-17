import React from "react";
import ComboBox from "../commons/molecules/ComboBox";
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
            <ComboBox
                options={opciones}
                placeholder="Selecciona una opción..."
            />
        </div>
    );

};
export default Vender