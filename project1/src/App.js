import React from 'react'
import { Routes,Route} from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Qualifications from './pages/Qualifications';

import './App.css';
function App() {
  return (
    <div className="App">
      <INavbar/>
      <Routes>
        <Route path="Aboutme" element={<Aboutme/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
