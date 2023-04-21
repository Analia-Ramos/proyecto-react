import React, { useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";


const CartWidget = () => {

  const {cart, getTotalQuantity} = useContext(CartContext)


  return (
    <div> 
      <Link to="/cart" className="nav-link fs-5" href="#"><FontAwesomeIcon icon={faShoppingBag}/></Link> 
        {
          cart.length > 0 && (
            <span className='cartStyle'>
              {getTotalQuantity()}
            </span>
          )
        }
      </div>
    )
}

export default CartWidget