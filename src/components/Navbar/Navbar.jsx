import React, { useState } from 'react'
import { Link , NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import logo from '../images/logo.png';
import CartWidget from './CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {

  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearch(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

    return (
        <>

<nav className="navbar">
  <div className="container-fluid  justify-content-around">
    <div className="navbar-brand" href="#">
      <NavLink to="/"> 
      <img src= {logo} alt="" width="350" height="90" class="d-inline-block"/>
      </NavLink>
    </div>

    <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input value={value} onChange={handleChange} className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
    </form>

    <Link to="/itemlistcontainer" style={{color:"white", textDecoration: "none"}}>
    <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavLink to='/category/:mugs'> 
                <NavDropdown.Item href="#action/3.1">Mugs</NavDropdown.Item> 
              </NavLink>

              <NavLink to='/category/:candleholders'> 
              <NavDropdown.Item href="#action/3.2">Candle Holders</NavDropdown.Item>
              </NavLink>

              <NavLink to='/category/:bowls'> 
              <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
              </NavLink>

    </NavDropdown>
    </Link>

    <NavLink to="/" className="nav-link active fs-5 Icon" aria-current="page"><FontAwesomeIcon icon={faHouse}/></NavLink>
    <NavLink to="/user" className="nav-link fs-5 Icon" ><FontAwesomeIcon icon={faUser}/></NavLink>
    <NavLink to="/cartwidget" style={{color:"white", textDecoration: "none"}}> <CartWidget/> </NavLink>  

  </div>
</nav>

        </>
    )
}

export default Navbar