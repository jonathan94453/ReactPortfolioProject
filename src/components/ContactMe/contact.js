import React from 'react'; 
import instagram from './Instagram.png'
import './contact.css'
import { Link } from 'react-router-dom';
const contact = () => (
<div className='contact-container'> 
<h1 className='headingtext'>
Contact <br/> 
Me
</h1>
<img src={instagram} alt="My Instagram" className='instagram'/> 
<p className="MoreContact">
<Link to="https://www.linkedin.com/in/jonathan-cino-43461b246/">Linkedin</Link> <br/>
<Link to="mailto:cino.jonathan@gmail.com">cino.jonathan@gmail.com</Link> <br/>
</p>



</div>
); 
export default contact 