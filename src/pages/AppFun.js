const icons = {
    // clase del icon guardar
    guardarSolid: "fa-solid",
    guardarFloppy: "fa-floppy-disk",
    // clase del icon nuevo
    nuevoSharp: "fa-sharp",
    nuevoSolid: "fa-solid",
    nuevoCircle: "fa-file-circle-plus",
    // clase del icon modificar
    modificarSolid: "fa-solid",
    modificarFile: "fa-file-pen",
    // clase del icon cancelar
    cancelarSolid: "fa-solid",
    cancelarBan: "fa-ban"
}

export const Clear = () => {
    const tarea = document.getElementById("txtName")
    const descripcion = document.getElementById("txtDescripcion")
    const estado = document.getElementById("txtEstado")

    tarea.value = ""
    descripcion.value = ""
    estado.value = "0"
}

export const iconGuardar = (btn) => {
    btn.classList.toggle(icons.nuevoSharp)
    btn.classList.toggle(icons.nuevoSolid)
    btn.classList.toggle(icons.nuevoCircle)
    btn.classList.toggle(icons.guardarSolid)
    btn.classList.toggle(icons.guardarFloppy)
}

export const iconModificar = (btn) => {
    btn.classList.toggle(icons.modificarSolid)
    btn.classList.toggle(icons.modificarFile)
    btn.classList.toggle(icons.cancelarSolid)
    btn.classList.toggle(icons.cancelarBan)
}