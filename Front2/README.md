## PRIMERA ENTREGA DEL FRONT DE LA API 

Este es el primer front que hacemos en clase respecto a la api 
------
# Carpeta src 
Dentro de esta carpeta tenemos el funcionamiento del front usamos:

*App.jsx 
*main.jsx
*La carpeta componentes esta la estructura del front que contiene los: 
-GuitarFrom.jsx
-GuitarRow.jsx
-GuitarTable.jsx

la carpeta GuitarFrom.jsx contiene: 
``` JavaScript
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
```
------
La carpeta CarRow.jsx contiene: 
```JavaScript
function GuitarRow({ guitar, onEdit, onDelete }) {
    return (
        <tr>
            <td>{guitar.marca}</td>
            <td>{guitar.modelo}</td>
            <td>{guitar.precio}</td>
            <td>{guitar.estado}</td>
            <td>{guitar.año}</td>
            <td>{guitar.tipo}</td>
            <td>
                <button onClick={() => onEdit(guitar)}>Editar</button>
                <button onClick={() => onDelete(guitar.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default GuitarRow
```
------
La carpeta CarRow.jsx contiene: 
```JavaScript
import GuitarRow from "./GuitarRow"

function GuitarTable({ guitars, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>MARCA</th>
                    <th>MODELO</th>
                    <th>PRECIO</th>
                    <th>ESTADO</th>
                    <th>AÑO</th>
                    <th>TIPO</th>
                </tr>
            </thead>
            <tbody>
                {guitars.map((guitar) => (
                    <GuitarRow key={guitar.id} guitar={guitar} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default GuitarTable
```

# Esto es lo fundamental del api pero el App.jsx permite que se vea el codigo en JavaScript
Este front es basico, pero ya fue probado y funciona
Puedes almacenar los datos de las guitarras en un archivo o una base de datos. Luego, puedes escribir funciones para importar, manipular y guardar estos datos en tu código. Esto te permitirá gestionar tus inventarios de guitarras de manera eficiente.

