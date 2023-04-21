import React from 'react';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import footerlogo from '../Assets/Images/footer.png';


const Footer = () => {
  return (
    <Navbar className='justify-content-center footer'>
        <img src={footerlogo} className='footer-image'alt="" width="100" height="90"/>
        <Navbar.Brand>2023</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text> 
                      
          </Navbar.Text>
        </Navbar.Collapse>

    </Navbar>
  )
}

export default Footer