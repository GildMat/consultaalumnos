
import './App.css'
import Buscarestudiante from './paginas/Buscarestudiante';
import CursoForm from './paginas/CursoForm';
import Principal from './paginas/Principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (

 

<Routes>
<Route path="/" element={<Principal/>}/>
<Route path="Buscarestudiante" element={<Buscarestudiante/>}/>
<Route path="CursoForm" element={<CursoForm/>}/>
   
   </Routes>

   )
   
  
      
      }

export default App
