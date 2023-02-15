import React from 'react'
import logo from '../images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'


const Navbar = () => {
    return (
        <>

<nav className="navbar">
  <div className="container-fluid  justify-content-between">
    <div className="navbar-brand" href="#">
      <img src= {logo} alt="" width="350" height="90" class="d-inline-block"/>
      
    </div>

    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
    </form>

    <a className="nav-link active fs-5" aria-current="page" href="#">Home <FontAwesomeIcon icon={faHouse}/></a>
    <a className="nav-link fs-5" href="#">My Account <FontAwesomeIcon icon={faUser}/></a>

    <CartWidget/>
    
  </div>
</nav>


        </>
    )
}

export default Navbar