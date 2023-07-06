import React, { useState } from 'react'
import logo from "../assets/logo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Landingpage() {
const[show,setShow]=useState(true)
	
  return (
<>
  <nav>
    <div className="container">
      <img src={logo}/>
      <input type="checkbox" id="showNav"/>
      <label  className="  toggleNav"  onClick={()=>setShow(!show)}>
{

	show?<i class="fa fa-times" aria-hidden="true"></i>:<i className="fas fa-bars"></i>
}


	  </label>
      <ul className={show?"show":"noshow"}>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section>
    <div className="container">
      <h1>liquid</h1>
      <h3>landing page</h3>

      <input type="search" placeholder="search..."/>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi commodi sed sunt est veritatis saepe doloremque dicta ducimus qui impedit harum fugiat, accusamus cupiditate dolores. Molestias ex aliquam facilis ut.</p>

      <a href="#">sign in</a>
      <a href="#">learn more...</a>
    </div>
  </section>
  </>
  )
}

export default Landingpage