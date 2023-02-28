import React, { useState ,useEffect } from 'react';
import './ItemListContainer.css'
import Item from './Item';
import {products} from './Products';
import {useParams} from 'react-router-dom';


export const ItemListContainer = () =>{

  const [data, setData] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const getData = new Promise (resolve => {
      setTimeout(() =>{
          resolve({products});
      },3000);
    });

    if (categoryId) {
      getData.then(res => setData(res.filter(products => products.category === categoryId)));
    } else {
      getData.then(res => setData(res));
    }
  
  }, [categoryId])
  

  return(
<> 

    <Item data={data}/>


</>   

  )
}

export default ItemListContainer