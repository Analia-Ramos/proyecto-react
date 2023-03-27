import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/item/:detailId" element={<ItemDetailContainer/>} />
        </Routes>
    )
}

export default AppRoutes