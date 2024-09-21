import React, { useState } from 'react';
import { enviarCurso } from '../vistas/MetodoPost'; // Ajusta la ruta si es necesario
import logoumg from '../logo/logoumg.png';

const CursoForm = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState<number | ''>(''); // Aceptamos un número o vacío
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitamos que la página se recargue al enviar el formulario

    // Creamos el objeto curso
    const curso = {
      nombre,
      creditos: Number(creditos), // Aseguramos que los créditos sean un número
      descripcion,
    };

    try {
      // Enviamos el curso utilizando la función enviarCurso
      const resultado = await enviarCurso(curso);
      setMensaje('Curso enviado exitosamente');
      console.log('Respuesta del servidor:', resultado); // Podemos ver la respuesta del servidor
    } catch (error) {
      setMensaje('Error al enviar el curso');
    }
  };

  return (

<div className="container mt-5">

<div style={{ width: "90%", height: "0%", position: "relative" }}>
  <img 
    src={logoumg} 
    alt="Logo UMG" 
    style={{ 
      width: "180px", 
      height: "160px", 
      position: "absolute", 
      top: 0, 
      right: -310 
    }} 
  />
</div>

      <h2>Formulario de Cursos</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del curso:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa un nombre.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="creditos" className="form-label">Créditos:</label>
          <input
            type="number"
            className="form-control"
            id="creditos"
            value={creditos}
            onChange={(e) => setCreditos(Number(e.target.value))}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa los créditos.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="descripcion"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
          <div className="invalid-feedback">Por favor, ingresa una descripción.</div>
        </div>

        <button type="submit" className="btn btn-primary">Enviar Curso</button>
      </form>

      {mensaje && (
        <div className={`alert mt-3 ${mensaje.includes('exitosamente') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {mensaje}
        </div>
      )}
    </div>    
  );  
};


export default CursoForm;
