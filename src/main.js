

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Experience from './components/About Me/AboutMe'; 
import Sidebar from './components/SideBar/Sidebar';
import Accomplish from './components/Accomplishments/Accomplishments';
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/Experience" element={<Experience />} /> 
      <Route path = "/Accomplishments" element={<Accomplish/>} />
      <Route path = "/AcRecord" element={<Accomplish/>} /> 
      <Route path = "/ContactMe" element={<Contact/>} /> 
    </Routes>
  
    </>
  )
}
export default Main;
