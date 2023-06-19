import React, { useContext } from "react";
import { DataContext } from "../../context/ContextLocalStorage";;
import "./pagination.css"

export const Pagination = () => {
  const { tareas, setPosition, position } = useContext(DataContext)

  const first = () => setPosition(0);
  const increment = () => {
    if (position === tareas.length - 1) {
      setPosition(position)
    } else {
      setPosition(position + 1)
    }
  };
  const decrement = () => {
    if (position === 0) {
      setPosition(position)
    } else {
      setPosition(tareas != null ? position - 1 : position)
    }
  }

  const last = () => setPosition(tareas.length - 1);

  return (
    <fieldset
      className="paginacion"
      id="paginacion"
    >
      <legend className="paginacion__title">Navegación</legend>
      <div className="paginacion__btns">
        <button
          className="paginacion__btn"
          type="button"
          onClick={() => { first() }}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button
          className="paginacion__btn"
          type="button"
          onClick={() => { decrement() }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <p className="paginacion__info"> {tareas != null ? position + 1 : '0'} / {tareas != null ? tareas.length : '0'} </p>

        <button
          className="paginacion__btn"
          type="button"
          onClick={() => { increment() }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button
          className="paginacion__btn"
          type="button"
          onClick={() => { last() }}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </fieldset>
  );
};
