import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CartItems = ({data}) => {
    
    const{removeProduct, getTotal} = useContext(CartContext);

    return (
    <> 
    <div className='container'>
        <Card style={{ width: '50rem'}} className="CardContainer">
        <Card.Img variant="top" src={data.image} />
            <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <p> Quantity {data.quantity} </p>
            <p> Price ${data.price} </p>
            <p> Subtotal ${data.quantity * data.price}</p>
            <p> Total ${getTotal()} </p>
            <p>Is your order a gift? <input type="checkbox" className="my-checkbox" checked=""/></p>
        <Button className='custom-btn' variant="outline-light" onClick={() => removeProduct(data.id)}>Remove</Button>
        <Link to="/" >
            <Button className='custom-btn' variant="outline-light"> Continue Shopping </Button>
        </Link>
        <Link to="/">
        <Button className='custom-btn' variant="outline-light"> Checkout </Button>
        </Link>
        </Card.Body>
        </Card>
    </div>
    </>
    )
}

export default CartItems