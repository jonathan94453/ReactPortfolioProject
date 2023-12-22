import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss';   

const Layout = ({ children }) => {
   
    return (
    <div>
        <nav>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/About">About me</Link></li>
            </ul>
        </nav>
        <div>{children}</div>
 </div>
    ); 
}; 
export default Layout 