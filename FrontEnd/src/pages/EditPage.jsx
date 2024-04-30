import React from 'react'
import '../styles/sellerpage.css';
import EditarVender from '../components/EditarVender';
import Nav from '../components/Nav';





function EditPage() {
    return (
        <div className='sell-container'>
            <Nav />
            <EditarVender></EditarVender>

        </div>
    )
}

export default EditPage