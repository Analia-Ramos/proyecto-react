import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Modal';



const Item = ({data}) => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    
<div className='Card'>
{data.map ((products) =>
    <Card style={{ width: '30rem' }} className= "CardContainer">
        <Card.Img variant="top" src={products.image}/>
        <Card.Body>
            <Card.Title text={products.text}></Card.Title>
            <Card.Text price={products.price}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>

            <Button className='custom-btn' variant="outline-light" onClick={() => setModalShow(true)}>See More</Button>

            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/>

        </Card.Body>
    </Card>

)}
</div>
    
  )
}

export default Item