import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import footerlogo from '../images/footer.png';


const Footer = () => {
  return (
    
    <Navbar className='justify-content-center footer'>
      <Container>
        <img src={footerlogo} alt="" width="100" height="90"/>
        <Navbar.Brand>2023</Navbar.Brand>
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