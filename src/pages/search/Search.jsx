import React, { useContext } from 'react'
import { DataContext } from '../../context/ContextLocalStorage'
import { useNavigate } from 'react-router-dom'
import './search.css'

export const Search = () => {
    const { tareas, setPosition, position } = useContext(DataContext)
    const navigate = useNavigate()

    const Seleccionar = index => {
        setPosition(index)
        navigate('/')
    }
    const Cancelar = () => {
        navigate('/')
    }

    return (
        <div className="search">

            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>TAREA</th>
                        <th>ESTADO</th>
                        <th>DESCRIPCION</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {tareas != null ? (
                        tareas.map((element, index) => (
                            <tr>
                                <td> {element.tarea} </td>
                                <td> {element.estado} </td>
                                <td> {element.descripcion} </td>
                                <td>
                                    <button
                                        className='btn-selec'
                                        type="button"
                                        onClick={() => {
                                            Seleccionar(index)
                                        }}
                                    >Seleccionar</button>
                                </td>
                            </tr>
                        ))

                    ) : (
                        <tr >
                            <td colSpan={3} >No hay tareas que mostrar</td>
                        </tr>
                    )
                    }

                </tbody>
                <tfoot className='tfoot'>
                    <tr>
                        <td colSpan={4}>
                            <button
                                className='btn-cancelar'
                                type="button"
                                onClick={() => Cancelar()}
                            >Cancelar</button>
                        </td>
                    </tr>
                </tfoot>
            </table >
        </div>
    )
}
