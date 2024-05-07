import React from 'react';
import Select from 'react-select';

const ComboBox = ({ defaultValue, placeholder, onChange, styles }) => {
    const opciones = [
        { value: 'Boca', label: 'Boca' },
        { value: 'River', label: 'River' },
        { value: 'Lanus', label: 'Lanús' },
        { value: 'Independiente', label: 'Independiente' },
        { value: 'Racing', label: 'Racing' },
        { value: 'SanLorenzo', label: 'San lorenzo' },
        { value: 'EquipoArgentino', label: 'Equipo argentino' },
        { value: 'EquipoSudamericano', label: 'Equipo sudamericano' },
        { value: 'EquipoEuropeo', label: 'Equipo europeo' },
        { value: 'OtrosEquipos', label: 'Otros Equipos' },
        { value: 'SeleccionArgentina', label: 'Selección Argentina' },
        { value: 'SeleccionBrasil', label: 'Selección Brasil' },
        { value: 'SeleccionUruguay', label: 'Selección Uruguay' },
        { value: 'Selecciones', label: 'Selecciones' }
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
