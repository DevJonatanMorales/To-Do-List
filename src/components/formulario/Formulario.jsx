import React, { useContext } from 'react'
import "./formulario.css"
import { DataContext } from '../../context/ContextLocalStorage'

export const Formulario = () => {
  const { tareas, data, setData, position, accion } = useContext(DataContext)

  return (
    <fieldset id='form' disabled className='formulario'>
      <legend className='formulario__title'>Tarea</legend>
      <div className="form__group">
        <label className='lb' htmlFor="txtName">Nombre:</label>
        <input
          className='txt'
          type="text"
          id="txtName"
          name='tarea'
          value={
            accion != null ? data.tarea :
              tareas != null ? tareas[position].tarea : data.tarea
          }
          onChange={(e) => {
            setData({
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className="form__group">
        <label className='lb' htmlFor="txtEstado">Estado:</label>
        <select
          id='txtEstado'
          name='estado'
          onChange={(e) => {
            setData({
              ...data,
              [e.target.name]: e.target.value
            })
          }}
        >
          <option value="0">-- seleccione --</option>
          <option selected={tareas != null ? tareas[position].estado === 'Espera' ? true : '' : ''} value="Espera">Espera</option>
          <option selected={tareas != null ? tareas[position].estado === 'Desarrollo' ? true : '' : ''} value="Desarrollo">Desarrollo</option>
          <option selected={tareas != null ? tareas[position].estado === 'Terminado' ? true : '' : ''} value="Terminado">Terminado</option >
        </select>
      </div>
      <div className="form__group">
        <label className='lb' htmlFor="txtDescripcion">Descripcion:</label>
        <textarea
          className='textarea'
          id="txtDescripcion"
          cols="30"
          rows="10"
          name='descripcion'
          value={
            accion != null ? data.descripcion :
              tareas != null ? tareas[position].descripcion : data.descripcion
          }
          onChange={(e) => {
            setData({
              ...data,
              [e.target.name]: e.target.value
            })
          }}
        ></textarea>
      </div>
    </fieldset>
  )
}

