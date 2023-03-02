import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Modal'; 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const Item = ({data}) => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    
<div className='Card'>
{data.map ((products) =>
    <Container fluid>
    <Row>
    <Card style={{ width: '30rem' }} className= "CardContainer">
        <Card.Img variant="top" src={products.image}/>
        <Card.Body>
            <Card.Title>{products.text}</Card.Title>
            <Card.Text> ${products.price}
            </Card.Text>

            <Button className='custom-btn' variant="outline-light" onClick={() => setModalShow(true)}>See More</Button>

            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            products={products}
            />

        </Card.Body>
    </Card>

    </Row>
    </Container>
)}
</div>
    
  )
}

export default Item