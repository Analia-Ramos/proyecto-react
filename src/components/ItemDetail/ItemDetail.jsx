import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';
import ItemCount from './ItemCount';


const ItemDetail = ({data}) => {

  const{addProduct} = useContext(CartContext);

  return (
  <div className='Card container'>
    <Card style={{ width: '40rem' }} className= "CardContainer">
      <Card.Img variant="top" src={data.image}/>
    <Card.Body> 
    <Card.Title className='title'> {data.title} </Card.Title>
      <Card.Text> {data.detail} </Card.Text>
      <p className='price'>${data.price}</p>
      <ItemCount/>
      <Button className='custom-btn' variant="outline-light" onClick={() => addProduct(data, 1)}>Add to Cart</Button>
      <br />
      <Link to='/cart'> 
      <Button className='cart-btn' variant="outline-light">Go to Cart</Button>
      </Link>
      </Card.Body>
      </Card>
  </div>
);
}

export default ItemDetail