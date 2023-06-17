import React, { createContext, useEffect, useState } from 'react'

import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2';

const Sweetalert = (msj, icon) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: 'To do list',
    text: msj,
    icon: icon
  })
}

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tareas, setTareas] = useState(null);
  const [accion, setAccion] = useState(null)

  const [data, setData] = useState({
    tarea: "",
    descripcion: "",
    estado: "",
  });

  const CargarTareas = () => {
    let dataLocalStorage = null;

    if (localStorage.getItem("tareas")) {
      dataLocalStorage = Array.from(JSON.parse(localStorage.getItem("tareas")))
    }
    setTareas(dataLocalStorage)
  };

  const Clear = (nom_tarea) => {
    console.log("nom_tarea:", nom_tarea);
    let tareas = Array.from(JSON.parse(localStorage.getItem("tareas")))

    const removerTareas = tareas.filter(element => element.tarea != nom_tarea);

    localStorage.setItem('tareas', JSON.stringify(removerTareas));
    CargarTareas()
  }

  const removeTask = (nom_tarea) => {

    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'To do list',
      icon: "question",
      text: "Seguro de eliminar la tarea: " + nom_tarea + "?, la tarea ya no se podra recuperar",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Clear(nom_tarea)
      } else {
        Sweetalert("La tarea: " + nom_tarea + " no fue eliminada", "info");
      }
    });

  }

  const [position, setPosition] = useState(0);

  const AddTareas = () => {
    if (data.tarea == "" || data.estado == 0 || data.descripcion == '') {
      Sweetalert("Error: por favor complete los campos.", "error")

    } else {
      localStorage.setItem(
        "tareas",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("tareas") || "[]"),
          { tarea: data.tarea, estado: data.estado, descripcion: data.descripcion },
        ])
      );

      if (localStorage.getItem("tareas") != null) {
        Sweetalert("Agregado con exito", "success");
        // reset data
        setData(localStorage)
      } else {
        Sweetalert(mjsAlert, "error");
      }
    }
  }

  useEffect(() => {
    CargarTareas()
  }, [data])

  return (
    <DataContext.Provider value={{ removeTask, tareas, AddTareas, data, setData, position, setPosition, accion, setAccion }} >
      {children}
    </DataContext.Provider>
  )
}
