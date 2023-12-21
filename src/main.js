

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout/index'; 
import Home from './components/Home/Home'; 
function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Layout />} />
      <Route path = "/Home" element={<Home />} /> 
    </Routes>
  
    </>
  )
}
export default Main;
