import "./index.css" 
import Logo from "./Logo.png"
import { Link } from 'react-router-dom';
import React from 'react';
const Sidebar = () => (
<div className="container">



<div className="sidebar">

<Link className="logo" to="/Home"> 
<img className='img' src={Logo} alt="Logo" />
</Link> 
</div> 

<div className="maincontent">
<h> Hi, I'm Jonathan</h>
</div>

</div>

); 
   
export default Sidebar 