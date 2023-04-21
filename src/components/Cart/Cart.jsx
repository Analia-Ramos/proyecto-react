import React, {useContext} from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import CartItems from './CartItems';
import mugs from "../Assets/Images/mugs.jpg";
import Button from 'react-bootstrap/esm/Button';

const Cart = () => {

  const{cart, getTotal} = useContext(CartContext);

  const order = {
    buyer: {
      name:"John",
      email: "John@gmail.com",
      phone: "123456",
      address: "123 Street",
  },
    items: cart.map(items => ({ 
      id:items.id,
      title: items.title,
      price: items.price,
      quantity: items.quantity,
    })),
    total: getTotal(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }


  if (cart.length === 0){
    return(
      <> 
        <div className='empty-cart'> 
          <p> Your basket is empty</p> 
          <Link to="/" style={{color:"pink"}}>
            <span className='continue-shopping'>Continue shopping</span>  
          <br />
          <img src={mugs} alt="" className='img-empty'/>
          </Link> 
          
        </div>
      </>
      );
    }

  return (
    <>
      {
        cart.map(data=> <CartItems key={data.id} data={data} />)
      }
      <Button onClick={handleClick} className='custom-btn' variant="outline-light">Finish Shopping</Button>
    </>
  )
}

export default Cart