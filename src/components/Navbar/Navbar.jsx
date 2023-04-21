import React from 'react';
import { Link , NavLink } from "react-router-dom";
import CartWidget from './CartWidget';
import logo from '../Assets/Images/logo1.png';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {



    return (
        <>
<div className="navbar">
  <NavLink to="/"> 
    <img src={logo} className="nav-logo"></img>
  </NavLink>
    <div className='nav-items'>
    <NavLink to="/" className="nav-link active fs-5" aria-current="page">Home</NavLink>
    <NavLink to="/user" className="nav-link active fs-5" aria-current="page">Log In</NavLink>
    <Link to="/itemlistcontainer">
    <NavDropdown title="Products" id="basic-nav-dropdown" className="nav-link products">
              <NavLink to='/category/mug' style={{textDecoration: "none"}}> 
                <NavDropdown.Item href="#action/3.1">Mugs</NavDropdown.Item> 
              </NavLink>
              <NavLink to='/category/candleholder' style={{textDecoration: "none"}}> 
                <NavDropdown.Item href="#action/3.2">Candle Holders</NavDropdown.Item>
              </NavLink>
              <NavLink to='/category/bowl' style={{textDecoration: "none"}}> 
                <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
              </NavLink>
              <NavLink to='/category/plate' style={{textDecoration: "none"}}> 
                <NavDropdown.Item href="#action/3.3">Plates</NavDropdown.Item>
              </NavLink>
    </NavDropdown>
    </Link>
    <NavLink to="/cart" className="nav-link active fs-5" aria-current="page"><CartWidget/></NavLink>
      </div>
</div>
      </>
    )
}

export default Navbar