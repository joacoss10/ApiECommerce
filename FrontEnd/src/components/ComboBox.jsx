import React from 'react';
import Select from 'react-select';

const ComboBox = ({ defaultValue, placeholder, onChange, styles }) => {
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
    ];

    const handleChange = (selectedOption) => {
        if (onChange) {
            onChange(selectedOption);
        }
    };

    return (
        <Select
            value={defaultValue}
            options={opciones}
            onChange={handleChange}
            placeholder={placeholder}
            styles={styles}
        />
    );
};

export default ComboBox;
