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
