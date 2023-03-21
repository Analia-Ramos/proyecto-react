import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './ItemListContainer.css'


const Item = ({data}) => {

  return (
    
<div className='Card'>
  {data.map ((items) =>
    <Card style={{ width: '30rem' }} className= "CardContainer justify-content-center">
        <Card.Img variant="top" src={items.image}/>
        <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <br/>
            <Link to='/itemdetailcontainer'>
              <Button className='custom-btn' variant="outline-light">See More</Button>
            </Link>
        </Card.Body>
    </Card>
  )}
</div>
    
  )
}

export default Item