import React from 'react';
import Select from 'react-select'

const ComboBox = ({ options, placeholder, onChange, styles }) => {
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
            styles={styles}
        />
    );
};

export default ComboBox;