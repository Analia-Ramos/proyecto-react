import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'



const ItemDetail = ({data}) => {
  return (

  <div>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={data.image}/>
      <Card.Body>
      <Card.Title> {data.title} </Card.Title>
      <Card.Text> {data.detail} {data.price}
      </Card.Text>
      <Button className='custom-btn' variant="outline-light">Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>

);
}

export default ItemDetail