import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./ItemDetail.css";

const ItemCount = ({onAdd}) => {

    const [count, setCount] = useState(0);

  return (
    <div className='count-btns'> 
    <Button onClick={() => setCount(count - 1)} className='count-btn' variant="outline-light"> - </Button>
    <p className='itemCount'>{count}</p>
    <Button onClick={() => setCount(count + 1)} className='count-btn' variant="outline-light"> + </Button>
    <Button className='custom-btn' variant="outline-light" onClick={() => onAdd(count)}>Add to Cart</Button>
    </div>
  )
}

export default ItemCount