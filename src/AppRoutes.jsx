import React from 'react';
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/Navbar/CartWidget';


const AppRoutes = () => {
    return (
    <Routes>

        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/cartwidget" element={<CartWidget/>} />
        <Route exact path="/itemdetailcontainer" element={<ItemDetailContainer/>} />

    </Routes>
    )
}

export default AppRoutes