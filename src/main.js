

import './main.css';
import {Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout'; 

function Main() {
return (
  <>
    <Routes> 
      <Route path= "/" element={<Layout />} />
    </Routes>
  
    </>
  )
}
export default Main;
