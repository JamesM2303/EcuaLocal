import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar las tareas
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setListaTareas([...listaTareas, tarea]);
      setTarea('');
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevasTareas);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      
      {/* Input para la nueva tarea */}
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Agregar tarea"
      />
      
      {/* Botón para agregar tarea */}
      <button onClick={agregarTarea}>Agregar</button>

      {/* Mostrar la lista de tareas */}
      <ul>
        {listaTareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Nueva linea</p>
    </div>
  );
}

export default App;
