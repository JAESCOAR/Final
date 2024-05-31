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
