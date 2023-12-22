

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import About from './components/About Me/AboutMe'; 
import Sidebar from './components/SideBar/Sidebar';
import Accomplishments from './components/Accomplishments/Accomplishments';
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/About" element={<About />} /> 
      <Route path = "/Accomplishments" element={<Accomplishments/>} />
      <Route path = "/Record" element={<Accomplishments/>} /> 
    </Routes>
  
    </>
  )
}
export default Main;
