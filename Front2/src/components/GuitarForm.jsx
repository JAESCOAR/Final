import { useState } from "react"

function GuitarForm({ onSubmit }) {
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [precio, setPrecio] = useState('')
    const [estado, setEstado] = useState('')
    const [año, setAño] = useState('')
    const [tipo, setTipo] = useState('')

    const handleMarcaChange = (event) => {
        setMarca(event.target.value)
    }
    const handleModeloChange = (event) => {
        setModelo(event.target.value)
    }
    const handlePrecioChange = (event) => {
        setPrecio(event.target.value)
    }
    const handleEstadoChange = (event) => {
        setEstado(event.target.value)
    }
    const handleAñoChange = (event) => {
        setAño(event.target.value)
    }
    const handleTipoChange = (event) => {
        setTipo(event.target.value)
    }

    //crear la funcion que envia el formulario a la base de datos
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ marca, modelo, precio, estado, año, tipo })
        setMarca('')
        setModelo('')
        setPrecio('')
        setEstado('')
        setAño('')
        setTipo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Marca" value={marca} onChange={handleMarcaChange} required />
            <input type="text" placeholder="Modelo" value={modelo} onChange={handleModeloChange} required />
            <input type="text" placeholder="Precio" value={precio} onChange={handlePrecioChange} required />
            <input type="text" placeholder="Estado" value={estado} onChange={handleEstadoChange} required />
            <input type="text" placeholder="Año" value={año} onChange={handleAñoChange} required />
            <input type="text" placeholder="Tipo" value={tipo} onChange={handleTipoChange} required />
            <button type="submit">Agregar Guitarra</button>
        </form>
    )
}

export default GuitarForm
