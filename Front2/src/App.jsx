import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GuitarTable from './components/GuitarTable';
import GuitarForm from './components/GuitarForm';

function App() {
  const [guitars, setGuitars] = useState([]);
  const [editingGuitar, setEditingGuitar] = useState(null);
  
  // Actualiza por cada guitarra nueva
  useEffect(() => {
    fetchGuitars();
  }, []);

  // Crea o actualiza guitarra
  const handleCreateOrUpdateGuitar = async (guitarData) => {
    if (editingGuitar) {
      await axios.put(`http://localhost:8080/api/guitar/${editingGuitar.id}`, guitarData);
    } else {
      await axios.post(`http://localhost:8080/api/guitar`, guitarData);
    }
    fetchGuitars(); // Fetch the updated list of guitars
  };

  // Recorre la lista de guitarras y retorna como respuesta
  const fetchGuitars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/guitar');
      setGuitars(response.data);
    } catch (error) {
      console.log('Error al cargar las guitarras: ', error);
    }
  };

  // Permite editar la guitarra
  const handleEditGuitar = (guitar) => {
    setEditingGuitar(guitar);
  };

  // Eliminar una guitarra a partir de una id 
  const handleDeleteGuitar = async (guitarId) => {
    await axios.delete(`http://localhost:8080/api/guitar/${guitarId}`);
    fetchGuitars(); // Fetch the updated list of guitars
  };

  return (
    <div className='App'>
      <h1>Tienda de Guitarras</h1>
      <br />
      <h2>Lista de Guitarras</h2>
      <GuitarTable guitars={guitars} onEdit={handleEditGuitar} onDelete={handleDeleteGuitar} />
      <h2>{editingGuitar ? 'Editar guitarra' : 'Crear nueva guitarra'}</h2>
      <GuitarForm onSubmit={handleCreateOrUpdateGuitar} initialGuitar={editingGuitar} />
    </div>
  );
}

export default App;
