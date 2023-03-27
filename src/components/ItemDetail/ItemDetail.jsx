import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({data}) => {

  const{addProduct} = useContext(CartContext);

  return (
  <div className='container'>
    <Card style={{ width: '40rem' }} className= "CardContainer cardItem">
      <Card.Img variant="top" src={data.image}/>
    </Card>

    <div>
    <Card.Title> {data.title} </Card.Title>
      <Card.Text> {data.detail} </Card.Text>
      <p className='price'>${data.price}</p>
      <ItemCount/>
      <Button className='custom-btn' variant="outline-light" onClick={() => addProduct(data, 1)}>Add to Cart</Button>
    </div>

  </div>
);
}

export default ItemDetail