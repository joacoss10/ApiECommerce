import React from 'react'
import '../styles/accordion.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from 'react';


function Accordion() {
    const data = [
        {
            title: 'Medios de pago',
            description: 'Podes abonar el producto utilizando tarjetas de credito/debito de cualquier banco, billeteras virtuales con pago con QR o con cualquiera de las criptomonedas que quieras.'
        },
        {
            title: 'Entregas',
            description: 'Hacemos envíos a domicilio en toda la República Argentina. La entrega se realizará en la dirección que nos indiques al momento de realizar tu compra, los dias habiles, entre las 8 y las 00 hs.'    
        }
    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
        <div className="accordion">
            {data.map((item, i) => (
                <div key={i} className="item-accordion">
                    <div className="title-accordion" onClick={() => toggle(i)}>
                        <h4>{item.title}</h4>
                        <div>{selected === i ? (<RemoveIcon/>) : (<AddIcon/>)}</div>
                    </div>
                    <div className={selected === i ? 'content show' : 'content-accordion'}>
                        <p id='accordion-p'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Accordion