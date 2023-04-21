import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CartItems = ({data}) => {
    
    const{removeProduct, getTotal} = useContext(CartContext);

    return (
    <> 
    <div className='cart-container'>
        <div className="cart-items">
            <p className='title'>Shopping Cart</p>
            <img variant="top" className='cart-image' src={data.image} />
            <div>
            <div className='prod-container'>
                <p className='prod-title'>{data.title}</p>
                <p> Quantity {data.quantity} </p>
                <p> Price ${data.price} </p>
                <p> Subtotal ${data.quantity * data.price}</p>
                <p> Total ${getTotal()} </p>
                <p> Is your order a gift? <input type="checkbox" id="check" className='checkbox'/></p>
            </div>
            <Button className='remove-btn' variant="outline-light" onClick={() => removeProduct(data.id)}>Remove</Button>
            <Link to="/" >
                <Button className='custom-btn' variant="outline-light"> Continue Shopping </Button>
            </Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default CartItems