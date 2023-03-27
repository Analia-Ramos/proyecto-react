import React, { useState ,useEffect } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection, query, where} from 'firebase/firestore';


export const ItemListContainer = () =>{

  const [data, setData] = useState([]);
  const {categoryId} = useParams();
  
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'items');

    if(categoryId) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId ))
      getDocs(queryFilter)
      .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
      .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
  }, [categoryId])


  return(
<> 
    <Item data={data}/> 
</>   

  )
}

export default ItemListContainer