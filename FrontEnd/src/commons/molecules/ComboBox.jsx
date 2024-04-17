import React from 'react';
import Select from 'react-select'

const ComboBox = ({ options, placeholder, onChange }) => {
    const handleChange = (selectedOption) => {
        if (onChange) {
            onChange(selectedOption);
        }
    };

    return (
        <Select
            options={options}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default ComboBox;