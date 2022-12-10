import React, { useState } from 'react'
import { listaRestaurantes } from './data-restaurantes'
import './css/inicio.css'


const Inicio = () => {

    const [restaurantes, setRestaurantes] = useState(listaRestaurantes);
    return (
        <div className='contenedor'>
            <div className='contenerdor-galeria-img'>
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="galeria" key={restaurante.id}>
                                <div className="foto">
                                    <img className='galeria-img' src={restaurante.imagen} alt="imagen " />
                                </div>
                                <div className="pie">
                                    <p className='titulo'>{restaurante.titulo}</p>
                                    <p className='descripcion'>{restaurante.descripcion}</p>
                                    <p className='ubicacion'>{restaurante.ubicacion}</p>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
            
        </div>
    )
}

export {
    Inicio
}