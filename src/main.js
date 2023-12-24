

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import About from './components/About Me/AboutMe'; 
import Sidebar from './components/SideBar/Sidebar';
import Accomplish from './components/Accomplishments/Accomplishments';
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/About" element={<About />} /> 
      <Route path = "/Accomplishments" element={<Accomplish/>} />
      <Route path = "/Record" element={<Accomplish/>} /> 
    </Routes>
  
    </>
  )
}
export default Main;
