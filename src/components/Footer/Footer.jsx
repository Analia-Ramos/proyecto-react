import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import muglogo from '../images/mug-logo-rb.png';


const Footer = () => {
  return (
    
    <Navbar>
      <Container>
        <img src={muglogo} alt="" width="80" height="70"/>
        <Navbar.Brand href="#home">Chulita Mugs - 2023</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Footer