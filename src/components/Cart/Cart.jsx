import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import CartItems from './CartItems';
import mugs from "../images/mugs.jpg";



const Cart = () => {

  const{cart} = useContext(CartContext);

  if (cart.length === 0){
    return(
        <> 
          <p className='emptyCart'> Your basket is empty 
          <Link to="/" style={{color:"pink"}}> continue shopping! 
          <br />
          <img src={mugs} alt="" className='imgEmtyCart'/>
          </Link> 
          </p>
        </>
      );
    }



  return (
    <>
      {
        cart.map(data=> <CartItems key={data.id} data={data} />)
      }
    </>
  )
}

export default Cart