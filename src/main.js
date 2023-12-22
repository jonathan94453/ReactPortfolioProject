

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home'; 
import Sidebar from './components/SideBar/Sidebar';
import Layout from './components/Layout/index'
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Sidebar />} />
      <Route path = "/About" element={<Home />} /> 
      <Route path = "/Accomplishments" element={<Layout/>} />
    </Routes>
  
    </>
  )
}
export default Main;
