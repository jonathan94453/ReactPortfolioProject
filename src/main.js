

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Experience from './components/About Me/AboutMe'; 
import Sidebar from './components/SideBar/Sidebar';
import Accomplish from './components/Accomplishments/Accomplishments';
import Contact from './components/ContactMe/contact'
import Record from './components/AcademicRecord/record'
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/Experience" element={<Experience />} /> 
      <Route path = "/Accomplishments" element={<Accomplish/>} />
      <Route path = "/AcRecord" element={<Record/>} /> 
      <Route path = "/ContactMe" element={<Contact/>} /> 
    </Routes>
  
    </>
  )
}
export default Main;
