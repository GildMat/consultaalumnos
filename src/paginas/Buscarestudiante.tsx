import React, { useState } from 'react';
import { fetchStudentData } from '../vistas/ConsultaAPI.tsx';
import logoumg from '../logo/logoumg.png';

const Buscarestudiante = () => {
  const [carnet, setCarnet] = useState('');
  const [studentData, setStudentData] = useState({
    nombre: '',
    email: '',
    seccion: '',
     });

  const esudiante = async () => {
    try {
      const data = await fetchStudentData(carnet);
      if (data.length > 0) {
        const student = data.find((item: any) => item.Carnet === carnet);
        if (student) {
          setStudentData({
            nombre: student.Estudiante,
            email: student.Email,
            seccion: student.Seccion,
          });
        } else {
          alert('Estudiante no encontrado');
          setStudentData({
            nombre: '',
            email: '',
            seccion: '',
          });
        }
      } else {
        alert('No se encontraron datos');
        setStudentData({
          nombre: '',
          email: '',
          seccion: '',
        });
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const handleClear = () => {
    setCarnet('');
    setStudentData({
      nombre: '',
      email: '',
      seccion: '',
    });
  };

  const handleCancel = () => {
    setCarnet('');
    setStudentData({
      nombre: '',
      email: '',
      seccion: '',
    });
  };

return (

<div>
<div style={{ width: "50%", height: "60%", position: "relative" }}>
  <img 
    src={logoumg} 
    alt="Logo UMG" 
    style={{ 
      width: "160px", 
      height: "auto", 
      position: "absolute", 
      top: 0, 
      right: -350 
    }} 
  />
</div>
        
  <center>
  <h1>Consulta de alumnos</h1>
  <div style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif" }}>
  <label style={{  marginBottom: "5px", fontWeight: "bold", color: "#333" }}>
    Carnet:
  </label>
  <input 
    type="text" 
    value={carnet} 
    onChange={(e) => setCarnet(e.target.value)} 
    placeholder="Ingrese el carnet" 
    style={{ padding: "8px", width: "100%",  maxWidth: "305px",  borderRadius: "4px", 
      border: "1px solid #ccc", 
      fontSize: "16px", 
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" 
    }} 
  />
   </div>

<div style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif" }}>
      <label style={{ marginBottom: "5px", fontWeight: "bold", color: "#333" }}>
      Nombres:
      </label>           
          <input
            type="text"
            value={studentData.nombre}
            readOnly
            style={{ padding: "8px", width: "100%",  maxWidth: "290px",  borderRadius: "4px", 
              border: "1px solid #ccc", 
              fontSize: "16px", 
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" 
            }} 
          />        
      </div>


      <div style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif" }}>
       <label style={{ marginBottom: "5px", fontWeight: "bold", color: "#333" }}>
          Correo Electrónico:
          </label>
          <input
            type="text"
            value={studentData.email}
            readOnly
            style={{ padding: "8px", width: "100%",  maxWidth: "220px",  borderRadius: "4px", 
              border: "1px solid #ccc", 
              fontSize: "16px", 
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" 
            }} 
          />      
      </div>

      <div style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif" }}>
      <label style={{ marginBottom: "5px", fontWeight: "bold", color: "#333" }}>
          Sección:
          </label>          
          <input
            type="text"
            value={studentData.seccion}
            readOnly
            style={{ padding: "8px", width: "100%",  maxWidth: "308px",  borderRadius: "4px", 
              border: "1px solid #ccc", 
              fontSize: "16px", 
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" 
            }} 
          />
      </div>

      <div>      
      <button onClick={esudiante}
      style={{backgroundColor: "blue", color: "white",  padding: "12px 20px",fontSize: "18px", fontWeight: "bold", 
       borderRadius: "8px",border: "none", cursor: "pointer", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
       }}>
       buscar
        </button>
        
      <button onClick={handleClear}
      style={{backgroundColor: "blue", color: "white",  padding: "12px 20px",fontSize: "18px", fontWeight: "bold", 
       borderRadius: "8px",border: "none", cursor: "pointer", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
       }}>
       limpiar
      </button>

      <button onClick={handleCancel}
      style={{backgroundColor: "blue", color: "white",  padding: "12px 20px",fontSize: "18px", fontWeight: "bold", 
       borderRadius: "8px",border: "none", cursor: "pointer", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
       }}>
       Cancelar
      </button>
      </div>
      </center>
    </div>
  );
};
export default Buscarestudiante;


