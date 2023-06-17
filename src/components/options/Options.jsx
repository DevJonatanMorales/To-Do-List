import React, { useContext } from 'react'
import "./Options.css"
import { DataContext } from '../../context/ContextLocalStorage'
import { iconGuardar, iconModificar, Clear } from '../../pages/AppFun'

export const Options = () => {
    const { data, setData, tareas, position, AddTareas, removeTask, setAccion, accion, UpdateTask } = useContext(DataContext)

    const Guardar = () => {
        const btnGuardar = document.getElementById("btnNuevo");
        const btnModificar = document.getElementById("btnModificar");
        const form = document.getElementById("form")

        switch (btnGuardar.dataset.tag) {
            case 'nuevo':
                setAccion('nuevo')
                Clear()
                btnGuardar.dataset.tag = "guardar"
                iconGuardar(btnGuardar.children[0]);
                form.disabled = false

                btnModificar.dataset.tag = "cancelar"
                iconModificar(btnModificar.children[0]);

                break;

            case 'guardar':
                if (accion === "nuevo") {
                    AddTareas()
                } else if (accion === "modificar") {
                    UpdateTask()
                }
                btnGuardar.dataset.tag = "nuevo"
                iconGuardar(btnGuardar.children[0]);
                setAccion(null)

                btnModificar.dataset.tag = "modificar"
                iconModificar(btnModificar.children[0]);
                form.disabled = true

                break;
            default:
                break;
        }
    }

    const Modificar = () => {
        const tarea = document.getElementById("txtName")
        const descripcion = document.getElementById("txtDescripcion")
        const estado = document.getElementById("txtEstado")

        const btnGuardar = document.getElementById("btnNuevo");
        const btnModificar = document.getElementById("btnModificar");

        switch (btnModificar.dataset.tag) {
            case 'modificar':
                setAccion('modificar')
                form.disabled = false
                btnModificar.dataset.tag = "cancelar"
                iconModificar(btnModificar.children[0]);

                btnGuardar.dataset.tag = "guardar"
                iconGuardar(btnGuardar.children[0]);
                setData({
                    ...data,
                    tarea: tarea.value,
                    descripcion: descripcion.value,
                    estado: estado.value
                })
                break;
            case 'cancelar':
                btnModificar.dataset.tag = "modificar"
                iconModificar(btnModificar.children[0]);

                btnGuardar.dataset.tag = "nuevo"
                iconGuardar(btnGuardar.children[0]);
                form.disabled = true


                setAccion(null)
                setData({
                    tarea: "",
                    descripcion: "",
                    estado: "",
                })
                break;

            default:
                break;
        }
    }

    const EliminarTarea = () => {
        const nom_tarea = document.getElementById("txtName").value
        removeTask(nom_tarea)
    }

    return (
        <fieldset className='options' >
            <legend className='options__title'>Opciones</legend>
            <div className="options__btns">
                <button
                    className='btn'
                    type="button"
                    data-tag="nuevo"
                    id='btnNuevo'
                    onClick={() => { Guardar() }}
                >
                    <i className="fa-sharp fa-solid fa-file-circle-plus"></i>
                </button>
                <button
                    className='btn'
                    type="button"
                    data-tag="modificar"
                    id='btnModificar'
                    onClick={() => Modificar()}
                >
                    <i className="fa-solid fa-file-pen"></i>
                </button>
                <button
                    className='btn'
                    type="button"
                    data-tag="eliminar"
                    id='btnEliminar'
                    onClick={() => EliminarTarea()}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <button
                    className='btn'
                    type="button"
                    data-tag="buscar"
                    id='btnBuscar'
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </fieldset>
    )
}
