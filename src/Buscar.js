import React, { useState } from 'react'
import { listaRestaurantes } from './data-restaurantes'
import './css/buscar.css'

const Buscar = () => {

    const [valoresFormulario, setValoresFormulario] = useState({});
    const [mostar, setmostar] = useState([]);
    const { ingreso = '' } = valoresFormulario;
    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setmostar(listaRestaurantes.filter(rest => rest.titulo.toLowerCase().includes(ingreso.toLowerCase())))
    }

    return <>
        <div className="container-barra">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3"><br></br>
                    <label className="indicacion">Buscador de restaurantes: </label>
                    <input type="text" name="ingreso" value={ingreso}
                        className="busca-control" onChange={(e) => { handleOnChange(e) }} /> </div>
                <button type="submit" className="button">Buscar</button>
            </form>
            <div className="container-fluid mt-5">
                <div className="row row-cols-1 row-cols-md-4 g-6 mb-5">

                    {
                        mostar.map(mostar => {
                            return (
                                <div className="galeria" key={mostar.id}>
                                    <div className="foto">
                                        <img className='galeria-img' src={mostar.imagen} alt="img" />
                                    </div>
                                    <div className="pie">
                                        <p className='titulo'>{mostar.titulo}</p>
                                        <p className='descripcion'>{mostar.descripcion}</p>
                                        <p className='ubicacion'>{mostar.ubicacion}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
}
export {
    Buscar
}