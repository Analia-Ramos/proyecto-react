import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import './ItemListContainer.css';


const Item = ({data}) => {

  const{addProduct} = useContext(CartContext);

  return (
    
<div className='cardContainer'>
  {data.map ((items) =>
    <Card style={{ width: '30rem' }} className= "cards">
        <Card.Img variant="top" src={items.image}/>
        <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>
            The ceramic material provides a durable and sturdy structure that is both microwave and dishwasher safe, making it perfect for everyday use.
            </Card.Text>
            <Link to={`/item/${items.id}`}>
              <Button className='custom-btn' variant="outline-light">See More</Button>
            </Link>
            <Button className='custom-btn' variant="outline-light" onClick={() => addProduct(data, 1)}>Add to Cart</Button>
        </Card.Body>
    </Card>
  )}
</div>
    
  )
}

export default Item