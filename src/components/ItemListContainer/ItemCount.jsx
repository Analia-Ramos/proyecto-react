import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = () => {

    const [count, setCount] = useState(0);

  return (
    <div className='countBtn'> 
    <Button onClick={() => setCount(count - 1)} className='custom-btn' variant="outline-light"> - </Button>
    <p className='itemCount'>{count}</p>
    <Button onClick={() => setCount(count + 1)} className='custom-btn' variant="outline-light"> + </Button>
    </div>
  )
}

export default ItemCount