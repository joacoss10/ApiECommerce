import React from 'react'
import './App.css'
import Menu from "./commons/molecules/Menu"
import arg from "./assets/arg.jpg"

function App() {
  return (
    <>
      <div id="Nombre" >
        <h1>
          CamisetasBianchi
        </h1>
      </div>
      <main class="Menu">
        <Menu></Menu>
      </main >
      <aside class='Imagenes'>
        <img class="imagenMessi" src={arg}></img >
      </aside>

    </>
  )
}

export default App
