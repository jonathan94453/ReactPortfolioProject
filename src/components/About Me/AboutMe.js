import React from 'react'; 
import './AboutMe.css'; 
import { Link } from 'react-router-dom';
const aboutme = () => (
   <div className='aboutme-container'>
    <div className='container'>
    <h1 className='text'>Experience</h1>

    <p className='content'>
    National Equestrian Center Groundskeeper (June-July 2023) <br /> 
    <Link to="https://thenationalequestriancenter.com/">NEC</Link>  <br /> 
    Chick-Fil-A Front of House Member (July 2023-Present) <br />
    <Link to="https://www.chick-fil-a.com/locations/mo/wentzville">CFA Wentzville</Link> <br/> 
    </p>
    </div>
    </div> 
); 
export default aboutme