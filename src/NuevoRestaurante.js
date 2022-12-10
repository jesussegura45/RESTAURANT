import React, { useState } from 'react';
import './css/Nuevo.css'


 const NuevoRestaurante = () => {
  const [ valorForm, setValorForm ] = useState({});
  const { titulo = '', descripcion = '', direccion = '', imagen = '' } = valorForm;
  const handleOnChange = (e) => {
    setValorForm({ ...valorForm, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    console.log(valorForm);
  }
  return (
    
    <div className="container-formulario">
       <div className="col-lg-6">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3"><br></br>
          <label className="form-label">Nombre</label>
          <input required type="text" name="titulo" value={titulo} 
              className="controles" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input required type="text" name="descripcion" value={descripcion} 
              className="controles" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input required type="text" className="controles" name='direccion' 
              value={ direccion } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input required type="dirrecion" className="controles" name='Imagen_URL' 
              value={ imagen } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="Button">Agregar</button>
      </form>
    </div>
    </div>
  )
}
export {
  NuevoRestaurante,
  }


