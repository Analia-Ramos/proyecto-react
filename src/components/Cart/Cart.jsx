import React, {useContext} from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import CartItems from './CartItems';
import mugs from "../Assets/Images/mugs.jpg";
import background from '../Assets/Images/mugs1.JPG';
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
        <div className='empty-cart box'style={{backgroundImage: `url(${background})`}}> 
          <div className='box-container container empty-basket'> 
            <p> Your cart is empty</p> 
            <Link to="/" style={{color:"pink"}}>
              <span className='continue-shopping'>Continue shopping</span>  
            </Link> 
        </div>
        </div>
      </>
      );
    }

  return (
    <>
      {
        cart.map(data=> <CartItems key={data.id} data={data} handleClick={handleClick}/>)
      }
    </>
  )
}

export default Cart