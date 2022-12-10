import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navegacion.css'

export const Navegacion = () => {
    return (
        <header>

            <div className='img-principal '>
                <img className='logo-img-app' src="Logo.PNG" alt='logo' />
            </div>

            <div className='nav-principal'>
                <nav>
                    <ul>
                        <li className='t-dec-none' >
                            <Link to="/Inicio">Inicio</Link>
                        </li>
                        <li className='t-dec-none'  >
                            <Link to="/Buscar">Buscar</Link>
                        </li>
                        <li className='t-dec-none'>
                            <Link to="/NuevoRestaurante">Nuevo Restaurante</Link>
                        </li>
                    </ul>
                </nav>




            </div>
        </header>
    )
};
