import React from 'react';
import { Link , NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import logo from '../images/logo.png';
import CartWidget from './CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {


    return (
        <>

  <Nav className="justify-content-center logo">
    <div className="navbar-brand" href="#">
      <NavLink to="/"> 
      <img src= {logo} alt="" width="400" height="150" class="d-inline-block"/>
      </NavLink>
    </div>
  </Nav>


<Nav className="justify-content-end navbar">  
    <Link to="/itemlistcontainer" style={{color:"pink", textDecoration: "none"}}>
    <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavLink to='/category/mug' style={{color:"pink", textDecoration: "none"}}> 
                <NavDropdown.Item href="#action/3.1">Mugs</NavDropdown.Item> 
              </NavLink>

              <NavLink to='/category/candleholder' style={{color:"pink", textDecoration: "none"}}> 
              <NavDropdown.Item href="#action/3.2">Candle Holders</NavDropdown.Item>
              </NavLink>

              <NavLink to='/category/bowl' style={{color:"pink", textDecoration: "none"}}> 
              <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
              </NavLink>
    </NavDropdown>
    </Link>

    <NavLink to="/" className="nav-link active fs-5 Icon" aria-current="page"style={{color:"pink", textDecoration: "none"}}><FontAwesomeIcon icon={faHouse}/></NavLink>
    <NavLink to="/user" className="nav-link fs-5 Icon" style={{color:"pink", textDecoration: "none"}}><FontAwesomeIcon icon={faUser}/></NavLink>
    <NavLink to="/cartwidget" style={{color:"pink", textDecoration: "none"}}><CartWidget/></NavLink>  
</Nav>



      </>
    )
}

export default Navbar