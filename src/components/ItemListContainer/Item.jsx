import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {products} from './Products';



const Item = () => {
  return (
    

<div className='Card'>
{products.map ((products) =>
    <Card style={{ width: '30rem' }} className= "CardContainer">
        <Card.Img variant="top" src={products.image}/>
        <Card.Body>
            <Card.Title text={products.text}></Card.Title>
            <Card.Text price={products.price}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
    
        <ItemCount/>

        <Button className='custom-btn' variant="outline-light">Buy Now</Button>

        </Card.Body>
    </Card>

)}
</div>
    
  )
}

export default Item