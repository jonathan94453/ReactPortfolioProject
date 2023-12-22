import "./Sidebar.css" 
import Logo from "./Logo.png"
import { Link } from 'react-router-dom';
import React from 'react';
const Sidebar = () => (
<div className="container">



<div className="sidebar">
<Link className="logo" to="/About"> 
<img className='img' src={Logo} alt="Logo" />
</Link> 
<Link to="/About">
<button className="aboutme">About Me</button>
</Link>
<Link to="/Accomplishments">
<button className="accomplishments">Accomplishments</button>
</Link>

</div> 





<div className="maincontent">
<div className="heading">
<p>Hi. I'm Jonathan</p>
</div>
</div>



</div>

); 
   
export default Sidebar 