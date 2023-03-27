import React, { useState, createContext } from 'react'

export const CartContext = createContext();



const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  }

  const removeProduct = (id) => {
    const newCartItems = cart.filter((cart) => cart.id !== id)
    setCart(newCartItems);
  }


  const addProduct = (item, quantity) =>{
    if (isInCart(item.id)) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  


  const getTotalQuantity = () => {
    let quant = 0
    cart.forEach((e) => quant += e.quantity)
    return quant
  };

  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };


  return (
    <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct, getTotalQuantity, getTotal, cart}}> 
        {children}
    </CartContext.Provider>
  )
}


export default CartProvider