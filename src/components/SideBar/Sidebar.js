import "./Sidebar.css" 
import Logo from "./Logo.png"
import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = () => (
<div className="sidebar-container">



<div className="sidebar">
<Link className="logo" to="/"> 
<img className='img' src={Logo} alt="Logo" />
</Link> 
<Link to="/Experience">
<button className="aboutme">Experience</button>
</Link>
<Link to="/Accomplishments">
<button className="accomplishments">Accomplishments</button>
</Link>
<Link to="/AcRecord">
<button className="accomplishments">Academic Record</button> 
</Link>
<Link to="/ContactMe">
<button className="accomplishments">Contact Me</button> 
</Link>

</div> 


<div className="maincontent">
<div className="heading">
<h>Hi I'm Jonathan</h>
<p className="introtext">
I am 18 years old, and pursuing my Aerospace Engineering degree at Missouri University of Science and Technology in Rolla. <br/>

</p>
</div>
</div>



</div>

); 
   
export default Sidebar 