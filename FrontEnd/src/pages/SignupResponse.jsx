import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../styles/signupresult.css'

function SignupResponse() {
    const { response } = useParams();
    const [displayText, setDisplayText] = useState('');
    const [showSuccess, setShowSuccess] = useState();

    useEffect(() => {
        if (response === 'ok') {
            setDisplayText('');
            setShowSuccess(true);
        } else if (response === 'userError') {
            setDisplayText('El nombre de usuario ingresado se encuentra en uso');
        } else if (response === 'mailError') {
            setDisplayText('El mail ingresado se encuentra en uso');
        } else if (response === 'Error') {
            setDisplayText('Ocurrió un error al registrar la cuenta');
        }
    }, [response]);

    return (
        <div className='login-container'>
            <div className="signup-result-wrapper">
                {showSuccess ? (
                    <>
                        <h2 className='signup-result-title-ok'>Cuenta creada exitosamente</h2>
                        <span className='signup-result-span'>Inicia sesión haciendo click <Link to={'/'} className='signup-result-link'>aquí</Link></span>
                    </>
                ) : (
                    <>
                        <h2 className='signup-result-title'>Error</h2>
                        <p className='signup-result-error'>{displayText}</p>
                        <span className='signup-result-span'>Para volver al a pagina de registro click <Link to={'/signup'} className='signup-result-link'>aquí</Link></span>
                    </>
                )}
            </div>
        </div>
    );
}

export default SignupResponse