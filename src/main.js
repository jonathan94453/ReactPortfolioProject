

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home'; 
import Sidebar from './components/SideBar/Sidebar';
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/Home" element={<Home />} /> 
    </Routes>
  
    </>
  )
}
export default Main;
