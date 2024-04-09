import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ variant, color, texto }) => {
    const onClick = () => {
        window.open("https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Boca_Juniors", "_blank");
    };

    return (
        <Button variant={variant} color={color} onClick={onClick}>
            {texto}
        </Button >
    );
};

export default CustomButton;    